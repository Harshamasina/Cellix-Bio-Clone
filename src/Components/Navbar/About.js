function About(){
    document.title = 'About - Cellix Bio';
    return(
        <>
            <div className="About">
                    <div className="AboutContainerh2">
                        <h2 className="AboutUsh2">WHO WE ARE</h2>
                    </div>
                   
                    <div className="AboutContainer">
                        <p className="Aboutp">
                        <span className="AboutSpan">Cellix Bio</span> is harnessing the power of AI to accelerate the drug discovery from bench to bedside. It's a journey that starts with access to large datasets, which is a prerequisite for applying AI. Large datasets are collected during compound optimization for many different properties.
                        </p>
                    </div>
                    
                    <div className="AboutContainer">
                        <p className="Aboutp">
                        <span className="AboutSpan">Cellix Bio</span> has spent the last five years developing a knowledge pipeline that pulls the data from various organized and amorphous data sources and curates and normalizes this knowledge via a data fabric. This allows us to focus on the most promising targets to progress into molecular design. These targets are tested in the lab and the results are fed back to our development teams to simulate the clinical success. Our R&D discovery technology platform, Synergix AITM aims to create value with a diversified portfolio of current pipeline drug candidates with strong intellectual property protection supported by an efficient capital structure. 
                        </p>
                    </div>
                    
                    <div className="AboutContainer">
                        <p className="Aboutp">
                        We aspire to intensely contribute to the healthcare system, and improve the lives of patients around the world. Cellix Bio's therapeutic portfolio is focused on diverse therapeutic areas including neurology, dermatology, gastrointestinal, inflammation, metabolic & life style, oncology, ophthalmology and infectious diseases.
                        </p>
                    </div>
            </div>
        </>
    )
}
export default About;