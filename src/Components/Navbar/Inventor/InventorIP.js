import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';
import { useState, useEffect } from 'react';

function InventorIP(){
    const [usPatents, setUSPatents] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get(`http://localhost:3004/sort/uspatents`);
                setUSPatents(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    },[]);
    // console.log(usPatents);
    document.title = 'Intellectual Property - Cellix Bio';
    return(
        <>
                <div className="YearsContainerh2">
                    <h2 className="InventorIPh2">Mahesh Kandula has a portfolio of over 180+ U.S Patents and Applications</h2>
                </div>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h4>U.S PATENT PORTFOLIO</h4></Accordion.Header>
                            <Accordion.Body className='IPAB'>
                                    <Table striped bordered hover responsive className='mt-3 shadow-sm'>
                                        <thead>
                                            <tr>
                                                <th className='IPPatentTableHead'>S.NO</th>
                                                <th className='IPPatentTableHead'>PATENT NUMBER</th>
                                                <th className='IPPatentTableHead'>TITLE</th>
                                                <th className='IPPatentTableHead'>PUBLICATION DATE</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                usPatents.data && usPatents.data.map((uspatent) => (
                                                    <tr key={uspatent._id}>
                                                        <td>{uspatent.sno}</td>
                                                        <td className='usPatentNumber'>{uspatent.patent_number}</td>
                                                        <td className='usPatentTitle'>{uspatent.title}</td>
                                                        <td>{uspatent.publication_date}</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </Table>
                            </Accordion.Body>
                        </Accordion.Item>
                </Accordion>           
        </>
    )
}
export default InventorIP;