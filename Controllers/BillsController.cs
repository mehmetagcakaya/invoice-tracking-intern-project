using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BillManagerApp.Data;
using BillManagerApp.Models;
using BillManagerApp.Services;
namespace BillManagerApp.Controllers
{
    [Authorize]
    public class BillsController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;
        public BillsController(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }
// Bu kÄ±sÄ±mda public async Task<IActionResult> Index( yapÄ±yorum.
        public async Task<IActionResult> Index(
            string? q,
            DateTime? startDate,
            DateTime? endDate,
            string? minAmountStr,
            string? maxAmountStr,
            string? category,
            string? status,
            int? year,
            int? month)
        {
            var userId = _userManager.GetUserId(User);
            var query = _context.Bills.AsQueryable().Where(b => b.UserId == userId);
// Bu kÄ±sÄ±mda if (!string.IsNullOrWhiteSpace(q)) yapÄ±yorum.
            if (!string.IsNullOrWhiteSpace(q))
            {
                query = query.Where(b => b.Name.Contains(q) || (b.Notes ?? "").Contains(q));
            }
            if (startDate.HasValue)
            {
                query = query.Where(b => b.DueDate >= startDate.Value);
            }
            if (endDate.HasValue)
            {
                query = query.Where(b => b.DueDate <= endDate.Value);
            }
            decimal? minAmount = null;
            decimal? maxAmount = null;
            if (decimal.TryParse(minAmountStr, System.Globalization.NumberStyles.Any, System.Globalization.CultureInfo.CurrentCulture, out var parsedMin))
            {
                minAmount = parsedMin;
                query = query.Where(b => b.Amount >= parsedMin);
            }
            if (decimal.TryParse(maxAmountStr, System.Globalization.NumberStyles.Any, System.Globalization.CultureInfo.CurrentCulture, out var parsedMax))
            {
                maxAmount = parsedMax;
                query = query.Where(b => b.Amount <= parsedMax);
            }
            if (!string.IsNullOrWhiteSpace(category))
            {
                query = query.Where(b => b.Category == category);
            }
            if (!string.IsNullOrWhiteSpace(status))
            {
                switch (status.ToLower())
                {
                    case "paid":
                        query = query.Where(b => b.IsPaid);
                        break;
                    case "unpaid":
                        query = query.Where(b => !b.IsPaid);
                        break;
                    case "overdue":
                        query = query.Where(b => !b.IsPaid && b.DueDate < DateTime.Now);
                        break;
                }
            }
            var displayBills = await query.OrderBy(b => b.DueDate).ToListAsync();
            bool isFiltered = !(string.IsNullOrWhiteSpace(q) && !startDate.HasValue && !endDate.HasValue && !minAmount.HasValue && !maxAmount.HasValue && string.IsNullOrWhiteSpace(category) && string.IsNullOrWhiteSpace(status));
// Bu kÄ±sÄ±mda var allBills = await _context.Bills.Where(b => b.UserId == u... yapÄ±yorum.
            var allBills = await _context.Bills.Where(b => b.UserId == userId).ToListAsync();
            ViewBag.TotalUnpaidAmount = allBills.Where(b => !b.IsPaid).Sum(b => b.Amount);
            ViewBag.OverdueBills = allBills.Count(b => !b.IsPaid && b.DueDate < DateTime.Now);
            var unpaidList = allBills.Where(b => !b.IsPaid).ToList();
            var paidList = allBills.Where(b => b.IsPaid).ToList();
            if (isFiltered)
            {
                ViewBag.FilteredBills = displayBills;
            }
            ViewBag.UnpaidBills = unpaidList;
            ViewBag.PaidBills = paidList;
            ViewBag.IsFiltered = isFiltered;
// Bu kÄ±sÄ±mda ViewBag.Search = q; yapÄ±yorum.
            ViewBag.Search = q;
            ViewBag.StartDate = startDate?.ToString("yyyy-MM-dd");
            ViewBag.EndDate = endDate?.ToString("yyyy-MM-dd");
            ViewBag.MinAmount = minAmountStr;
            ViewBag.MaxAmount = maxAmountStr;
            ViewBag.Category = category;
            ViewBag.Status = status;
            ViewBag.Categories = await _context.Bills.Where(b => b.UserId == userId)
                                         .Select(b => b.Category).Distinct().ToListAsync();
            return View(displayBills);
        }
// Bu kÄ±sÄ±mda public IActionResult Create() yapÄ±yorum.
        public IActionResult Create()
        {
            return View();
        }
// Bu kÄ±sÄ±mda [HttpPost] yapÄ±yorum.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(Bill billInput)
        {
            try
            {
// Bu kÄ±sÄ±mda var userId = _userManager.GetUserId(User); yapÄ±yorum.
                var userId = _userManager.GetUserId(User);
                if (string.IsNullOrEmpty(userId))
                {
                    return Challenge();
                }
// Bu kÄ±sÄ±mda ModelState.Remove("UserId"); yapÄ±yorum.
                ModelState.Remove("UserId");
                ModelState.Remove("CreatedDate");
                ModelState.Remove("ModifiedDate");
                ModelState.Remove("IsPaid");
// Bu kÄ±sÄ±mda Console.WriteLine("### DEBUG – Entered Create POST"); yapÄ±yorum.
                Console.WriteLine("### DEBUG – Entered Create POST");
                foreach (var key in Request.Form.Keys)
                {
                    Console.WriteLine($"{key} = '{Request.Form[key]}'");
                }
                if (!ModelState.IsValid)
                {
                    Console.WriteLine("### DEBUG – ModelState invalid");
                    foreach (var kvp in ModelState)
                    {
                        foreach (var err in kvp.Value.Errors)
                        {
                            Console.WriteLine($"Field {kvp.Key}: {err.ErrorMessage}");
                        }
                    }
                    return View(billInput);
                }
// Bu kÄ±sÄ±mda billInput.UserId = userId; yapÄ±yorum.
                billInput.UserId = userId;
                billInput.CreatedDate = DateTime.Now;
                billInput.ModifiedDate = DateTime.Now;
                billInput.IsPaid = false;
                billInput.Id = 0; // ensure new
                try
                {
                    _context.Bills.Add(billInput);
                    int affected = await _context.SaveChangesAsync();
                    Console.WriteLine($"### DEBUG – rows affected: {affected}");
                    if (affected > 0)
                    {
// Bu kÄ±sÄ±mda if (billInput.RecurrenceType != RecurrenceType.None) yapÄ±yorum.
                        if (billInput.RecurrenceType != RecurrenceType.None)
                        {
                            var periodMonths = billInput.RecurrenceType == RecurrenceType.Monthly ? 1 : 12;
                            var nextDate = billInput.DueDate.AddMonths(periodMonths);
                            var lastDate = billInput.RecurrenceEnd ?? billInput.DueDate.AddMonths(periodMonths * 11); // default 1 year span if not specified
                            while (nextDate <= lastDate)
                            {
                                bool exists = await _context.Bills.AnyAsync(b => b.UserId == userId && b.Name == billInput.Name && b.DueDate == nextDate);
                                if (!exists)
                                {
                                    var newBill = new Bill
                                    {
                                        Name = billInput.Name,
                                        Amount = billInput.Amount,
                                        Category = billInput.Category,
                                        Notes = billInput.Notes,
                                        DueDate = nextDate,
                                        UserId = userId,
                                        CreatedDate = DateTime.Now,
                                        ModifiedDate = DateTime.Now,
                                        RecurrenceType = billInput.RecurrenceType,
                                        RecurrenceEnd = billInput.RecurrenceEnd,
                                        IsPaid = false
                                    };
                                    _context.Bills.Add(newBill);
                                }
                                nextDate = nextDate.AddMonths(periodMonths);
                            }
                            await _context.SaveChangesAsync();
                        }
                        TempData["Success"] = "Fatura başarıyla eklendi!";
                        if (Request.Form.ContainsKey("goto") && Request.Form["goto"] == "list")
                        {
                            return RedirectToAction(nameof(Index));
                        }
// Bu kÄ±sÄ±mda return RedirectToAction(nameof(Create)); yapÄ±yorum.
                        return RedirectToAction(nameof(Create));
                    }
                    TempData["Error"] = "Kayıt veritabanına yazılamadı. Lütfen tekrar deneyin.";
                }
                catch (DbUpdateException dbEx)
                {
                    TempData["Error"] = "Veritabanı hatası: " + dbEx.Message;
                }
                catch (Exception ex)
                {
                    TempData["Error"] = "Beklenmeyen bir hata oluştu: " + ex.Message;
                }
            }
            catch (Exception ex)
            {
                TempData["Error"] = "İşlem sırasında bir hata oluştu: " + ex.Message;
            }
            return View(billInput);
        }
// Bu kÄ±sÄ±mda public async Task<IActionResult> Edit(int? id) yapÄ±yorum.
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }
            var userId = _userManager.GetUserId(User);
            var bill = await _context.Bills.FirstOrDefaultAsync(b => b.Id == id && b.UserId == userId);
            if (bill == null)
            {
                return NotFound();
            }
            return View(bill);
        }
