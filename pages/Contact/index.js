import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import "./style.scss"
const about = [
    {
        key: "github",
        link: 'https://github.com/muhammadkevinpf/',
        icon: <FaGithub />
    },
    {
        key: "linkedin",
        link: 'https://www.linkedin.com/in/muhammad-kevin-52497617a/',
        icon: <FaLinkedinIn />
    },
    {
        key: "email",
        link: 'mailto:muhammadkevinpf@gmail.com',
        icon: <FaEnvelope />
    },
    {
        key: "whatsapp",
        link: 'https://wa.me/6282262341721',
        icon: <FaWhatsapp />
    },
]

export default function Contact() {
    return (
        <div id="contact">
            <h1 className="text-center font-weight-bold">Contact Me</h1>
            <p className="text-center">Don't be a stranger, say hello!</p>
            <Container>
                <Row className="text-center">
                    {about.map(social => (
                        <Col sm={3} md={3} xs={3} lg={3} key={social.key}>
                            <a href={social.link} target="_blank" rel="noopener noreferrer" className="social-icons">{social.icon}</a>
                        </Col>
                    ))}
                </Row >
            </Container >
        </div>
    )
}