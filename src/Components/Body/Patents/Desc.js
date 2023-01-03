function Desc(){
    return(
        <>
            <div className='patentlandingpage'>
                <video src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Virus.mp4" autoPlay muted loop className='patents_video_bg' type="video/mp4"/>
                {/* <div className='bg-overlay'></div> */}
                <div className='patents-text'>
                    <div className='patents_text_1'>
                        <h1 className='patentsCarouselh1'>INVENTIONS</h1>
                    </div>

                    <div className='patents_text_2'>
                        <h1 className='patentsCarouselh1'>GLOBAL PATENT PORTFOLIO</h1>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Desc;