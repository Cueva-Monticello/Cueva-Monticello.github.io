import React, {useState} from 'react';
import './Pdf.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import {Document, Page, pdfjs} from 'react-pdf';

// CDN
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.js";

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

function Pdf({file, loading_text}) {
  const [numPages, setNumPages] = useState();

  function onDocumentLoadSuccess({numPages}) {
    setNumPages(numPages);
  }

  return (
    <div className="embed-container">
      <Document loading={loading_text} file={file} onLoadSuccess={(d) => onDocumentLoadSuccess(d._pdfInfo)}
                options={options}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1}/>
        ))}
      </Document>
    </div>
  );
}

export default Pdf;
