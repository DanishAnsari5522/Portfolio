import React from 'react'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './Contact.css';

function Contact() {
    return (
        <div className="col-md-8 contact-form">
            <div className='drop-a-line'>Drop a Line</div>
            <Form>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Control type="text" placeholder="Enter Full Name" bsPrefix className="input-field w-100 p-2 "/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Control type="text" placeholder="Enter Your Email" bsPrefix className="input-field w-100 p-2 "/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Control type="number" placeholder="Phone" bsPrefix className="input-field w-100 p-2 "/>
                </Form.Group>
                <FloatingLabel controlId="formGridAddress1" bsPrefix >
                    <Form.Control
                    as="textarea"
                    placeholder="Message"
                    style={{ height: '100px',width:'100%' }}
                    bsPrefix className="input-field  p-2"
                    />
                </FloatingLabel>
                 <button className="submit-btn">
                    Submit
                 </button>
            </Form>
        </div>
    )
}

export default Contact;