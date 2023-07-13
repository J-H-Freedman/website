$folderPath = 'E:\1_Documents\1_professional\website\gallery\AiGeneratedArt' # your actual folder path

Get-ChildItem -Path $folderPath -Filter *.html | ForEach-Object {
    $newName = $_.BaseName + ".md"
    Rename-Item -Path $_.FullName -NewName $newName
}
