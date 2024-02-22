import React from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Col,
  Row,
  Card,
  CardTitle
} from 'reactstrap';


import sign1 from '../assets/imgs/er.png'
import sign from '../assets/imgs/sign.jpg';
import Header from '../components/Header'



  const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [dy, setDY] = useState("");
    const [email, setEmail] = useState("");
    const [fn, setFn] = useState("");
    const [mn, setMn] = useState("");
    const [ph, setPh] = useState("");
    const [ad, setAd] = useState("");
    
  
  
    const onSubmitHandler = e => {
      e.preventDefault();
      navigate('/Regc');
    }
  

  return (
<div><Header/>
    <Container style={{marginTop:'10%',}} >
      <Row >
        <Col className="d-flex align-items-center justify-content-center">
          <Card
            style={{
              fontFamily: 'TimesNewRoman',
              border: '1rem solid #000000'
            }}
          >
            <Row>
              <Col className="d-flex flex-column align-items-center justify-content-center"> 
              <div 
              style={{
                  width: '30rem',
                  height: '40rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  
                  <img
                    src={sign1}
                    alt="Profile "
                    style={{
                      display: 'inline',
                      marginLeft: '1%',
                      height: 'auto',
                      width: '100%'
                    }}
                  />
                </div>
                <div 
              style={{
                  width: '30rem',
                  height: '40rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  
                  <img
                    src={sign}
                    alt="Profile "
                    style={{
                      display: 'inline',
                      marginLeft: '1%',
                      height: 'auto',
                      width: '100%'
                    }}
                  />
                </div>
              </Col>
              <Col className="p-5">
                <CardTitle tag="h2" className="text-center">
                  REGISTER
                </CardTitle>
                <h4>STUDENT DETAILS</h4>
                <form onSubmit={onSubmitHandler}>
                  <Col>  
                  <label htmlFor="name">NAME</label>
                  <input
                    className="form-control mb-3"
                    type="name"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                  />
                   <label htmlFor="id">ID</label>
                  <input
                    className="form-control mb-3"
                    type="id"
                    name="id"
                    id="id"
                    value={id}
                    onChange={(e) => { setId(e.target.value) }}
                  />
                  </Col>
                  
                   <label htmlFor="name">DEPARTMENT-YEAR</label>
                  <input
                    className="form-control mb-1"
                    type="name"
                    name="name"
                    id="name"
                    value={dy}
                    onChange={(e) => { setDY(e.target.value) }}
                  />
                  <label>EVENTS</label>
                  <br></br>
                <br></br>
                <h4>Sports</h4>
                
                <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
  <label class="form-check-label" for="inlineCheckbox1">Hockey</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2">Race</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option3"/>
  <label class="form-check-label" for="inlineCheckbox2">Weight Lifting</label>
</div><br></br>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option4"/>
  <label class="form-check-label" for="inlineCheckbox2">Football</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option5"/>
  <label class="form-check-label" for="inlineCheckbox2">Cricket</label>
</div>
<br></br>
<h4>Indoor</h4>
                
                <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option6"/>
  <label class="form-check-label" for="inlineCheckbox1">Chess</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option7"/>
  <label class="form-check-label" for="inlineCheckbox2">TableTenneis</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option8"/>
  <label class="form-check-label" for="inlineCheckbox2">Carrom</label>
</div><br></br>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option9"/>
  <label class="form-check-label" for="inlineCheckbox2">Singing</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option10"/>
  <label class="form-check-label" for="inlineCheckbox2">Dancing</label>
</div>
<br></br>
<h4>Technical</h4>
                
                <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option11"/>
  <label class="form-check-label" for="inlineCheckbox1">HackerRank</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option12"/>
  <label class="form-check-label" for="inlineCheckbox2">CodeNinja</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option13"/>
  <label class="form-check-label" for="inlineCheckbox2">white-Hacker</label>
</div><br></br>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option14"/>
  <label class="form-check-label" for="inlineCheckbox2">HackerEarth</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option15"/>
  <label class="form-check-label" for="inlineCheckbox2">Contest</label>
</div>
<br></br>
<br></br>
                  <label htmlFor="email">EMAIL</label>
                  <input
                    className="form-control mb-3"
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                  />
                  
                 <h4>PARENT DETAILS</h4>
                 <label htmlFor="name">FATHER NAME</label>
                  <input
                    className="form-control mb-3"
                    type="name"
                    name="name"
                    id="name"
                    value={fn}
                    onChange={(e) => { setFn(e.target.value) }}
                  />
                  <label htmlFor="name">MOTHER NAME</label>
                  <input
                    className="form-control mb-3"
                    type="name"
                    name="name"
                    id="name"
                    value={mn}
                    onChange={(e) => { setMn(e.target.value) }}
                  />
                  
                  <label htmlFor="name">PHONE NUMBER</label>
                  <input
                    className="form-control mb-3"
                    type="name"
                    name="name"
                    id="name"
                    value={ph}
                    onChange={(e) => { setPh(e.target.value) }}
                  />
                  <label htmlFor="name">ADDRESS</label>
                  <textarea class="form-control mb-" id="name" rows="4" value={ad}
                    onChange={(e) => { setAd(e.target.value) }}></textarea>
                  
                  
                  <br></br>
                  <Col className="text-center">
                    <div className="text-center mb-3">
                      <button
                        style={{
                          width:'10rem',
                          backgroundColor: '#000000',
                          fontFamily: 'TimesNewRoman',
                        }}
                        className="btn btnhover text-white">SUBMIT</button>
                    </div>
                  </Col>
                </form>
                
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
);
}
export default Register;