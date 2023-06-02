import React from "react";
import "./Success.scss"
import icon from "../images/icon-success.svg";
import { useNavigate } from "react-router-dom";

const Success= () =>{
    const navigate = useNavigate();
    return (
        <div className="a">
            <img src={icon} alt=""/>
            <h1>Thanks for subscribing!</h1>
            <p>A confirmation email has been sent to <b>ash@loremcompany.com</b>. Please open it and click the button inside to confirm your subscription.</p>
            <button onClick={()=>{navigate("/")}}>Dismiss message</button>
        </div>
    );
}

export default Success;