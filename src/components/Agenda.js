//import log from '../assets/imgs/home1.jpg'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

import {
  Container,
  Col,
  Row,
  Card,
  
} from 'reactstrap';
import back from '../assets/imgs/bge.jpg'

function Agenda(){
  const navigate = useNavigate()
  const onSubmitHandler = (e) => {
        
    navigate('/Home')
  }
  return (
    <div>
      <Header/>
    <Container>
    
      <Card className="mb-3"
        style={{
          marginTop:'10%',
          border: '1rem solid #ddbf3b',
          borderBottom: 'none',
          backgroundImage:`url(${back})`,backgroundSize:'contain'
        }}
        
      >
       
        <Row>
          {/* <Col className="col-auto d-flex flex-column justify-content-center align-items-center">
            <img
              //src={log}
              alt="Pie"
              style={{
                maxWidth: '30rem'
              }}
            />
          </Col> */}
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <div className="p-5">
              <h2
                style={{
                  fontFamily: 'TimesNewRoman',
                  alignItems:'center',
                  marginLeft:'12rem',
                }}
              >AGENDA</h2>
                <p> <h3>_________Welcome to gamer sportz_________</h3><br></br>
                .....registration starting date..... : .....26/12/2023.....<br></br>
                .....registration ending date.....   : .....31/12/2023.....<br></br>
                <br></br>
                preparint for event's..... : .....01/01/2024 -to- 12/01/2024.....<br></br>
                <br></br>
                <h2>___________ON_Day___EVENT___</h2><br></br>
                <h2 style={{
                  fontFamily: 'TimesNewRoman',
                  alignItems:'center',
                  marginLeft:'12rem',
                }}>13/01/2024</h2><br></br>
                .........................TIME.............................................................Event.......................<br></br>
                <br></br>
                ......................09:00 AM...............................................Welcoming chief guest........<br></br> 
                ......................09:15 AM...............................................Honering chief guest.........<br></br> 
                ......................09:20 AM...............................................welcome speach...............<br></br> 
                ......................09:30 AM...............................................Organizer speach.............<br></br> 
                ......................09:45 AM...............................................Chief guest speach...........<br></br> 
                ......................10:00 AM...............................................Event opening cermony........<br></br> 
                ......................10:15 AM...............................................Starting the Event ..........<br></br>
                ......................10:30 AM...............................................SPORTS EVENT.................<br></br>
                ......................01:00 PM...............................................INDOOR EVENT.................<br></br>
                ......................03:30 AM...............................................ENTERTIMENT EVENT............<br></br>
                ......................04:30 AM...............................................TECHNICAL EVENT..............<br></br>
                ......................06:50 AM...............................................Fnishing the EVENTS..........<br></br>
                ......................07:00 AM...............................................Honering Speach..............<br></br>
                ......................07:05 AM...............................................Prize Giving Movement........<br></br>
                ......................08:00 AM...............................................Thanks giving Speach.........<br></br>
                ......................08:10 AM...............................................END OF EVENT.................<br></br>
                <br></br>
                ...................____________________END____________________...................
                </p>

            </div>
            <form onSubmit={onSubmitHandler}>
        <div className="text-center mb-3">
                    <button
                      style={{
                        backgroundColor: '#ce2c2c',
                        fontFamily: 'TimesNewRoman',
                        marginRight:'3rem',
                      }}
                      className="btn btnhover text-white">BACK</button>
                  </div>
                </form>
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

export default Agenda;