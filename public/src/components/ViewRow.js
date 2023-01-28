import React from "react";
import "./../css/ViewRow.css";

function ViewRow(props) {
  const {
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
            <div className="FilterBox">
              <p>Address</p>
            </div>

            <div className="FilterBox">
              <p>Education</p>
            </div>
            <div className="FilterBox">
              <p>Degree</p>
            </div>
            <div className="FilterBox">
              <p>Skills</p>
            </div>
            {/* <div className="FilterBox">
              <p>Resume</p>
            </div> */}
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
            <div className="ViewBox">
              <p>{address || "Not Available"}</p>
            </div>
            <div className="ViewBox">
              <p>{education || "Not Available"}</p>
            </div>
            <div className="ViewBox">
              <p>{degree || "Not Available"}</p>
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
            {/* <div className="ViewBox">
              <p>
                {(
                  <a
                    href="/api/v1/print/example.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hello
                  </a>
                ) || "Not Available"}
              </p>
            </div> */}
          </>
        )}
      </div>
    </div>
  );
}

export default ViewRow;
