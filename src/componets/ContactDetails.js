import React from 'react'
import { Link } from 'react-router-dom';
import img from './assets/img.png'

const ContactDetails = (props) => {
  const {name,email}=props.location.state.contact;
  return (
    <div className="main">
      <div className="ui card center">
        <div className="image">
         <img src={img}
          style={{height:200 ,width:280}}
         alt="not found"/>
        </div>
        <div className="content">
         <div className="header">{name}</div>
         <div className="description">{email}</div>
        </div>
      </div>
       <Link to="/">
       <div className="center-div">
        <button className="ui button blue center"> go back</button>
      </div>
       </Link>
    </div>
  )
}

export default ContactDetails
