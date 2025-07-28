# Windows-1254 -> UTF-8 conversion for all Razor files
Get-ChildItem -Recurse -Include *.cshtml,*.cshtml.cs -File |
ForEach-Object {
    $bytes   = [System.IO.File]::ReadAllBytes($_.FullName)
    $content = [System.Text.Encoding]::GetEncoding(1254).GetString($bytes)
    [System.IO.File]::WriteAllText($_.FullName, $content, [System.Text.Encoding]::UTF8)
}
