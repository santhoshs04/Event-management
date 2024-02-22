
import tic from '../assets/imgs/tic.webp'
import { useNavigate } from 'react-router-dom';


import {
  Container,
  Col,
  Row,
  Card,
  
} from 'reactstrap';


function Complete(){
    const navigate = useNavigate();
    const onSubmitHandler = (e) => {
        
        navigate('/about')
      }
  
  return (
    <>
   
    <Container style={{
      marginTop:'10%',
    }}>
      <Card className="mb-3"
        style={{
          border: '1rem solid #ce2c2c'
        }}>
<Row>
<Col className="d-flex flex-column align-items-center justify-content-center">
<h1
                style={{
                  fontFamily: 'TimesNewRoman',
                }}
              >SUCESSFULLY REGISTERED</h1>
</Col>
</Row>
      </Card>
    </Container>

    <Container>
      <Card className="mb-3"
        style={{
          border: '1rem solid #ce2c2c'
        }}
      >
        
        <Row>
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <div className="p-5"
            >
              <h1
                style={{
                  fontFamily: 'TimesNewRoman',
                }}
              > GAMER_SPORTZ__________</h1>
             <h2>ALL THE BEST.....FOR YOUR EVENTS.........  </h2>
                <h3>Thanks For REGISTRATION...</h3>
                </div>
          </Col>
          <Col className="col-auto d-flex flex-column justify-content-center align-items-center">
            <div>
              <img
                src={tic}
                alt="Bowl"
                style={{
                  maxWidth: '30rem'
                }}
              />
            </div>
          </Col>
        </Row>
       
      
        <Col>
        <form onSubmit={onSubmitHandler}>
        <div className="text-center mb-3">
                    <button
                      style={{
                        width:'10rem',
                        backgroundColor: '#ce2c2c',
                        fontFamily: 'TimesNewRoman',
                      }}
                      className="btn btnhover text-white">BACK</button>
                  </div>
                </form>
                </Col>
           
           
      </Card>
      
    </Container>
    </>
  );
};

export default Complete;