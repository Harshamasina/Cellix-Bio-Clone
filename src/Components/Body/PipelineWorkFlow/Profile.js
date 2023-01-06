import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

function Profile(){
    const [empData, setEmpData] = useState();
    // const navigate = useNavigate();
    const ProfileData = async () => {
        try{
            const res = await fetch('http://localhost:3004/profile', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            console.log(data);
            setEmpData(data);
            
            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
            // navigate('/Login');
        }
    }
    
    useEffect(() => {
        ProfileData();
    });  
    console.log(empData);
    return(
        <>
            <div className='patentlandingpage'>
                <img  className='patents_video_bg' src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/About+Us.jpg" alt='Profile'/>
                <div className='pipeline-text'>
                    <div className='patents_text_1'>
                        <h1 className='pipelineCarouselh1'>PROFILE</h1>
                    </div>
                </div>
            </div>
            <div class="wrapper">
                <div class="team">
                    <div class="team_member">
                        <h3>Mani Harsha</h3>
                        <h5 className ="role">MERN Stack Developer</h5>
                        <div className="ProfileULContainer">
                            <ul className="ProfileUL">
                                <li className="ProfileLI">Unique ID : <span className="ProfileSpan">33****</span></li>
                                <li className="ProfileLI">Email ID : <span className="ProfileSpan">harshamasina1999@gmail.com</span></li>
                                <li className="ProfileLI">Phone Number : <span className="ProfileSpan">9032330333</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="wrapper">
                <div class="team">
                    <div class="team_member">
                        <h3>{empData.emp_name}</h3>
                        <h5 className ="role">{empData.emp_designation}</h5>
                        <div className="ProfileULContainer">
                            <ul className="ProfileUL">
                                <li className="ProfileLI">Unique ID : <span className="ProfileSpan">33****</span></li>
                                <li className="ProfileLI">Email ID : <span className="ProfileSpan">{empData.emp_email}</span></li>
                                <li className="ProfileLI">Phone Number : <span className="ProfileSpan">{empData.emp_phone}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>	 */}
        </>
    );
}
export default Profile;