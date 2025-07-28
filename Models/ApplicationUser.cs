using Microsoft.AspNetCore.Identity;
namespace BillManagerApp.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.Now;
// Bu kÄ±sÄ±mda public virtual ICollection<Bill> Bills { get; set; } = new L... yapÄ±yorum.
        public virtual ICollection<Bill> Bills { get; set; } = new List<Bill>();
    }
}