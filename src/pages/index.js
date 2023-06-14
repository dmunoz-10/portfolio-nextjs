import BaseLayout from "@/components/layouts/Base"
import { Container, Row, Col } from 'reactstrap'
import Typed from 'react-typed'

const roles = ["Developers", "Tech Lover", "Team Player", "React JS", "Vue JS"]

const Home = () => {
  return (
    <BaseLayout className="cover">
    <div className="main-section">
      <div className="background-image">
        <img src="/images/background-index.png" alt="background index" width="100%" />
      </div>
      <Container>
        <Row>
          <Col md="6">
            <div className="hero-section">
              <div className="flipper">
                <div className="back">
                  <div className="hero-section-content">
                    <h2>Full Stack Web Developer</h2>
                    <div className="hero-section-content-intro">
                      Have a look at my portfolio and job history.
                    </div>
                  </div>
                  <img className="image" src="/images/section-1.png" alt="section 1" />
                  <div className="shadow-custom">
                    <div className="shadow-inner"> </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md="6" className="hero-welcome-wrapper">
            <div className="hero-welcome-text">
              <h1>
                Welcome to the portfolio website of Daniel Muñoz.
                Get informed, collaborate and discover projects I was working on through the years!
              </h1>
            </div>
            <Typed
              loop
              typeSpeed={70}
              backSpeed={35}
              strings={roles}
              backDelay={1000}
              loopCount={0}
              showCursor
              className="self-typed"
              cursorChar="|"
            />
            <div className="hero-welcome-bio">
              <h1>Let&apos;s take a look on my work.</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </BaseLayout>
  )
}

export default Home
