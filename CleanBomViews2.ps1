# Remove leading BOM marker before directives in Views
Get-ChildItem -Recurse -Include *.cshtml -File |
ForEach-Object {
    $path = $_.FullName
    $bytes = [System.IO.File]::ReadAllBytes($path)
    # Strip UTF8 BOM if present
    if ($bytes.Length -ge 3 -and $bytes[0] -eq 0xEF -and $bytes[1] -eq 0xBB -and $bytes[2] -eq 0xBF) {
        $bytes = $bytes[3..($bytes.Length-1)]
    }
    $content = [System.Text.Encoding]::UTF8.GetString($bytes)
    $content = $content -replace "ï»¿", ""
    [System.IO.File]::WriteAllText($path, $content, [System.Text.Encoding]::UTF8)
}
