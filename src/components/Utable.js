import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';


import {
  Container,
  
  Card,
  
} from 'reactstrap';

function Utable(){
  const navigate = useNavigate()
  const onSubmitHandler = (e) => {
        
    navigate('/Home')
  }
  return (
    <div>
      <Header/>
    <Container style={{marginTop:'10%',
  }}>
     
      <Card className="mb-3"
        style={{
         
          border: '1rem solid #ddbf3b',
        }}>
        <table class="table">
  <thead>
    <tr>
      <th >si.no</th>
      <th >EVENT-NO</th>
      <th>EVENT-TYPE</th>
      <th >EVENT-NAME</th>
      <th >EVENT-TIME</th>
      <th>EVENT-PLACE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th >1</th>
      <td>004</td>
      <td>Sports</td>
      <td>Football</td>    
      <td>11:30 AM</td>
      <td>PlayGround</td>
    </tr>
    <tr>
    <th>2</th>
      <td>001</td>
      <td>Sports</td>
      <td>Running Race</td>    
      <td>12:10 PM</td>
      <td>PlayGround</td>
    </tr>
    <tr>
    <th>3</th>
      <td>207</td>
      <td>indoor</td>  
      <td>Chess</td>  
      <td>1:00 PM</td>
      <td>A-block-105</td>
    </tr>
    <tr>
    <th>4</th>
      <td>248</td>
      <td>Entertiment</td>
      <td>Danceing</td>    
      <td>03:30 PM</td>
      <td>Auditorium</td>
    </tr>
    <tr>
    <th>5</th>
      <td>418</td>
      <td>Technical</td>
      <td>HackerRank</td>    
      <td>04:30 PM</td>
      <td>Mecatronic Lab</td>
    </tr>
    <tr>
    <th>6</th>
      <td>460</td>
      <td>Technical</td>
      <td>CodeNinja</td>    
      <td>05:00 PM</td>
      <td>L1-Lab</td>
    </tr>
  </tbody>
</table>

<form onSubmit={onSubmitHandler}>
        <div className="text-center mb-3">
                    <button
                      style={{
                        width: '10rem',
                        backgroundColor: '#ce2c2c',
                        fontFamily: 'TimesNewRoman',
                      }}
                      className="btn btnhover text-white">BACK</button>
                  </div>
                </form>
      </Card>
    </Container>
    
                <br></br>
    </div>
  );
};

export default Utable;