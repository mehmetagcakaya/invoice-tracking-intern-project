using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace BillManagerApp.Models
{
    public class Bill
    {
        public int Id { get; set; }
        [Required]
        [StringLength(100)]
        public string Name { get; set; } = string.Empty;
        [Required]
        [Column(TypeName = "decimal(18,2)")]
        public decimal Amount { get; set; }
        [Required]
        public DateTime DueDate { get; set; }
        [Required]
        [StringLength(50)]
        public string Category { get; set; } = string.Empty;
        [StringLength(500)]
        public string? Notes { get; set; }
        public bool IsPaid { get; set; } = false;
        public DateTime? PaymentDate { get; set; }
        public DateTime? ReminderDate { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.Now;
        public DateTime? ModifiedDate { get; set; }
// Bu kÄ±sÄ±mda [Required] yapÄ±yorum.
        [Required]
        public string UserId { get; set; } = string.Empty;
// Bu kÄ±sÄ±mda public RecurrenceType RecurrenceType { get; set; } = Recurre... yapÄ±yorum.
        public RecurrenceType RecurrenceType { get; set; } = RecurrenceType.None;
        public DateTime? RecurrenceEnd { get; set; }
// Bu kÄ±sÄ±mda public virtual ApplicationUser? User { get; set; } yapÄ±yorum.
        public virtual ApplicationUser? User { get; set; }
    }
}