// Bu kÄ±sÄ±mda [HttpPost] yapÄ±yorum.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Name,Amount,DueDate,Category,Notes,IsPaid,PaymentDate,ReminderDate")] Bill bill)
        {
            if (id != bill.Id)
            {
                return NotFound();
            }
            var userId = _userManager.GetUserId(User);
            if (bill.UserId != userId)
            {
                return NotFound();
            }
            if (ModelState.IsValid)
            {
                try
                {
                    bill.ModifiedDate = DateTime.Now;
                    if (bill.IsPaid && bill.PaymentDate == null)
                    {
                        bill.PaymentDate = DateTime.Now;
                    }
                    else if (!bill.IsPaid)
                    {
                        bill.PaymentDate = null;
                    }
                    _context.Update(bill);
                    await _context.SaveChangesAsync();
                    TempData["Success"] = "Fatura başarıyla güncellendi!";
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!BillExists(bill.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(bill);
        }
// Bu kÄ±sÄ±mda [HttpPost] yapÄ±yorum.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> MarkAsPaid(int id)
        {
            var userId = _userManager.GetUserId(User);
            var bill = await _context.Bills.FirstOrDefaultAsync(b => b.Id == id && b.UserId == userId);
            if (bill != null)
            {
                bill.IsPaid = !bill.IsPaid;
                bill.PaymentDate = bill.IsPaid ? DateTime.Now : null;
                bill.ModifiedDate = DateTime.Now;
                await _context.SaveChangesAsync();
                TempData["Success"] = bill.IsPaid ? "Fatura ödendi olarak işaretlendi!" : "Fatura ödenmedi olarak işaretlendi!";
            }
            return RedirectToAction(nameof(Index));
        }
// Bu kÄ±sÄ±mda public async Task<IActionResult> Delete(int? id) yapÄ±yorum.
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }
            var userId = _userManager.GetUserId(User);
            var bill = await _context.Bills.FirstOrDefaultAsync(b => b.Id == id && b.UserId == userId);
            if (bill == null)
            {
                return NotFound();
            }
            return View(bill);
        }
// Bu kÄ±sÄ±mda [HttpPost, ActionName("Delete")] yapÄ±yorum.
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var userId = _userManager.GetUserId(User);
            var bill = await _context.Bills.FirstOrDefaultAsync(b => b.Id == id && b.UserId == userId);
            if (bill != null)
            {
                _context.Bills.Remove(bill);
                await _context.SaveChangesAsync();
                TempData["Success"] = "Fatura başarıyla silindi!";
            }
            return RedirectToAction(nameof(Index));
        }
        private bool BillExists(int id)
        {
            return _context.Bills.Any(e => e.Id == id);
        }
