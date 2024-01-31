import { useState } from 'react';
import { saveAs } from 'file-saver';

const DownloadButton = () => {
    const [pdfUrl] = useState('/pdf/Catalog2024.pdf');
    const handleDownload = () => {
      fetch(pdfUrl)
        .then((response) => response.blob())
        .then((blob) => {
          saveAs(blob, 'dk_glass_catalog_2024.pdf');
        });
    };
  
    return (
    <div className="">
    <div className="hover_header" onClick={handleDownload}>
      <span className="text-[17px] px-[10px] font-semibold mx-[25px] cursor-pointer">
      Catalog
      </span>
    </div>
  </div>
    );
};

export default DownloadButton;