// import axios from "axios";
import React, { useState } from "react";
import "./../css/ViewRow.css";

function ViewRow(props) {
  const {
    _id,
    firstName,
    lastName,
    phone,
    email,
    address,
    education,
    degree,
    skills,
    resume,
    isFilter,
    sortCallback,
  } = {
    ...props.row,
  };

  const [download, setDownload] = useState(null);

  const openPDFHandler = async () => {
    // await axios
    //   .get(`http://localhost:3001/getResumeById?id=${_id}`)
    //   .then((response) => {
    //     const buffer = response.data.resume;
    //     const base64 = buffer.toString("base64");
    //     const blob = new Blob([base64], { type: "application/pdf" });
    //     const link = document.createElement("a");
    //     link.href = URL.createObjectURL(blob);
    //     link.download = "resume.pdf";
    //     link.target = "_blank";
    //     link.click();
    //   });

    alert("Work in progress");
  };

  return (
    <div className="ViewContainer">
      <div className="ViewRow">
        {isFilter ? (
          <>
            <div className="FilterBox">
              <div className="dropdown dropdown-6">
                <p>First Name</p>
              </div>
            </div>
            <div className="FilterBox">
              <div className="dropdown dropdown-6">
                <p>Last Name</p>
              </div>
            </div>
            {/* <div className="FilterBox">
              <p>Phone</p>
            </div>
            <div className="FilterBox">
              <p>Email</p>
            </div> */}
            {/* <div className="FilterBox">
              <p>Address</p>
            </div> */}

            <div className="FilterBox">
              <p>Education</p>
            </div>
            <div className="FilterBox">
              <p>Degree</p>
            </div>
            <div className="FilterBox">
              <p>Skills</p>
            </div>
            <div className="FilterBox">
              <p>Resume</p>
            </div>
          </>
        ) : (
          <>
            <div className="ViewBox">
              <p>{firstName || "Not Available"}</p>
            </div>
            <div className="ViewBox">
              <p>{lastName || "Not Available"}</p>
            </div>
            {/* <div className="ViewBox">
              <p>{phone || "Not Available"}</p>
            </div>
            <div className="ViewBox">
              <p>{email || "Not Available"}</p>
            </div> */}
            {/* <div className="ViewBox">
              <p>{address || "Not Available"}</p>
            </div> */}
            <div className="ViewBox">
              {(
                <ul className="SkillList">
                  {education?.map((value, index) => {
                    if (index < 3) {
                      return (
                        <li key={index} className="SkillItem">
                          {value}
                        </li>
                      );
                    }
                    return <></>;
                  })}
                </ul>
              ) || "Not Available"}
            </div>
            <div className="ViewBox">
              {(
                <ul className="SkillList">
                  {degree?.map((value, index) => {
                    if (index < 3) {
                      return (
                        <li key={index} className="SkillItem">
                          {value}
                        </li>
                      );
                    }
                    return <></>;
                  })}
                </ul>
              ) || "Not Available"}
            </div>
            <div className="ViewBox">
              {(
                <ul className="SkillList">
                  {skills?.map((value, index) => {
                    if (index < 3) {
                      return (
                        <li key={index} className="SkillItem">
                          {value}
                        </li>
                      );
                    }
                    return <></>;
                  })}
                </ul>
              ) || "Not Available"}
            </div>
            <div className="ViewBox">
              {download ? (
                <a href={`data:application/pdf;base64,${download}`}>Open PDF</a>
              ) : (
                <button onClick={openPDFHandler}>Download Resume</button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ViewRow;
