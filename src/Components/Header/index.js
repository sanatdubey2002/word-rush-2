import React, { useEffect, useState } from "react";

import './styles.css'
import { Link } from "react-router-dom";
function Header({onClick}) {
  useEffect(()=>{
    if(!localStorage.getItem("streak")){
      localStorage.setItem("streak",0);
     
    }
    if(!localStorage.getItem("best")){
     
      localStorage.setItem("best",0);
    }
  },[]);
 
  return (
    <div className="header">
      <Link to="/">
      <h1>
        WordDash
      </h1>
      </Link>
      <div className="lefts">
        <div >streak:{localStorage.getItem("streak")}</div>
        <div >best:{localStorage.getItem("best")}</div>
        <div className="left" onClick={onClick}>Hint</div>
       
      </div>
      
    </div>
  );
}

export default Header;
