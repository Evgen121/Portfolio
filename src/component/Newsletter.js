import { Col, Row } from "react-bootstrap";
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Envelope } from 'react-bootstrap-icons';
import { Telephone } from 'react-bootstrap-icons';


export const Newsletter = () => {

    const formRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_qwf7sqe', 'template_6x3dcfj', formRef.current, '_wk3cFf1QwX7gQt38')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <section id='send'>
            <Col lg={12}>
                <div className='newsletter-bx'>
                    <Row>

                        <Col className='newsletter-contact'>
                            <h3> My contacts</h3>
                            <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                                <Envelope />   test@gmail.com
                            </div>
                            <div >
                                <Telephone />  +123-456-789

                            </div>

                        </Col>
                        <Col md={6} xl={7}>
                            <form className='new-email-bx' ref={formRef}
                                onSubmit={handleSubmit}>
                                <label><input type='text' placeholder="Name" name="user_name" /></label>  <br />
                                <label> <input type='email' placeholder="Email" name="user_email" /></label> <br />
                                <label> <input type='text' placeholder="Subject" name="user_subject" /></label>
                                <label><textarea rows="4" cols="50" placeholder='Message' name="message" />
                                    <button type='submit'>Submit</button> </label>

                            </form>
                        </Col>
                    </Row>
                </div>
            </Col>
        </section>
    )
}