// Bu kÄ±sÄ±mda [HttpGet] yapÄ±yorum.
        [HttpGet]
        public async Task<IActionResult> Export(
            string? q,
            DateTime? startDate,
            DateTime? endDate,
            string? minAmountStr,
            string? maxAmountStr,
            string? category,
            string? status,
            int? year,
            int? month)
        {
            var userId = _userManager.GetUserId(User);
            if (string.IsNullOrEmpty(userId)) return Challenge();
            var query = _context.Bills.AsQueryable().Where(b => b.UserId == userId);
// Bu kÄ±sÄ±mda if (year.HasValue) yapÄ±yorum.
            if (year.HasValue)
                query = query.Where(b => b.DueDate.Year == year);
            if (month.HasValue)
                query = query.Where(b => b.DueDate.Month == month);
            var bills = await query.OrderBy(b => b.DueDate).ToListAsync();
            if (!bills.Any())
            {
                TempData["Error"] = "Seçilen ay için fatura bulunamadı.";
    }
    string title;
    string fileName;
    if (year.HasValue && month.HasValue)
    {
        title = $"{year} Yılı {month}. Ay Fatura Raporu";
        fileName = $"faturalar_{year}-{month:00}.pdf";
    }
    else if (year.HasValue)
    {
        title = $"{year} Yılı Fatura Raporu";
        fileName = $"faturalar_{year}.pdf";
    }
    else
    {
        title = "Fatura Raporu";
        fileName = "faturalar_tumu.pdf";
    }
    var pdfBytes = PdfService.GenerateBillsPdf(title, bills);
    return File(pdfBytes, "application/pdf", fileName);
        }
    }
}