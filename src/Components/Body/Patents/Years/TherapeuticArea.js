function TherapeuticArea(props){
    // console.log(props.therapeuticArea);
    // console.log(props.diseases);

    return(
        <div>
            <div className="TAContainer">
               {/* <h2 className="PITBh3">THERAPEUTIC AREA</h2> */}
               <h3 className="PITBh4">{props.therapeuticArea}</h3>
               <div className="PITBpContainer">
                  <p className="PITBp">{props.diseases}</p>
               </div>
            </div>
        </div>
    );
}
export default TherapeuticArea;