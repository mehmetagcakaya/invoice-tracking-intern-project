# Remove BOM and stray characters from all .cshtml files recursively
Get-ChildItem -Recurse -Include *.cshtml -File |
ForEach-Object {
    $content = [System.IO.File]::ReadAllText($_.FullName, [System.Text.Encoding]::UTF8)
    $content = $content -replace "\uFEFF", "" -replace "ï»¿", ""
    [System.IO.File]::WriteAllText($_.FullName, $content, [System.Text.Encoding]::UTF8)
}
