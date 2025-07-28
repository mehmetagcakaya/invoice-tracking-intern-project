# Remove visible BOM artifacts and actual BOM from code files
Get-ChildItem -Recurse -Include *.cs,*.cshtml,*.cshtml.cs -File |
ForEach-Object {
    $content = [System.IO.File]::ReadAllText($_.FullName, [System.Text.Encoding]::UTF8)
    # Remove UTF8 BOM character if present (U+FEFF)
    $content = $content -replace "\uFEFF", ""
    # Remove mis-decoded sequence 'ï»¿'
    $content = $content -replace "ï»¿", ""
    [System.IO.File]::WriteAllText($_.FullName, $content, [System.Text.Encoding]::UTF8)
}
