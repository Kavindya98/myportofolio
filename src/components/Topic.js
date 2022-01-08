import React from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import CodeIcon from "@mui/icons-material/Code";

function Topic({ Heading, Group, Code }) {
  return (
    <div class="row" style={{ marginTop: "60px" }}>
      <div class="col-10">
        <h4 style={{ color: "#e3ceb3" }}>{Heading}</h4>
      </div>

      <div class="col-1" style={{ color: "#e3ceb3" }}>
        {Group == 2 ? (
          <GroupsIcon style={{ fontSize: 40 }} />
        ) : (
          <PersonIcon style={{ fontSize: 40 }} />
        )}
      </div>
      <div
        class="col-1"
        style={{ color: Code ? "#e3ceb3" : "rgba(255, 255, 255, 0.2)" }}
      >
        <a href={Code ? Code : null}>
          <CodeIcon style={{ fontSize: 40 }} />
        </a>
      </div>
    </div>
  );
}

export default Topic;
