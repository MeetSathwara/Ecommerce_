import React from "react";
import "./Contact.css";
import { Button } from "@mui/material";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:1195Meetaishnavi@gmail.com">
        <Button>Contact: 1195Meetaishnavi@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
