import { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "../css/Home.css";
import PDFDisplayer from "../components/PDFDisplayer";
import axios from "axios";

function Home() {
  const [files, setFiles] = useState(undefined);
  const [progress, setProgress] = useState(0);

  const onChange = (event) => {
    if (event.target.files[0].size / 1000000 > 2) return;
    setFiles(event.target.files[0]);
  };

  const uploadFile = async () => {
    if (!files) return;

    await axios
      .post(
        "http://127.0.0.1:5000/parse_data",
        { file: files },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: function (progressEvent) {
            setProgress(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            );
          },
        }
      )
      .then((res) => console.log(res));

    // fetch("http://localhost:3001/parse-data", {
    //   method: "post",
    //   body: formData,
    // }).then((res) => console.log(res));

    setTimeout(() => {
      setFiles(undefined);
      setProgress(0);
    }, 500);
  };

  return (
    <div className="Home">
      <div className="HomeContainer">
        <div className="HomeTextContainer">
          <h1>Resume Upload</h1>
        </div>

        <div className="InputContainer">
          <input className="InputField" type="file" onChange={onChange}></input>
          <h1>Click here to select a file</h1>
          <h4>Size of file(s) must be less than 2MB</h4>
        </div>

        {/* <div className="HorizontalLine"></div> */}
        {files !== undefined ? (
          <div className="PDFContainer">
            <PDFDisplayer file={files} />
            <ProgressBar
              className="ProgressBar"
              variant={progress === 100 ? "success" : "primary"}
              striped
              animated
              now={progress}
              label={`${progress}%`}
            />
          </div>
        ) : (
          <></>
        )}
        <button className="HomeUpload" onClick={uploadFile}>
          Upload
        </button>
      </div>
    </div>
  );
}

export default Home;
