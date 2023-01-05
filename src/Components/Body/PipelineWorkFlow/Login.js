import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    document.title = 'Login - Cellix Bio';
    const [empId, setEmpId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:3004/login", {
            method: "POST",
            headers: {
            "Content-Type" : "application/json"
           },
           body: JSON.stringify(
                {
                    emp_unq_id : empId, 
                    emp_email : email, 
                    emp_password : password
                }
            )
        });
        const data = await res.json();
        if(res.status === 400 || !data){
            window.alert("Invalid Credentials");
        } else {
            window.alert("Login Successful");
            navigate("/Pipeline");
        }
    }

    return(
        <>
            <div className='patentlandingpage'>
                <img  className='patents_video_bg' src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Login.jpg" alt='Careers'/>
                <div className='pipeline-text'>
                    <div className='patents_text_1'>
                        <h1 className='pipelineCarouselh1'>LOGIN</h1>
                    </div>
                </div>
            </div>
            <div className="Signupcontainer">
                <form method="POST">
                    <h2 className="SignUph2">Employee / Guest Login</h2>
                    <div className="SignUpcontent">
                        <div className="input-box">
                            <label for="unq_ID">
                                <input
                                    type="text" 
                                    name="empid"
                                    value={empId}
                                    onChange = {(e) => setEmpId(e.target.value)}
                                    placeholder="Enter Your unique Employee ID / Guest ID" 
                                    required>
                                </input>
                            </label>
                        </div>
                        
                        <div className="input-box">
                            <label for="Email">
                                <input 
                                    type="email" 
                                    name="email"
                                    value={email}
                                    onChange = {(e) => setEmail(e.target.value)}
                                    placeholder="Enter Your Email" 
                                    required>
                                </input>
                            </label>
                        </div>
                        
                        <div className="input-box">
                            <label for="password">
                                <input 
                                    type="password" 
                                    name="password"
                                    value={password}
                                    onChange = {(e) => setPassword(e.target.value)}
                                    placeholder="Enter Password" 
                                    required>
                                </input>
                            </label>
                        </div>
                    </div>
                    <div className="button-container">
                        {/* <button type="submit">Register</button> */}
                        <input className="button-container-Input"
                            type="submit" 
                            name="login" 
                            value="Login" 
                            onClick={loginUser}>
                        </input>
                    </div>
                    <div className="LoginRegister">
                        <p className="LoginRegisterp">New User? <Link className="LoginRegisterLink" to="/Register">Sign Up</Link></p>
                    </div>
                </form>
            </div>
        </>
    );
}
export default Login;