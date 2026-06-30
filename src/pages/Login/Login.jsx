import React , {useState} from "react";
import "./Login.css"
function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [emailError,setEmailError]=useState("");
    const [passwordError,setPasswordError]=useState("");

    let isValid = true;

    function handleEmailChange(event){
            setEmail(event.target.value);
            setEmailError("");
    }

    function handlePasswordChange(event){
            setPassword(event.target.value);    
             setPasswordError("");  
    }

    function handleSubmit(event){
        event.preventDefault();
        if(email.trim() === ""){
            isValid=false;
            setEmailError("Email is required.");
            
        }
        if(password.trim() === ""){
            isValid=false;
            setPasswordError("Password is required.")
        }
        if(isValid){
            
            alert("Login Successful")
        }
       
    }
    return(<div className="container">
        <div className="login-card">
            <h1>Employee Management System</h1>
            <p>Welcome Back 👋</p>
    <form  onSubmit={handleSubmit}>
    <label htmlFor="email">Email: </label> <input id="email" type="email" onChange={handleEmailChange} value={email} /> <br />
    {emailError && <p className="error">{emailError}</p>} 
    <label htmlFor="password">Password:</label>  <input id="password" type="password" onChange={handlePasswordChange} value={password}/><br />
    {passwordError && <p className="error">{passwordError}</p>} 
    <button type="submit">Submit</button>
    </form>
    </div>
    </div>)
}

export default Login;