import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import mater1 from '../assets/img/meter1.svg';
import mater2 from '../assets/img/meter2.svg';
import mater3 from '../assets/img/meter3.svg';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>Skills</h2>
                            <p>I am constantly improving my knowledge and expanding my experience in technology. I have experience with the following technologies:</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <img src={mater1} alt="Image" />
                                    <h5>React.js</h5>
                                </div>
                                <div className='item'>
                                    <img src={mater2} alt="Image" />
                                    <h5>Java Script</h5>
                                </div>
                                <div className='item'>
                                    <img src={mater3} alt="Image" />
                                    <h5>Node.js</h5>
                                </div>
                                <div className='item'>
                                    <img src={mater1} alt="Image" />
                                    <h5>Express.js</h5>
                                </div>
                                <div className='item'>
                                    <img src={mater2} alt="Image" />
                                    <h5>Html + Css</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}