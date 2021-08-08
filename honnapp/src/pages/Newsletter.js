import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import Pdf from '../NewsletterAugust2021.pdf'
import { pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
function Newsletter() {
    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);
  
    // function onDocumentLoadSuccess({ numPages }) {
    //   setNumPages(numPages);
    // }
    return (
        <div className="newsletter-box">
{/* 
      <Document
        file={Pdf}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p> */}
<a href='/api/v1/print/example.pdf' target='_blank' rel='noopener noreferrer'></a>
        </div>
    )
}

export default Newsletter;