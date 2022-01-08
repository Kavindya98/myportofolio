import React from "react";
import University from "../assests/images/Home/University.png";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

function PicInfo({ Header, Icon, Content }) {
  return (
    <div
      class="card"
      style={{
        width: "19em",
        height: "24em",
        backgroundColor: "#060709",
        padding: "10px",
      }}
    >
      <div class="card-header text-center" style={{ color: "#e3ceb3" }}>
        {Icon == 1 ? (
          <SchoolIcon style={{ fontSize: 50 }} />
        ) : Icon == 2 ? (
          <WorkIcon style={{ fontSize: 50 }} />
        ) : (
          <VolunteerActivismIcon style={{ fontSize: 50 }} />
        )}
      </div>
      <h5 class="card-title text-center" style={{ color: "#e3ceb3" }}>
        {Header}
      </h5>
      <div class="card-body" style={{ color: "white", opacity: 0.9 }}>
        <p class="card-text" style={{ textAlign: "center" }}>
          {Content}
        </p>
      </div>
    </div>
  );
}

export default PicInfo;
