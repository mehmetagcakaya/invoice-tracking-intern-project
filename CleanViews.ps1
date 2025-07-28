# Clean BOM and leading whitespace in Views
Get-ChildItem -Recurse -Include *.cshtml -File |
ForEach-Object {
    $text = [System.IO.File]::ReadAllText($_.FullName, [System.Text.Encoding]::UTF8)
    # Remove BOM chars
    $text = $text -replace "\uFEFF", "" -replace "ï»¿", ""
    # Ensure @model or @addTagHelper starts at line start
    $text = $text -replace "(?m)^\s+@model","@model"
    $text = $text -replace "(?m)^\s+@addTagHelper","@addTagHelper"
    [System.IO.File]::WriteAllText($_.FullName, $text, [System.Text.Encoding]::UTF8)
}
