using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using BillManagerApp.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace BillManagerApp.Areas.Identity.Pages.Account.Manage
{
    [Authorize]
    public class IndexModel : PageModel
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;

        public IndexModel(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [TempData]
        public string? StatusMessage { get; set; }

        [BindProperty]
        public InputModel Input { get; set; } = new();

        public string? Email { get; set; }
        public class InputModel
        {
            [Required(ErrorMessage = "Ad gerekli")]
            [Display(Name = "Ad")]
            [StringLength(100, ErrorMessage = "{0} en fazla {1} karakter olabilir.")]
            public string? FirstName { get; set; }

            [Required(ErrorMessage = "Soyad gerekli")]
            [Display(Name = "Soyad")]
            [StringLength(100, ErrorMessage = "{0} en fazla {1} karakter olabilir.")]
            public string? LastName { get; set; }
        }

        public async Task<IActionResult> OnGetAsync()
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null)
            {
                return NotFound("Kullanıcı bulunamadı.");
            }

            Email = user.Email;
            Input = new InputModel
            {
                FirstName = user.FirstName,
                LastName = user.LastName
            };

            return Page();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                var currentUser = await _userManager.GetUserAsync(User);
                Email = currentUser?.Email;
                return Page();
            }

            // En az bir alan girilmek zorunda
            if (string.IsNullOrWhiteSpace(Input.FirstName) && string.IsNullOrWhiteSpace(Input.LastName))
            {
                ModelState.AddModelError(string.Empty, "Ad veya Soyad girmelisiniz");
                return Page();
            }

            var user = await _userManager.GetUserAsync(User);
            if (user == null)
            {
                return NotFound("Kullanıcı bulunamadı.");
            }

            if (!string.IsNullOrWhiteSpace(Input.FirstName))
            {
                user.FirstName = Input.FirstName.Trim();
            }
            if (!string.IsNullOrWhiteSpace(Input.LastName))
            {
                user.LastName = Input.LastName.Trim();
            }
            var result = await _userManager.UpdateAsync(user);
            if (!result.Succeeded)
            {
                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError(string.Empty, error.Description);
                }
                return Page();
            }

            await _signInManager.RefreshSignInAsync(user);
            StatusMessage = "Profiliniz güncellendi.";

            return RedirectToPage();
        }
    }
}
