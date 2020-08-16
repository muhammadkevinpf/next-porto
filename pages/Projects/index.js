import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LazyLoad from "react-lazyload";
import Slider from "react-slick";
import { projects } from "@util/projects";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "./style.scss";

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    prevArrow: <BsChevronLeft />,
    nextArrow: <BsChevronRight />,
  };

  return (
    <div id="projects">
      <Container>
        <div className="text-center mb-5">
          <h1 className="font-weight-bold">Projects</h1>
          <p>Here's a selection of some recent work.</p>
          <hr className="section-break" />
        </div>
        <Slider {...settings}>
          {projects.map((project) => (
            <Fragment key={project.key}>
              <LazyLoad height={200} offset={100} once>
                <Row noGutters className="mb-4 align-items-center">
                  <Col lg={6} md={6} className="mb-3">
                    <img
                      src={project.image}
                      className="img-portfolio"
                      alt={project.title}
                    />
                  </Col>
                  <Col lg={6} md={6} className="text-center mb-5">
                    <h3 className="mb-2">{project.name}</h3>
                    <p className="text-secondary">{project.subname}</p>
                    <p>{project.description}</p>
                    {project.tools.map((item) => (
                      <span className="badge badge-light mr-2" key={item.key}>
                        <div className="badge-tools">
                          <img
                            src={item.image}
                            alt={item.text}
                            className="mr-2"
                          />
                          {item.text}
                        </div>
                      </span>
                    ))}
                    <br />
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btnLink mt-4">{`View ${project.provider}`}</button>
                    </a>
                  </Col>
                </Row>
                <hr className="mb-5 project-break" />
              </LazyLoad>
            </Fragment>
          ))}
        </Slider>
      </Container>
    </div>
  );
}
