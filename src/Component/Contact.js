import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './Contact.css';
// change this endpoint with your endpoint
const url = "https://api-shorts.herokuapp.com/send-mail"
function Contact() {
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
        <div className="col p-4 contact-form">
            <div className='drop-a-line'>Drop a Line</div>
            {error && <p className='text-danger'>{error}</p>}
            {success && <p className='text-success'>{success}</p>}
            <Form>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Control type="text" placeholder="Enter Full Name" bsPrefix className="input-field w-100 p-2 " value={name} onChange={(e) => { setName(e.target.value) }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Control type="text" placeholder="Enter Your Email" bsPrefix className="input-field w-100 p-2 " value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Control type="number" placeholder="Phone" bsPrefix className="input-field w-100 p-2 " value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                </Form.Group>
                <FloatingLabel controlId="formGridAddress1" bsPrefix >
                    <Form.Control
                        as="textarea"
                        placeholder="Message"
                        style={{ height: '100px', width: '100%' }}
                        bsPrefix className="input-field  p-2"
                        onChange={(e) => { setMsg(e.target.value) }}
                        value={msg}
                    />
                </FloatingLabel>
                <button onClick={handleSubmit} className="submit-btn" disabled={sending}>
                    {sending ? "Sending..." : "Send"}
                </button>
            </Form>
        </div>
    )
}

export default Contact;