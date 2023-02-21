import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import NoInternetConnection from '../../NoInternetConn';

function Years(){
    const data = [
        {
            id: 1,
            year: 2023,
            count: 3
        },
        {
            id: 2,
            year: 2022,
            count: 51
        },
        {
            id: 3,
            year: 2021,
            count: 68
        },
        {
            id: 4,
            year: 2020,
            count: 58
        },
        {
            id: 5,
            year: 2019,
            count: 76
        },
        {
            id: 6,
            year: 2018,
            count: 30
        },
        {
            id: 7,
            year: 2017,
            count: 25
        },
        {
            id: 8,
            year: 2016,
            count: 50
        },
        {
            id: 9,
            year: 2015,
            count: 88
        },
        {
            id: 10,
            year: 2014,
            count: 90
        }
    ]
    return(
        <>
            <div className="YearsContainerh2">
                <h2 className="Yearsh2">Cellix Bio's Patents Yearwise (2022 to 2014)</h2>
            </div>
            
            <NoInternetConnection>
                <div className='yearscontainer'>
                    {
                        data.map((item) => {
                            return(
                                <div className="YearsButtonContainer" key={item.id}>
                                    <Button className='yearbtn' variant="dark" size="lg">
                                        <Link className='YearsLinks' to={`/PatentsDashboard/${item.year}`}>{item.year}<p className='yearp'>Patents: {item.count}</p></Link>
                                    </Button>
                                </div>
                            );
                        })
                    }
                </div>
            </NoInternetConnection>
        </>
    );
}
export default Years;