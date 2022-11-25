import { Col, Container, Row } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { Newsletter } from './Newsletter';


export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className='align-items-center'>
                    <Newsletter />
                    <Col sm={6} >
                        <div className="footer-logo">
                            <div className='logo1'>
                                <h1>Yevhen</h1>
                                <h3>Web developer</h3>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className='social-icon'>
                            <a href='https://www.linkedin.com/in/yevhen-malyi-446436239/'><img src={navIcon1} alt='' /></a>
                            <a href='https://github.com/Evgen121'><img src={navIcon2} alt='' /></a>
                            <a href='https://github.com/Evgen121'><img src={navIcon3} alt='' /></a>
                        </div>
                        <p>CopyRight 2022. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}