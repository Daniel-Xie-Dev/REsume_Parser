import React from "react";

import "../css/PDFDisplayer.css";

function PDFDisplayer(props) {
  const { file } = { ...props };
  return (
    <div className="PDFDisplayer">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Icon_pdf_file.svg/1795px-Icon_pdf_file.svg.png"
        className="FileImage"
        alt=""
      />
      <div className="FileInformation">
        <h3>File name : {file.name}</h3>
        <h4>File size : {Math.floor(file.size / 1000)} Kb</h4>
        <h4>Last modified : {new Date(file.lastModified).toDateString()}</h4>
      </div>
    </div>
  );
}

export default PDFDisplayer;
