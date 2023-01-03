import React from 'react'
import { Modal, Button } from 'react-bootstrap'
function ModalDialog() {
  const [isShow, invokeModal] = React.useState(!false)
  const initModal = () => {
    return invokeModal(false)
  }
  return (
    <>
      <Modal show={isShow} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton onLoad={initModal}>
          <Modal.Title>Cellix Bio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='Mcont'>
       <div className='Mcont1'><a href='https://ciiipr.in/' target={"blank"}> <img className='Mimg' src='https://www.cellixbio.com/images/partners/CIIIndustrial.jpg'></img></a></div>
        <div className='Mcont2'><p><strong>CII Industrial IP Awards</strong> is pleased to announce that Cellix Bio has been selected as the recipient of the 2021 for the Best Patent Portfolio</p></div>
        </div>
        </Modal.Body>
        <Modal.Body>
          <div className='Mcont'>
       <div className='Mcont1'><a href='https://www.frost.com/' target={"blank"}> <img className='Mimg2' src='https://www.cellixbio.com/images/partners/frost2020.jpg'></img></a></div>
        <div className='Mcont2'><p className='Mtext'><strong>Frost & Sullivan</strong> is pleased to announce that Cellix Bio has been selected as the recipient of the 2020 Indian Drug Discovery Platform Technology Innovation Award</p></div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={initModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ModalDialog