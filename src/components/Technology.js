import React from "react";

function Technology({ Header, Talent }) {
  return (
    <div
      class="card"
      style={{
        width: "16em",
        backgroundColor: "rgba(70, 71, 73, 0.8)",
        padding: "20px",
      }}
    >
      <h5 class="card-title text-center " style={{ color: "#e3ceb3" }}>
        {Header}
      </h5>
      <div class="card-body " style={{ color: "white" }}>
        {Talent.length !== 0
          ? Talent.map((element) => (
              <li style={{ marginLeft: "10px" }}>{element}</li>
            ))
          : null}
      </div>
    </div>
  );
}

export default Technology;
