function PT(){
   document.title = 'Platform Technologies - Cellix Bio';
    return(
        <>
        <div className='patentlandingpage'>
              <video src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Pills.mp4" autoPlay muted loop className='patents_video_bg' type="video/mp4"/>
              <div className='pipeline-text'>
                            <div className='patents_text_1'>
                                <h1 className='pipelineCarouselh1'>PLATFORM TECHNOLOGIES</h1>
                            </div>
               </div>
              </div>
            <div className="PT">
            <div className="PTContainerh2h3h4">
                {/* <div className='DescContainerh3'><span></span>
                <span className="WWDh3">PLATFORM TECHNOLOGIES</span><span></span>
                </div> */}
                </div>

                {/* <div className="PTh2">
                   <h3 className="PTh3">SYNERGIX AUGMENTED INTELLIGENCE<sup>TM</sup></h3>
                </div> */}

                     <div className='DescContainerh3'><span></span>
                        <span className="WWDh3">SYNERGIX AUGMENTED INTELLIGENCE</span><span></span>
                    </div>

                {/* <div className="PTh2">
                   <h4 className="PTh3">CELLIX BIO's SCIENCE OF DRUG INNOVATION</h4>
                </div> */}
                
                <div className="PTpContainer">
                    <p className="PTp">By leveraging clinical, biomedical public databases, scientific literature and proprietary curated data, the technologies that make up our AI platform Synergix AI<sup>TM</sup> unlocks the critical knowledge gaps in molecular design. They also cross-validate each other's results and present preformed, data-driven hypotheses synchronizing in-life validation with unmatched speed and accuracy. This enables us to discover and potentially deliver novel therapies to patients living with serious medical needs in our therapeutic areas of focus at a great velocity and precision.</p>
                </div>
                
                <div className="PTpContainer">
                   <p className="PTp">Driven by a compound modeling approach coupled with a novel data bridging and prediction technology that we have built internally at Cellix Bio that begins by fragmenting seed drug molecules and derivatizing them with preferred fragment libraries to explore synthetically and biologically. Synergix AI<sup>TM</sup> then selects amongst these hypothetical molecules for those with desirable physicochemical and pharmacokinetic properties to proceed to the next steps towards lead optimization and development.</p>
                </div>
                
                <div className="PTpContainer">
                   <p className="PTp"><span className="AboutSpan">Cellix Bio's Synergix AI<sup>TM</sup></span> platform technology has the capability to deliver both clinical and commercial successes. Our approach is unique and enables important functional capabilities.</p>
                </div>
             </div>

                    {/* <h3 className="PTh3">Some key benefits are</h3> */}
                    <ul className="PTUL">
                        <li>Relatively rapid clinical development</li>
                        <li>Low drug development risk</li>
                        <li>Explicit improvements in patient outcomes</li>
                        <li>Improved value for patients, caregivers and market payers</li>
                    </ul>
        </>
    )
}

export default PT;