import { Link } from "react-router-dom";

function Login(){
    document.title = 'Login - Cellix Bio';
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
                <form>
                    <h2 className="SignUph2">Employee / Guest Login</h2>
                    <div className="SignUpcontent">
                    <div className="input-box">
                            <label for="unq_ID">
                                <input type="unq_ID" placeholder="Enter Your unique Employee ID / Guest ID" required></input>
                            </label>
                        </div>
                        <div className="input-box">
                            <label for="Email">
                                <input type="email" placeholder="Enter Your Email" required></input>
                            </label>
                        </div>
                        <div className="input-box">
                            <label for="password">
                                <input type="password" placeholder="Enter Password" required></input>
                            </label>
                        </div>
                    </div>
                    <div className="button-container">
                        <button type="submit">Login</button>
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