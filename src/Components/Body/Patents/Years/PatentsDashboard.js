import Card from 'react-bootstrap/Card';
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import {useParams} from 'react-router-dom';
import PatentCardSkeleton from './PatentCardSkeleton';
import NoInternetConnection from '../../NoInternetConn';


function PatentsDashboard(){
    const [patents, setPatents] = useState("");
    const {years} = useParams();
    const [loading, setLoading] = useState(true);
    document.title = `${years} - Cellix Bio Patents`;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await axios.get(`http://localhost:3004/patents/sort/years/${years}`);
                setPatents(data);
            } catch (err) {}
            setLoading(false);
        };
        fetchData();
    }, []);
    // console.log(patents.data);
    // console.log(patents.data.length);

    return(
        <div>
            <div className='patentlandingpage'>
              <img  className='patents_video_bg' src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/gruene-chemie.PNG" alt='image'/>
              <div className='pipeline-text'>
                            <div className='patents_text_1'>
                                <h1 className='pipelineCarouselh1'>Patents filed by Cellix Bio in {years}</h1>
                            </div>
                            </div>
              </div>
            {/* <div className="PDcontainer">
                <div className="PDcontainerh2">
                    <div className='DescContainerh3'><span></span>
                <span className="PDhead">Patents filed by Cellix Bio in {years}</span><span></span>
                </div>
                </div>
            </div> */}
            <NoInternetConnection>
                {loading ? (<PatentCardSkeleton></PatentCardSkeleton>) : (
                    patents.data.map((patent) => (
                        <div className='CardContainer' key={patent._id}>
                                <Card
                                    style={{ width: '90rem' }} 
                                    className = "shadow-lg PatentsCard">
                                <Card.Body>
                                        <Card.Title>
                                            <Link className='Wno' to= {"/patentInfo/"+patent.wno} target={"_blank"}>{patent.wno}</Link>
                                        </Card.Title>
                                        <div className='cardTextContainer'>
                                            <div className='cardTextInfoContainer'>
                                                <Card.Text className='CardTextInfo'>
                                                    <p>{patent.diseases}</p>
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
                )}
            </NoInternetConnection>   
        </div>
    );
}
export default PatentsDashboard;