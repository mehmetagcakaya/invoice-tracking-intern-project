using BillManagerApp.Models;
using QuestPDF.Fluent;
using QuestPDF.Infrastructure;
using QuestPDF.Helpers;
namespace BillManagerApp.Services;
public static class PdfService
{
    static PdfService()
    {
        QuestPDF.Settings.License = LicenseType.Community;
    }
    public static byte[] GenerateBillsPdf(string title, IEnumerable<Bill> bills)
    {
        return Document.Create(container =>
        {
            container.Page(page =>
            {
                page.Margin(20);
                page.Header().AlignCenter().Text(title).FontSize(20).Bold();
                page.Content().Table(table =>
                {
                    table.ColumnsDefinition(columns =>
                    {
                        columns.RelativeColumn(3);
                        columns.RelativeColumn(2);
                        columns.RelativeColumn(2);
                        columns.RelativeColumn(2);
                        columns.RelativeColumn(2);
                        columns.RelativeColumn(2);
                    });
                    table.Header(header =>
                    {
                        header.Cell().Element(CellStyle).Text("Fatura AdÄ±").Bold();
                        header.Cell().Element(CellStyle).Text("Kategori").Bold();
                        header.Cell().Element(CellStyle).Text("Tutar").Bold();
                        header.Cell().Element(CellStyle).Text("Son Ã–deme").Bold();
                        header.Cell().Element(CellStyle).Text("Durum").Bold();
                        header.Cell().Element(CellStyle).Text("Ã–deme Tarihi").Bold();
                        static IContainer CellStyle(IContainer container) =>
                            container.DefaultTextStyle(x => x.SemiBold()).PaddingVertical(5);
                    });
                    foreach (var bill in bills)
                    {
                        table.Cell().Element(CellStyle).Text(bill.Name);
                        table.Cell().Element(CellStyle).Text(bill.Category);
                        table.Cell().Element(CellStyle).Text($"â‚º{bill.Amount}");
                        table.Cell().Element(CellStyle).Text(bill.DueDate.ToString("dd.MM.yyyy"));
                        table.Cell().Element(CellStyle).Text(bill.IsPaid ? "Ã–dendi" : "Ã–denmedi");
                        table.Cell().Element(CellStyle).Text(bill.PaymentDate?.ToString("dd.MM.yyyy") ?? "-");
                    }
                    static IContainer CellStyle(IContainer container) => container.PaddingVertical(2);
                });
                page.Footer().AlignCenter().Text($"OluÅŸturma tarihi: {DateTime.Now:dd.MM.yyyy HH:mm}").FontSize(10);
            });
        }).GeneratePdf();
    }
}