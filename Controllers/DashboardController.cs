using System.Globalization;
using BillManagerApp.Data;
using BillManagerApp.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace BillManagerApp.Controllers
{
    [Authorize]
    public class DashboardController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;
        public DashboardController(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }
// Bu kÄ±sÄ±mda public async Task<IActionResult> Index(int? year, int? month... yapÄ±yorum.
        public async Task<IActionResult> Index(int? year, int? month)
        {
            var userId = _userManager.GetUserId(User);
            if (string.IsNullOrEmpty(userId))
                return Challenge();
            var bills = await _context.Bills.Where(b => b.UserId == userId).ToListAsync();
// Bu kÄ±sÄ±mda var earliestYear = bills.Any() ? bills.Min(b => b.DueDate.Ye... yapÄ±yorum.
            var earliestYear = bills.Any() ? bills.Min(b => b.DueDate.Year) : DateTime.Now.Year;
var latestYear = DateTime.Now.Year + 1; // show next year too
ViewBag.Years = Enumerable.Range(earliestYear, latestYear - earliestYear + 1).OrderByDescending(y => y).ToList();
// Bu kÄ±sÄ±mda var currentYear = year ?? DateTime.Now.Year; yapÄ±yorum.
            var currentYear = year ?? DateTime.Now.Year;
            ViewBag.SelectedYear = currentYear;
            var monthlyTotals = Enumerable.Range(1, 12)
                                           .Select(m => new
                                           {
                                               Month = m,
                                               Total = bills.Where(b => b.DueDate.Year == currentYear && b.DueDate.Month == m)
                                                             .Sum(b => b.Amount)
                                           })
                                           .ToList();
// Bu kÄ±sÄ±mda var categoryTotals = bills.Where(b => !year.HasValue || b.Du... yapÄ±yorum.
            var categoryTotals = bills.Where(b => !year.HasValue || b.DueDate.Year == year)
                                       .Where(b => !month.HasValue || b.DueDate.Month == month)
                                       .GroupBy(b => b.Category)
                                       .Select(g => new { Category = g.Key ?? "Diğer", Total = g.Sum(b => b.Amount) })
                                       .OrderByDescending(x => x.Total)
                                       .ToList();
            ViewBag.MonthLabels = monthlyTotals.Select(mt => CultureInfo.CurrentCulture.DateTimeFormat.GetAbbreviatedMonthName(mt.Month)).ToList();
            ViewBag.MonthValues = monthlyTotals.Select(mt => mt.Total).ToList();
            ViewBag.CategoryLabels = categoryTotals.Select(ct => ct.Category).ToList();
            ViewBag.CategoryValues = categoryTotals.Select(ct => ct.Total).ToList();
            return View();
        }
    }
}