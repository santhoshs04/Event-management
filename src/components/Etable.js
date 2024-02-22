import { useNavigate } from 'react-router-dom';


import Anav from '../components/Ahead';
import {
  Container,
  
  Card,
  
} from 'reactstrap';

function Etable(){
  const navigate = useNavigate()
  const onSubmitHandler = (e) => {
        
    navigate('/Ahome')
  }
  return (
    <div>
      <Anav/>
    <Container style={{
      marginTop:'10%',
    }}>
        
      <Card className="mb-3"
        style={{
          width:'80rem',
            height:'auto',
          border: '1rem solid #000000',
        }}>
            <h2>EVENT-DATABASE</h2>
        <table class="table">
  <thead>
    <tr>
      <th>si.no</th>
      <th>EVENT-NO</th>
      <th>EVENT-TYPE</th>
      <th>EVENT-NAME</th>
      <th>EVENT-TIME</th>
      <th>EVENT-PLACE</th>
      <th>no-of-REGISTERED</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>000</td>
      <td>Sports</td>
      <td>Hockey</td>    
      <td>10:40 AM</td>
      <td>PlayGround</td>
      <td>30</td>
    </tr>
    <tr>
      <th>2</th>
      <td>001</td>
      <td>Sports</td>
      <td>RunningRace</td>    
      <td>12:10 AM</td>
      <td>PlayGround</td>
      <td>23</td>
    </tr>
    <tr>
      <th>3</th>
      <td>002</td>
      <td>Sports</td>
      <td>Weightlifting</td>    
      <td>10:55 AM</td>
      <td>PlayGround</td>
      <td>7</td>
    </tr>
    <tr>
      <th>4</th>
      <td>004</td>
      <td>Sports</td>
      <td>Football</td>    
      <td>11:30 AM</td>
      <td>PlayGround</td>
      <td>10</td>
    </tr>
    <tr>
      <th>5</th>
      <td>003</td>
      <td>Sports</td>
      <td>Kabadi</td>    
      <td>12:20 AM</td>
      <td>PlayGround</td>
      <td>21</td>
    </tr>
    <tr>
      <th>6</th>
      <td>020</td>
      <td>Sports</td>
      <td>Cricket</td>    
      <td>10:40 AM</td>
      <td>PlayGround</td>
      <td>44</td>
    </tr>
    <tr>
      <th>7</th>
      <td>207</td>
      <td>Indoor</td>
      <td>Chess</td>    
      <td>01:00 AM</td>
      <td>A-block-504</td>
      <td>12</td>
    </tr>
    <tr>
      <th>8</th>
      <td>212</td>
      <td>Indoor</td>
      <td>TableTenneis</td>    
      <td>01:00 AM</td>
      <td>PLAY-area</td>
      <td>10</td>
    </tr>
    <tr>
      <th>9</th>
      <td>222</td>
      <td>Indoor</td>
      <td>Caroom</td>    
      <td>02:10 AM</td>
      <td>A-block-721</td>
      <td>9</td>
    </tr>
    <tr>
      <th>10</th>
      <td>232</td>
      <td>Indoor</td>
      <td>Bowling</td>    
      <td>03:00 AM</td>
      <td>PlayGround</td>
      <td>26</td>
    </tr>
    <tr>
      <th>11</th>
      <td>248</td>
      <td>Entertiment</td>
      <td>Dancing</td>    
      <td>03:30 AM</td>
      <td>Auditorium</td>
      <td>24</td>
    </tr>
    <tr>
      <th>12</th>
      <td>201</td>
      <td>Entertiment</td>
      <td>Singing</td>    
      <td>04:00 AM</td>
      <td>Auditorium</td>
      <td>11</td>
    </tr>
    <tr>
      <th>13</th>
      <td>418</td>
      <td>Technical</td>
      <td>HackerRank</td>    
      <td>04:30 AM</td>
      <td>Mecatronic-lab</td>
      <td>21</td>
    </tr>
    <tr>
      <th>14</th>
      <td>460</td>
      <td>Technical</td>
      <td>CodeNinja</td>    
      <td>05:00 AM</td>
      <td>L1-lab</td>
      <td>17</td>
    </tr>
    <tr>
      <th>15</th>
      <td>412</td>
      <td>Technical</td>
      <td>white-Hacker</td>    
      <td>05:25 AM</td>
      <td>AT-lab</td>
      <td>13</td>
    </tr>
    <tr>
      <th>16</th>
      <td>414</td>
      <td>Technical</td>
      <td>Security-Breaker</td>    
      <td>05:40 AM</td>
      <td>SYS-lab</td>
      <td>19</td>
    </tr>
    <tr>
      <th>17</th>
      <td>444</td>
      <td>Technical</td>
      <td>HackerEarth</td>    
      <td>06:00 AM</td>
      <td>Term-lab</td>
      <td>25</td>
    </tr>
    <tr>
      <th>16</th>
      <td>496</td>
      <td>Technical</td>
      <td>24hr's Contest</td>    
      <td>06:20 AM</td>
      <td>WENT-lab</td>
      <td>03</td>
    </tr>
    
  </tbody>
</table>

        
      </Card>
    </Container>
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
                </form><br></br>
    </div>
  );
};

export default Etable;