$folderPath = 'E:\1_Documents\1_professional\website\gallery\' # replace with your actual folder path

Get-ChildItem -Path $folderPath -Filter *.md | ForEach-Object {
    $content = @"
---
layout: gallery
title: $($_.BaseName)
image_folder: /images/AiArt/$($_.BaseName)
---
"@
    Set-Content -Path $_.FullName -Value $content
}
