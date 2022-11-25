import { Button, Col, Container, Nav, Row, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard";
import projImg1 from '../assets/img/project-img1 .png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import TrackVisibility from "react-on-screen";
import 'animate.css';

export const Projects = () => {

    const projects = [
        {
            title: 'Star War Api',
            description: 'Server connection and web site front',
            imgUrl: projImg1,


        },
        {
            title: 'Busines Startup',
            description: 'Design & Development',
            imgUrl: projImg2,
        },
        {
            title: 'Busines Startup',
            description: 'Design & Development',
            imgUrl: projImg3,
        }
    ]
    return (
        <section className="project" id='projects'>
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? 'animate__animated animate__bounce' : ''}>

                                    <h2>Project</h2>
                                    <p>lOREM Lorem lorem test test hello World ..</p>
                                </div>}
                        </TrackVisibility>
                        <Tab.Container id='project-tabs' defaultActiveKey='first'>
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id='pills-tab'>

                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey='first'>
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>Loren Ipsum</Tab.Pane>
                                <Tab.Pane eventKey='third'>Loren Ipsum</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}