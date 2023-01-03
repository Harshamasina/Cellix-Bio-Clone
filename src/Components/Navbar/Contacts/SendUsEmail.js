import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SendUsEmail(){
    let [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
});

let name, value;
let handleInputs = (e) => {
  console.log(e);
   name=e.target.name;
   value = e.target.value;
   setUser({...user, [name]:value});
};

const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, subject, message } = user;
    const res = await fetch("http://localhost:3004/contact", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({name, email, phone, subject, message})
    });
    const data = await res.json();
    if(data.status === 422 || !data ){
        window.alert("Invalid Form");
        console.log("Invalid Form");
    } else {
      window.alert("Submitted Successfully");
      console.log("Submitted Successfully");
  }
}
    return(
        <>
            
                <div className='CUFormContainer'>
                    <Form method="POST">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>NAME<sup>*</sup></Form.Label>
                            <Form.Control 
                            name= "name"
                            value={user.name}
                            onChange={handleInputs} 
                            className='shadow-lg'
                            type="text" placeholder="Your Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>EMAIL<sup>*</sup></Form.Label>
                            <Form.Control 
                            name="email"
                            value={user.email}
                            onChange={handleInputs}
                            className='shadow-lg'
                            type="email" placeholder="Email Address" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>PHONE</Form.Label>
                            <Form.Control
                            name="phone" 
                            value={user.phone}
                            onChange={handleInputs} 
                            className='shadow-lg'
                            type="text" placeholder="Contact Phone" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>SUBJECT<sup>*</sup></Form.Label>
                            <Form.Control 
                            name="subject" 
                            value={user.subject}
                            onChange={handleInputs} 
                            className='shadow-lg'
                            type="text" placeholder="Subject"/>
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>MESSAGE<sup>*</sup></Form.Label>
                            <Form.Control
                            name="message" 
                            value={user.message}
                            onChange={handleInputs}
                            as="textarea" c
                            className='shadow-lg'
                            type="text" placeholder="Your Message" />
                        </Form.Group>
                    
                        <Button
                        onClick={PostData}
                        variant="outline-dark" 
                        type="submit" 
                        className='mt-1 shadow-lg CUForm'>
                            SEND MESSAGE
                        </Button>
                    </Form>
            </div>
        </>
    );
}
export default SendUsEmail;