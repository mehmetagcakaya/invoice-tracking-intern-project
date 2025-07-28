using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using BillManagerApp.Models;

namespace BillManagerApp.Pages;

public class IndexModel : PageModel
{
    private readonly ILogger<IndexModel> _logger;
    private readonly UserManager<ApplicationUser> _userManager;

    public string UserDisplayName { get; set; } = string.Empty;

    public IndexModel(ILogger<IndexModel> logger, UserManager<ApplicationUser> userManager)
    {
        _logger = logger;
        _userManager = userManager;
    }

    public async Task OnGetAsync()
    {
        if (User.Identity?.IsAuthenticated == true)
        {
            var user = await _userManager.GetUserAsync(User);
            if (user != null)
            {
                // İsim ve soyisim varsa onları kullan, yoksa email kullan
                if (!string.IsNullOrEmpty(user.FirstName) && !string.IsNullOrEmpty(user.LastName))
                {
                    UserDisplayName = $"{user.FirstName} {user.LastName}";
                }
                else if (!string.IsNullOrEmpty(user.FirstName))
                {
                    UserDisplayName = user.FirstName;
                }
                else
                {
                    UserDisplayName = user.Email ?? "Kullanıcı";
                }
            }
        }
    }
}
