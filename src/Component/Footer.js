import React, { useState } from "react";
import './Footer.css'
import { BiPhoneCall } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'
import { FaFacebookF, FaLinkedinIn, FaStackOverflow, FaGitlab, FaKaggle } from 'react-icons/fa'
import { SiResearchgate, SiPluralsight } from 'react-icons/si'
import { BsGithub } from 'react-icons/bs'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


const url = "https://api-shorts.herokuapp.com/send-mail"
function Footer() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState('')
    const [msg, setMsg] = useState()
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const [sending, setSending] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setSuccess('')

        const isValidEmail = /\S+@\S+\.\S+/.test(email)
        if (!name) {
            setError("Name is Required")
        } else if (!isValidEmail) {
            setError("Invalid Email")
        } else if (phone.length != 10) {
            setError("Invalid Phone Number")
        } else if (!msg) {
            setError("Message is Required")
        } else {
            setSending(true)
            fetch(url, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                // change according to your api
                body: JSON.stringify({ name, email, phone, text: msg })
            })
                .then(res => res.json())
                .then((data) => {
                    setSuccess("Message sent Succesfully")
                    setSending(false)
                    setName('')
                    setEmail('')
                    setPhone('')
                    setMsg('')
                    console.log(data);
                })
                .catch(e => {
                    console.log(e);
                    setSending(false)
                })

        }
    }
    return (
        <div className="footercomp">
            <scetion id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-11 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <div className="p-absolute ml-0">
                                        <div className="contact-us">
                                            <div className="contactus display-6">Contact Me</div>
                                            <div className="about-contact">Get in touch with me for anything!</div>
                                            <div className="call"><BiPhoneCall className="call-icon" />Call Me  (+91) 79800 92850</div>
                                            <div className="email"><HiOutlineMail className="call-icon" />Email dPramanik.official@gmail.com</div>
                                            <div>
                                                <div className="find-me-on">Follow Me</div>
                                                <div>
                                                    <a href="https://www.facebook.com/iamMrHobo/" target="_blank" className="ds"><FaFacebookF className="socalmedia-icon" /></a>
                                                    <a href="https://www.linkedin.com/in/dpramanik/" target="_blank" className="ds"><FaLinkedinIn className="socalmedia-icon" /></a>
                                                    <a href="https://app.pluralsight.com/profile/Debmalya-Pramanik/" target="_blank" className="ds"><SiPluralsight className="socalmedia-icon" /></a>
                                                    <a href="https://www.researchgate.net/profile/Debmalya_Pramanik2" target="_blank" className="ds"><SiResearchgate className="socalmedia-icon" /></a>
                                                    <a href="https://github.com/ZenithClown" target="_blank" className="ds"><BsGithub className="socalmedia-icon" /></a>
                                                    <a href="https://gitlab.com/ZenithClown/" target="_blank" className="ds"><FaGitlab className="socalmedia-icon" /></a>
                                                    <a href="https://www.kaggle.com/dPramanik/" target="_blank" className="ds"><FaKaggle className="socalmedia-icon" /></a>
                                                    <a href="https://stackoverflow.com/users/6623589/" target="_blank" className="ds"><FaStackOverflow className="socalmedia-icon" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-image">

                                    <div className="drop-a-line display-6">
                                        Drop Me a Mail
                                    </div>
                                    {error && <p className='text-danger'>{error}</p>}
                                    {success && <p className='text-success'>{success}</p>}
                                    <div>
                                        <Form>
                                            <Row className="mb-3">
                                                <Form.Group as={Col} controlId="formGridEmail" bg="none">
                                                    <Form.Control type="text" placeholder="Name" bsPrefix className="input w-100" value={name} onChange={(e) => { setName(e.target.value) }} />
                                                </Form.Group>
                                                <Form.Group as={Col} controlId="formGridPassword">
                                                    <Form.Control type="email" placeholder="Email" bsPrefix className="input w-100" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                                </Form.Group>
                                            </Row>
                                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                                <Form.Control type="number" placeholder="Phone" bsPrefix className="input w-100" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                                            </Form.Group>
                                            <FloatingLabel controlId="formGridAddress1" bsPrefix>
                                                <Form.Control
                                                    as="textarea"
                                                    placeholder="Message"
                                                    style={{ height: '100px', width: '100%' }}
                                                    bsPrefix className="input"
                                                    onChange={(e) => { setMsg(e.target.value) }}
                                                    value={msg}
                                                />
                                            </FloatingLabel>
                                            <button onClick={handleSubmit} className="btn-submit" disabled={sending}>
                                                {sending ? "Sending..." : "Send"}
                                            </button>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </scetion>
        </div>
    )
}

export default Footer