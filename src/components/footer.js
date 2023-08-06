import React from "react";
import { Copyright, Email, GitHub, LinkedIn, Phone } from "@mui/icons-material";

export default function FooterBar() {
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        position: "absolute",
        left: "0",
        bottom: "0",
        right: "0",
      }}
    >
      <div
        style={{
          width: "100%",
          minHeight: "50px",
          background: "lightgrey",
          alignItems: "center",
          justifyContent: "left",
          paddingLeft: "30px",
          display: "flex",
        }}
      >
        <span>
          <Copyright fontSize="inherit" />
          &nbsp;2023 | Kevin Bratt | All Rights Reserved
        </span>
      </div>
      <span
        style={{
          width: "100%",
          minHeight: "50px",
          background: "lightgrey",
          alignItems: "center",
          justifyContent: "right",
          paddingRight: "30px",
          display: "flex",
        }}
      >
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/lateprgrmmr"
        >
          <GitHub sx={{ color: "black" }} fontSize="large" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/kevin-bratt-165639192"
        >
          <LinkedIn sx={{ color: "#0077b5" }} fontSize="large" />
        </a>
        <a href="mailto:kevinbratt1488@gmail.com">
          <Email sx={{ color: "orangered" }} fontSize="large" />
        </a>
        <a href="tel:+19717082444">
          <Phone sx={{ color: "green" }} fontSize="large" />
        </a>
      </span>
    </div>
  );
}
