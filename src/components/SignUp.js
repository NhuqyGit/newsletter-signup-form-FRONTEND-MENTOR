import React from "react";
import IconList from "../images/icon-list.svg"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./SignUp.scss";


const SignUp = () =>{
    const navigate = useNavigate();
    const [isValid, setValid] = useState(true);
    const [email, setEmail] = useState("");
    function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const onEmailChangeHandle = (e) => {
        setEmail(e.target.value);
        setValid(validateEmail(e.target.value));
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(email!=="")
            navigate('/success');
    }

    return (
        <div className="app-container">
            <div className="container">
                <div className="signup-letter">
                    <h1 className="title">Stay updated!</h1>
                    <span className="des">Join 60.000+ product managers receiving monthly updates on.</span>
                    <div className="list-confirm">
                        <div className="list">
                            <img src={IconList} alt=""/>
                            <span>Product discovery and building what matters</span>
                        </div>

                        <div className="list">
                            <img src={IconList} alt=""/>
                            <span>Measuring to ensure updates are a success</span>
                        </div>

                        <div className="list">
                            <img src={IconList} alt=""/>
                            <span>And much more!</span>
                        </div>

                    </div>

                    <form novalidate onSubmit={handleSubmit}>
                        <div>
                            <label className="email-title">Email address</label>
                            <label style={{color: isValid ? "" : "#FF527B", opacity: isValid ? "0" : "1"}} className="invalid-email">Valid email required</label>
                        </div>
                        <input 
                            type="email"
                            placeholder="email@company.com"
                            value={email}
                            onChange={onEmailChangeHandle} style={{border: isValid ? "" : "1px solid #FF527B", background: isValid ? "" : "#ffe8e6" }}></input>
                        <button>Subscribe to monthly newsletter</button>
                    </form>
                </div>

                <div className="banner">
                    <div class="img"></div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;