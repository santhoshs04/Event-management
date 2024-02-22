import { useState } from 'react'

import { useNavigate } from 'react-router-dom';
import {
  Container,
  Col,
  Row,
  Card,
  CardTitle
} from 'reactstrap';
import PastaImg from '../assets/imgs/log.jpg'

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const onSubmitHandler = e => {
    e.preventDefault();
    navigate('Home');
  }

  return (
    <div>
     
    <Container style={{
      marginTop:'10%',
    }}>
      <Row>
        <Col className="d-flex align-items-center justify-content-center">
          <Card
            style={{
              width: '60rem',
              
              fontFamily: 'TimesNewRoman',
              border: '1rem solid #888585'
            }}
          >
            <Row>
              <Col className="d-flex flex-column align-items-center justify-content-center">
                <div style={{
                  width: '30rem',
                  height: '30rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  <img
                    src={PastaImg}
                    alt="Profile "
                    style={{
                      display: 'inline',
                      margin: '0 auto',
                      height: 'auto',
                      width: '100%'
                    }}
                  />
                </div>
              </Col>
              <Col className="p-5">
                <CardTitle tag="h2" className="text-center">
                  LOGIN
                </CardTitle>
                <form onSubmit={onSubmitHandler}>
                  <label htmlFor="email" className="text-start">ID</label>
                  <input
                    className="form-control mb-3"
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                  />
                  <label htmlFor="password">PASSWORD</label>
                  <input
                    className="form-control mb-3"
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                  />
                  <div className="text-center mb-3">
                    <button
                      style={{
                        backgroundColor: '#000000',
                        fontFamily: 'TimesNewRoman',
                      }}
                      className="btn btnhover text-white">GetIN</button>
                  </div>
                </form>
                <p className="text-center">Don't have an account? <a href="/register">Create one here</a></p>
               <br></br>
               .<br></br>
               <p className="text-center">ADMIN LOGIN? <a href="/Alog">Click on here</a></p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container >
    <br></br>
    </div>
  );
};

export default LoginForm;