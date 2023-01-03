import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
function Teamwork(){
    const navigate = useNavigate();

    return(
        <>
            {/* <h3 className="TeamWorkh3">TEAM WORK</h3> */}
            <div className="TeamWorkContainer">
                <div className="TeamWorkImgdiv">
                  <img className="TeamWorkImg"
                   src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Team.png" alt="Teamwork"></img>
                   <Button onClick={() => navigate('/Leadership')} variant="outline-info" className='TeamworkButton'>Know More</Button>
                </div>
            </div>
        </>
    );
}
export default Teamwork;