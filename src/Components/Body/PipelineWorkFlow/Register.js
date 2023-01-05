import { Link } from "react-router-dom";
import { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register(){
    const navigate = useNavigate();
    document.title = 'Register - Cellix Bio';
    const [employee, setEmployee] = useState({
        name: "",
        employeeid: "",
        email: "",
        phone: "",
        designation: "",
        password: "",
        cpassword: ""
    });

    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name=e.target.name;
        value=e.target.value;
        setEmployee({...employee, [name]:value});
    };

    const PostData = async (e) => {
        e.preventDefault();
        const { name, employeeid, email, phone, designation, password, cpassword } = employee;
        const res = await fetch("http://localhost:3004/register", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(
                {
                    emp_name : name, 
                    emp_unq_id : employeeid, 
                    emp_email : email, 
                    emp_phone : phone, 
                    emp_designation : designation, 
                    emp_password : password, 
                    emp_cpassword : cpassword
                }
            )
        });
        const data = await res.json();
        if(res.status === 422 || !data ){
            window.alert("Registration Failed!");
            console.log("Registration Failed!");
        } else {
            window.alert("Submitted Successfully");
            console.log("Submitted Successfully");
            navigate("/Login");
        }
    };

    return(
        <>
            <div className='patentlandingpage'>
                <img  className='patents_video_bg' src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Regitser.jpg" alt='Careers'/>
                <div className='pipeline-text'>
                    <div className='patents_text_1'>
                        <h1 className='pipelineCarouselh1'>REGISTER</h1>
                    </div>
                </div>
            </div>

            <div className="Signupcontainer">
                <form method="POST">
                    <h2 className="SignUph2">Employee / Guest Sign Up</h2>
                    <div className="SignUpcontent">
                        <div className="input-box">
                            <label for="name">
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={employee.name}
                                    onChange={handleInputs}
                                    placeholder="Enter Your Name"
                                    autoComplete="off"
                                    required>
                                </input>
                            </label>
                        </div>
                        
                        <div className="input-box">
                            <label for="EmployeeID">
                                <input 
                                    type="text" 
                                    name="employeeid" 
                                    value={employee.employeeid} 
                                    onChange={handleInputs} 
                                    placeholder="Enter EmployeeID or GuestID" 
                                    required>
                                </input>
                            </label>
                        </div>
                        
                        <div className="input-box">
                            <label for="Email">
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={employee.email} 
                                    onChange={handleInputs} 
                                    placeholder="Enter Your Email" 
                                    required>
                                </input>
                            </label>
                        </div>
                        
                        <div className="input-box">
                            <label for="Phone">
                                <input 
                                    type="tel" 
                                    name="phone" 
                                    value={employee.phone} 
                                    onChange={handleInputs} 
                                    placeholder="Enter Phone Number" 
                                    required>
                                </input>
                            </label>
                        </div>
                        
                        <div className="input-box">
                            <label for="designation">
                                <input 
                                    type="text" 
                                    name="designation" 
                                    value={employee.designation} 
                                    onChange={handleInputs} 
                                    placeholder="Enter Your Designation"
                                    required>
                                </input>
                            </label>
                        </div>
                        
                        <div className="input-box">
                            <label for="password">
                                <input 
                                    type="password" 
                                    name="password" 
                                    value={employee.password} 
                                    onChange={handleInputs} 
                                    placeholder="Enter Password" 
                                    required>
                                </input>
                            </label>
                        </div>
                        
                        <div className="input-box">
                            <label for="Confirm Password">
                                <input 
                                    type="password" 
                                    name="cpassword" 
                                    value={employee.cpassword} 
                                    onChange={handleInputs} 
                                    placeholder="Confirm Password" 
                                    required>
                                </input>
                            </label>
                        </div>
                        {/* <span className="gender-title">Gender</span>
                        <div className="gender-category">
                            <input type="radio" name="gender" id="male"></input>
                            <label for="gender">Male</label>
                            <input type="radio" name="gender" id="female"></input>
                            <label for="gender">Female</label>
                            <input type="radio" name="gender" id="other"></input>
                            <label for="gender">Other</label>
                        </div> */}
                    </div>
                    
                    <div className="alert">
                        <p>By clicking Register, You agree to our <Link  href="/">Terms</Link>, Privacy Policy.</p>
                    </div>
                    
                    <div className="button-container">
                        {/* <button type="submit">Register</button> */}
                        <input className="button-container-Input"
                            type="submit" 
                            name="register" 
                            value="register" 
                            onClick={PostData}>
                        </input>
                    </div>
                </form>
            </div>
        </>
    );
}
export default Register;