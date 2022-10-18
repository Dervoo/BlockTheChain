import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";
import projImg12 from "../assets/img/project-img12.png";
import projImg13 from "../assets/img/project-img13.png";
import projImg14 from "../assets/img/project-img14.png";
import projImg15 from "../assets/img/project-img15.png";
import projImg16 from "../assets/img/project-img16.png";
import projImg17 from "../assets/img/project-img17.png";
import projImg18 from "../assets/img/project-img18.png";
// import colorSharp2 from "../assets/img/lel1.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectsx = [
    {
      title: "Wallet Connector",
      description: "Blockchain & Web3",
      imgUrl: projImg1,
    },
    {
      title: "Web3 Unity Game",
      description: "Blockchain & Web3 & Unity",
      imgUrl: projImg2,
    },
    {
      title: "Sign In Eth",
      description: "Web3 & Blockchain",
      imgUrl: projImg3,
    },
    {
      title: "IPNS",
      description: "Web3 & Blockchain & IPFS",
      imgUrl: projImg4,
    },
    {
      title: "Proxy Upgradeable Contracts",
      description: "Blockchain",
      imgUrl: projImg5,
    },
    {
      title: "Proxy Upgradeable Contracts",
      description: "Blockchain",
      imgUrl: projImg6,
    },
  ];

  const projectsy = [
    {
      title: "Soulbound Token",
      description: "Blockchain",
      imgUrl: projImg7,
    },
    {
      title: "Rentable NFT",
      description: "Blockchain",
      imgUrl: projImg8,
    },
    {
      title: "ERC20 Stake",
      description: "Blockchain",
      imgUrl: projImg9,
    },
    {
      title: "ERC20",
      description: "Openzeppelin Defender & Blockchain & Gnosis Safe",
      imgUrl: projImg10,
    },
    {
      title: "Music NFTs",
      description: "Blockchain & Web3",
      imgUrl: projImg11,
    },
    {
      title: "3D NFTs",
      description: "Blockchain & Web3",
      imgUrl: projImg12,
    },
  ];

  const projectsz = [
    {
      title: "ERC721 Lazy Mint",
      description: "Blockchain & Web3 & Openzeppelin Defender",
      imgUrl: projImg13,
    },
    {
      title: "Governance ERC20 Compound",
      description: "Blockchain & Web3 & Openzeppelin Defender & Tally",
      imgUrl: projImg14,
    },
    {
      title: "Governance ERC20",
      description: "Web3 & Blockchain & Openzeppelin Defender & Tally",
      imgUrl: projImg15,
    },
    {
      title: "Ethernaut Series",
      description: "Web3 & Blockchain & Ethernaut",
      imgUrl: projImg16,
    },
    {
      title: "StarkNet Introduction",
      description: "Blockchain & Cairo & LayerTwo",
      imgUrl: projImg17,
    },
    {
      title: "StarkNet ERC20",
      description: "Blockchain & Cairo & LayerTwo",
      imgUrl: projImg18,
    },
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <p>Here you can find a lot of different usecases for blockchain technology. We implemented those for you to get the knowledge you need to become blockchain developer!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Smart Contracts Approaches</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">ERC Standards</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Scalability & DAO</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projectsx.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projectsy.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projectsz.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}
