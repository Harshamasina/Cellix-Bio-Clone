import Address from './Contacts/Address';
import SendUsEmail from './Contacts/SendUsEmail';

function Contact() {
  document.title = 'Contact - Cellix Bio';
  return (
    <>
      <div className='patentlandingpage'>
        <video src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Earth+-+1236.mp4" autoPlay muted loop className='patents_video_bg' type="video/mp4"/>
        <div className='pipeline-text'>
          <div className='patents_text_1'>
            <h1 className='pipelineCarouselh1'>CONTACT</h1>
          </div>
        </div>
      </div>
      
      <Address></Address>
      
      <div className='ContactCont'>
        <div className='DescContainerh3'>
          <span></span><span className="WWDh3">Send your Queries</span><span></span>
        </div>
      </div>
      <SendUsEmail></SendUsEmail>
    </>
  );
}
export default Contact;