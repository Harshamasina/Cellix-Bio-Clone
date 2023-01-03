import { Link } from "react-router-dom";

function Register(){
    document.title = 'Register - Cellix Bio';
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
                <form>
                    <h2 className="SignUph2">Employee / Guest Sign Up</h2>
                    <div className="SignUpcontent">
                        <div className="input-box">
                            <label for="name">
                                <input type="text" placeholder="Enter Your Name" required></input>
                            </label>
                        </div>
                        
                        <div className="input-box">
                            <label for="EmployeeID">
                                <input type="text" placeholder="Enter EmployeeID or GuestID" required></input>
                            </label>
                        </div>
                        
                        <div className="input-box">
                            <label for="Email">
                                <input type="email" placeholder="Enter Your Email" required></input>
                            </label>
                        </div>
                        
                        <div className="input-box">
                            <label for="Phone">
                                <input type="tel" placeholder="Enter Phone Number" required></input>
                            </label>
                        </div>
                        
                        <div className="input-box">
                            <label for="designation">
                                <input type="text" placeholder="Enter Your Designation" required></input>
                            </label>
                        </div>
                        
                        <div className="input-box">
                            <label for="password">
                                <input type="password" placeholder="Enter Password" required></input>
                            </label>
                        </div>
                        
                        <div className="input-box">
                            <label for="Confirm Password">
                                <input type="password" placeholder="Confirm Password" required></input>
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
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        </>
    );
}
export default Register;