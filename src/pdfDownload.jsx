import './index.css'

function PdfDownload()
{
    return (
        <button id = "downloadButton" onClick={handleDownloadButton}>Download</button>
    )
}


function handleDownloadButton()
{
    window.print()

}

export {PdfDownload}