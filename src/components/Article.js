import React from "react";

function Article({ Image, Tag, Header, Content, Link }) {
  return (
    <div
      class="card"
      style={{
        width: "20em",
        height: "30em",
        backgroundColor: "rgba(70, 71, 73, 0.9)",
      }}
    >
      <img class="card-img-top" src={Image} alt="Card image cap"></img>

      <div class="card-body text-center ">
        <p class="card-text" style={{ color: "#106efd", fontWeight: "500" }}>
          {Tag}
        </p>
        <h5 class="card-title text-center" style={{ color: "white" }}>
          {Header}
        </h5>

        <p
          style={{
            color: "white",
            opacity: 0.8,
            marginTop: "15px",
            textAlign: "justify",
            textjustify: "inter-word",
          }}
        >
          {Content}
        </p>

        <a
          href={Link}
          class="btn btn-primary "
          style={{ color: "106efd", marginTop: "20px" }}
        >
          Continue Read
        </a>
      </div>
    </div>
  );
}

export default Article;
