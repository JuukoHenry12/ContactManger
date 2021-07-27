import React from "react";
import img from "./assets/img.png";
import { Link } from "react-router-dom";
const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <div className="content">
        <img className="ui avatar image" src={img} alt="not found" />
        <Link to={{pathname:`/contact/${id}`,state:{contact:props.contact} }}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red" }}
        onClick={() => props.ClickHandler(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
