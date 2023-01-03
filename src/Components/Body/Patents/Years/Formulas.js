import NoInternetConnection from "../../NoInternetConn";

function Formulas({formula}){
    console.log(formula);
    const FormulaArray = formula.split("\n");
    // console.log(FormulaArray);
    // console.log("Array Length: ", FormulaArray.length);

    return(
        <div>
            <h3 className="PITBh4">FORMULAS</h3>
            <div className="FormulaImgContainer">
                <NoInternetConnection>
                    {
                        FormulaArray.length>=1 ? FormulaArray.map((image) => {
                            return(
                                
                            <img className='PatentImages' src={image} alt=""></img>
                            )
                        }) : <img width={500} height={450} src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.DataNotFound.png" alt="aws"></img>
                    }
                </NoInternetConnection>
            </div>
        </div>
    );
}

export default Formulas;