using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using BillManagerApp.Data;
using BillManagerApp.Models;
var builder = WebApplication.CreateBuilder(args);
// Not: connectionString deÄŸerini appsettings.json'dan Ã§ekiyorum.
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") ?? throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");
// Not: Entity Framework iÃ§in ApplicationDbContext'i kaydediyorum.
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(connectionString));
builder.Services.AddDatabaseDeveloperPageExceptionFilter();
// Not: Kimlik (Identity) ayarlarÄ±nÄ± yapÄ±landÄ±rÄ±yorum.
builder.Services.AddDefaultIdentity<ApplicationUser>(options => {
    options.SignIn.RequireConfirmedAccount = false;
    options.Password.RequireDigit = false;
    options.Password.RequireLowercase = false;
    options.Password.RequireNonAlphanumeric = false;
    options.Password.RequireUppercase = false;
    options.Password.RequiredLength = 6;
    options.User.RequireUniqueEmail = true;
})
.AddRoles<IdentityRole>()
.AddEntityFrameworkStores<ApplicationDbContext>()
.AddDefaultTokenProviders()
.AddDefaultUI();
// Not: Razor Pages'i servis koleksiyonuna ekliyorum.
builder.Services.AddRazorPages();
// Not: MVC Controller ve View servisini ekliyorum.
builder.Services.AddControllersWithViews();
// Not: Fatura tekrarlama (RecurringBillWorker) background servisini ekliyorum.
builder.Services.AddHostedService<BillManagerApp.Services.RecurringBillWorker>();
var app = builder.Build();
// Not: GeliÅŸtirme ortamÄ±ndayken Ã¶zel hata sayfalarÄ±nÄ± kullanÄ±yorum.
if (app.Environment.IsDevelopment())
{
    app.UseMigrationsEndPoint();
    app.UseDeveloperExceptionPage();
}
else
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();
// Not: Uygulama baÅŸlarken veritabanÄ± gÃ¶Ã§lerini (migrations) uyguluyorum.
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    db.Database.Migrate();
}
app.MapRazorPages();
// Not: VarsayÄ±lan rota ÅŸablonunu tanÄ±mlÄ±yorum.
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");
app.MapControllers();
app.Run();