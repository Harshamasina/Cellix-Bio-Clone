import NoInternetConnection from "../../NoInternetConn";

function Compounds({compound}){
    console.log(compound);
    const CompoundArray = compound.split("\n");
    // console.log(CompoundArray);

    return(
        <div>
            <h3 className="PITBh4">COMPOUNDS/METHODS</h3>
            <div className="CompoundsImgContainer">
                <NoInternetConnection>
                    {
                            CompoundArray.length>=1 ? CompoundArray.map((image) => {
                                return(
                                    <img className='PatentImages' src={image} alt=""></img>
                                    // <div className="Compoundcon" dangerouslySetInnerHTML={{__html: `<p className="CImage">${image}</p>`}}></div>
                                )
                            }) : <img width={500} height={450} src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.DataNotFound.png" alt="aws"></img>
                    }
                </NoInternetConnection>
            </div>
        </div>
    );
}
export default Compounds;