import React, {useRef, useState} from "react";

export const Register = (props) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] =useState('');
    const data = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Full Name: "+name + " EMail: "+ email + "  Password: " + password);
        console.log(data.current.value, "inital value");
        localStorage.setItem("userName", data.current.value);
        
        
    }
    return(
        <div className="form-auth-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input type="name" ref={data} onChange={(e)=>setName(e.target.value)} className="name" placeholder="Enter your Name" value={name}></input>
                <label htmlFor="email">Email</label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} className="email" placeholder="Enter Email ID" value={email}></input>
                <label htmlFor ="password">Password</label>
                <input type="password" onChange={(e)=> setPassword(e.target.value)} className="password" placeholder="Enter Password" value={password}></input>
                <button type="submit" >Register</button>
            </form>
            <button className="btn-link" onClick ={() =>props.onFormSwitch('login')}>Already a User?? Login Here</button>
        </div>
    )
}