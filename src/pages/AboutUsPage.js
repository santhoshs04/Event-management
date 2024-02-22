
import log from '../assets/imgs/home1.jpg'
// import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

import {
  Container,
  Col,
  Row,
  Card,
  
} from 'reactstrap';

function AboutUsPage(){
  // const navigate = useNavigate()
  return (
    <div>
      <Header/>
    <Container style={{marginTop:'7%',}}>
      <Card className="mb-3"
        style={{
          border: '1rem solid #ffffff'
        }}
      >
        
        <Row>
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <div className="p-5"
            >
              <h2
                style={{
                  fontFamily: 'TimesNewRoman',
                }}
              >Our Mission</h2>
             <p>GAMER SPORTZ in this Event we are managing to bring the talent's on board and we are exploring the various type of events to show there talent the get to know the various unknown events to exhibit enorums participating of play
              there are sevral types of event like  SPORTs - INDOOR - ENTERTIMENT - TECHNICAL event's to show our talent with us ......TO this biggest WORLD__________________________/\  
             </p>
            </div>
          </Col>
          <Col className="col-auto d-flex flex-column justify-content-center align-items-center">
            <div>
              <img
                src={log}
                alt="Bowl"
                style={{
                  maxWidth: '30rem'
                }}
              />
            </div>
          </Col>
        </Row>
      </Card>
      
     
      <Card className="mb-3"
        style={{
          border: '1rem solid #ffffff',
          borderBottom: 'none'
        }}
      >
        <Row>
          <Col className="col-auto d-flex flex-column justify-content-center align-items-center">
            <img
              src={log}
              alt="Pie"
              style={{
                maxWidth: '30rem'
              }}
            />
          </Col>
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <div className="p-5">
              <h2
                style={{
                  fontFamily: 'TimesNewRoman',
                }}
              >About Us</h2>
                <p>This GAMER SPORTZ Event was held every year in our campus since's 2014 It's our 10'th Annum Event has a decade of successfullness<br></br>
                It's going to be the huge one day event in our campus <br></br>
                Our organization Represent many of Events on behalf of exploring talent of youngster's <br></br>
                Thanks for knowing about us......
                </p>

            </div>
          </Col>
        </Row>
        <div
          className="text-end"
          style={{
            backgroundColor: '#70BA89'
          }}
        >
        </div>
      </Card>
    </Container>
    </div>
  );
};

export default AboutUsPage;