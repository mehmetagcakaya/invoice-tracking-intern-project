using BillManagerApp.Data;
using BillManagerApp.Models;
using Microsoft.EntityFrameworkCore;
namespace BillManagerApp.Services
{
    public class RecurringBillWorker : BackgroundService
    {
        private readonly IServiceScopeFactory _scopeFactory;
        private readonly ILogger<RecurringBillWorker> _logger;
        public RecurringBillWorker(IServiceScopeFactory scopeFactory, ILogger<RecurringBillWorker> logger)
        {
            _scopeFactory = scopeFactory;
            _logger = logger;
        }
        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
// Not: Ä°ptal isteÄŸi gelene kadar dÃ¶ngÃ¼ Ã§alÄ±ÅŸÄ±yor.
            while (!stoppingToken.IsCancellationRequested)
            {
                try
                {
                    await ProcessRecurringBills(stoppingToken);
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, "RecurringBillWorker error");
                }
// Not: Mevcut zamanÄ± hesaplÄ±yorum.
                var now = DateTime.Now;
                var next = now.Date.AddDays(1).AddHours(2);
                var delay = next - now;
                await Task.Delay(delay, stoppingToken);
            }
        }
        private async Task ProcessRecurringBills(CancellationToken token)
        {
            using var scope = _scopeFactory.CreateScope();
            var db = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
            var today = DateTime.Today;
            var bills = await db.Bills
                .Where(b => b.RecurrenceType != RecurrenceType.None && (!b.RecurrenceEnd.HasValue || b.RecurrenceEnd >= today))
                .ToListAsync(token);
            foreach (var bill in bills)
            {
                DateTime nextDate = bill.RecurrenceType switch
                {
                    RecurrenceType.Monthly => bill.DueDate.AddMonths(1),
                    RecurrenceType.Yearly => bill.DueDate.AddYears(1),
                    _ => bill.DueDate
                };
                if (nextDate <= today) // if original due date in past and not advanced yet, advance until future
                {
                    while (nextDate <= today)
                    {
                        nextDate = bill.RecurrenceType == RecurrenceType.Monthly ? nextDate.AddMonths(1) : nextDate.AddYears(1);
                    }
                }
                bool exists = await db.Bills.AnyAsync(x => x.UserId == bill.UserId && x.Name == bill.Name && x.DueDate == nextDate, token);
                if (!exists && (!bill.RecurrenceEnd.HasValue || nextDate <= bill.RecurrenceEnd.Value))
                {
                    var newBill = new Bill
                    {
                        Name = bill.Name,
                        Amount = bill.Amount,
                        Category = bill.Category,
                        Notes = bill.Notes,
                        DueDate = nextDate,
                        UserId = bill.UserId,
                        CreatedDate = DateTime.Now,
                        ModifiedDate = DateTime.Now,
                        RecurrenceType = bill.RecurrenceType,
                        RecurrenceEnd = bill.RecurrenceEnd,
                        IsPaid = false
                    };
                    db.Bills.Add(newBill);
                }
            }
            await db.SaveChangesAsync(token);
        }
    }
}