// import error from "../Assets/Images/404.png"
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Error404(){
    const navigate = useNavigate();
    return(
        <div className="Errorcont">
            <img className="Errorpage" src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Error+Page.jpg" alt="Teamwork"></img>   
            <Button onClick={() => navigate('/Home')}className="Errorbutton" variant="outline-primary">Go to Home Page</Button>
        </div>
    );
}
export default Error404;