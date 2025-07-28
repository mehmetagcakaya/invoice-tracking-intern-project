# Fatura Yönetim Sistemi (BillManagerApp)

Bu proje, faturalarınızı kolayca takip edebilmeniz için ASP.NET Core 8.0 ve Entity Framework Core kullanılarak geliştirilmiş bir **Fatura Yönetim Sistemi** dir.

## Özellikler

- Kullanıcı kayıt / giriş (Identity)
- Fatura ekleme, görüntüleme, güncelleme ve silme (CRUD)
- Tekrarlayan fatura takibi ve hatırlatıcılar
- Kontrol Paneli ile özet veriler
- Koyu / Açık tema seçimi
- PDF çıktısı alma (QuestPDF)
- Modern, responsive arayüz (Bootstrap 5, Font Awesome 6)

## Kurulum

```bash
# Depoyu klonlayın
git clone https://github.com/mehmetagcakaya/invoice-tracking-intern-project.git
cd invoice-tracking-intern-project

# Bağımlılıkları indirin ve veritabanını oluşturun
# (Varsayılan olarak SQLite kullanır)

# Migration varsa uygula
 dotnet ef database update

# Uygulamayı çalıştırın
 dotnet watch run
```

> İlk açılışta `appsettings.json` dosyasında bağlantı dizesini (ConnectionString) dilediğiniz veritabanına göre güncelleyebilirsiniz.

## Kullanım

1. Siteye kayıt olun veya mevcut hesabınızla giriş yapın.
2. **Yeni Fatura** menüsünden fatura bilgilerinizi girerek kaydedin.
3. **Faturalarım** sayfasından fatura durumunuzu güncelleyebilir veya silebilirsiniz.
4. Kontrol Paneli sayfasından genel özet ve istatistikleri görüntüleyin.

## Geliştirici Bilgileri

- .NET 8.0
- ASP.NET Core Razor Pages
- Entity Framework Core (Code-First)
- SQLite (varsayılan) veya MS SQL / PostgreSQL
- QuestPDF

## Lisans

Bu proje **MIT Lisansı** ile lisanslanmıştır. Ayrıntılar için `LICENSE` dosyasına bakınız.
