import React from "react";

function Events({ Image, Header, Content, Link, Height }) {
  return (
    <div
      class="card"
      style={{
        width: "15em",
        height: Height,
        backgroundColor: "rgba(70, 71, 73, 0.9)",
      }}
    >
      <img
        class="card-img-top"
        src={Image}
        alt="Card image cap"
        style={{ height: "100%", width: "100%", objectfit: "contain" }}
      ></img>
      <div class="card-body text-center">
        <h5 class="card-title " style={{ color: "white" }}>
          {Header}
        </h5>
        {Content ? (
          <p
            class="card-text"
            style={{ color: "white", opacity: 0.6, fontSize: "12px" }}
          >
            {Content}
          </p>
        ) : null}
        {Link ? (
          <a
            href={Link}
            class="btn btn-primary text-center"
            style={{ marginBottom: "10px" }}
          >
            See more info
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default Events;
