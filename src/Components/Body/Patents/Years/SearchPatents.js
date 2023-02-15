import { useState } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function SearchPatents(){
    const [searchPatent, setSearchPatent] = useState();
    const [searchKey, setSearchKey] = useState();
    const searchHandle = async (e) => {
        let key = e.target.value;
        setSearchKey(key);
        if(key){
            let result = await fetch(`http://localhost:3004/patents/${key}`);
            result = await result.json()
            if(result){
                setSearchPatent(result);
            }
        }else{
            console.log("No Patent Found");
        }
    }
    // console.log(searchPatent);
    console.log(searchKey);

    return(
        <div>
            <div className="SearchPatentsh2Container">
                <h3 className="SearchPatentsh2">Cellix Bio Patent Intelligence</h3>
            </div>
            <div>
                <div className="SearchPatentContainer">
                   <input onChange={searchHandle} className="SearchBarPatents" type="search" placeholder="ENTER PATENT APPLICATION NUMBER OR THERAPEUTIC AREA OR PCT/IB****/NUMBER"></input>
                </div>
                {/* <div className="PatentsFoundContainer">
                    <p className="searchPatentsp">Search Results : <span className="searchPatentspan">{searchPatent && searchPatent.length}</span></p> 
                </div> */}
                {     
                        searchPatent && searchPatent.length === 0 ? 
                        <img className="searchPatentImg" src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Patent+Data+Not+Found.PNG" alt="not Found"></img> : 
                        searchPatent && searchPatent.map((patent) => (
                            <div className='CardContainer' key={patent._id}>
                                    <Card
                                        style={{ width: '90rem' }} 
                                        className = "shadow-lg PatentsCard">
                                        <Card.Body>
                                            <Card.Title>
                                                <Link className='Wno' to = {"/patentInfo/"+patent.wno} target={"_blank"}>{patent.wno}</Link>
                                            </Card.Title>
                                            <div className='cardTextContainer'>
                                                <div className='cardTextInfoContainer'>
                                                    <Card.Text className='CardTextInfo'>
                                                        <p>{patent.diseases}</p>
                                                        <p><span className='CardTextSpan'>Therapeutic Area: </span>{patent.therapeutic_area}</p>
                                                    </Card.Text>
                                                </div>
                                                <div className='cardTextDateContainer'>
                                                    <Card.Text>
                                                        <p><span className='CardTextSpan'>Publication Date: </span>{patent.publication_date}</p>
                                                    </Card.Text>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                            </div>
                    ))
                }
            </div>
        </div>
    );
}
export default SearchPatents;