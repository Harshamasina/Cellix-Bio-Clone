import InventorYears from "./Inventor/InventorYears";
import InventorIP from "./Inventor/InventorIP";

function Inventor() {
  document.title = 'Inventor - Cellix Bio';
  return (
    <>
      <div className='patentlandingpage'>
          <video src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Neurons.mp4" autoPlay muted loop className='patents_video_bg' type="video/mp4"/>
            <div className='pipeline-text'>
               <div className='patents_text_1'>
                 <h1 className='pipelineCarouselh1'>INVENTOR</h1>
                </div>
              </div>
           </div>
           <div className='LeaderContainer'>
              <div className='LeaderContainer1'>
                <div className='LeaderImgContainer'>
                    <img className='LeaderImg' src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.Leadership.Mahesh.PNG" alt='Limage'/>
                </div>
                <div className='LeaderTitleContainer'>
                    <h1 className='LeaderTitle'>Mahesh Kandula</h1><p className='Leadertext'>Inventor</p>
                </div>
              </div>
              <div className='LeaderContainer2'>
              <div className='LeaderSubTitleContainer'> 
                  <div className='DescContainerh3'><span></span>
                    <span className="WWDh3">About Mahesh Kandula</span><span></span>
                </div>
            </div>  
            <hr className='LeaderHR'></hr>
            <div className='LeaderMsgContainer'>
                <p className='LeaderMsg'>Mahesh brings over 18 years of scientific and entrepreneurial experience in the life science industry. Mr. Kandula has been named an inventor on 184 United States Patents and Applications and, more than 640 International Patent Applications. Mr. Kandula received his Master of Technology degree from IIT Kharagpur.</p>
            </div>
        </div>
      </div>
      <InventorYears></InventorYears>
      <InventorIP></InventorIP>
    </>
  );
}

export default Inventor;