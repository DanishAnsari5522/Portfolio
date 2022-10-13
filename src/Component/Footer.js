import React from "react";
import './Footer.css'
import { BsInstagram } from 'react-icons/bs'
import { GrLinkedinOption } from 'react-icons/gr'
import { BiPhoneCall } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'
import {GrPinterest} from 'react-icons/gr'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
function Footer() {
    return (
        <div className="footercomp">
            <div className="row">
                <div className="col-11 mx-auto d-flex justify-content-between">
                    <div className="row col-md-5">
                        <div className="contact-us">
                            <div className="contactus display-6">Contact Us</div>
                            <div className="about-contact">Let's make something new ,different and more meaningfulor make thingmore visual or conceptual?</div>
                            <div className="call"><BiPhoneCall className="call-icon" />Call Me+123 387 3645</div>
                            <div className="email"><HiOutlineMail className="call-icon" />Email info@coder.com</div>
                            <div>
                                <div className="find-me-on">Find Me on</div>
                                <div>
                                    <BsInstagram className="socalmedia-icon" />
                                    <GrLinkedinOption className="socalmedia-icon" />
                                    <GrPinterest className="socalmedia-icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row col-md-6">
                        <div className="drop-a-line display-6">
                            Drop a Line
                        </div>
                        <div>
                            <Form>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail" bg="none">
                                        <Form.Control type="text" placeholder="Name" bsPrefix className="input w-100"/>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Control type="email" placeholder="Email" bsPrefix className="input w-100" />
                                    </Form.Group>
                                </Row>
                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Control type="number" placeholder="Phone" bsPrefix className="input w-100" />
                                </Form.Group>
                                <FloatingLabel controlId="formGridAddress1" bsPrefix>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Message"
                                        style={{ height: '100px',width:'100%' }}
                                        bsPrefix className="input"
                                    />
                                </FloatingLabel>
                                <button className="btn-submit">
                                    Submit
                                </button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;