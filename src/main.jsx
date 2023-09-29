import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CvData from './cvData'
import { PdfDownload } from './pdfDownload'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <PdfDownload />
      <CvData />
      
  </React.StrictMode>,
)
