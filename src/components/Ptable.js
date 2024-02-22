import { useNavigate } from 'react-router-dom';


import Anav from '../components/Ahead';
import {
  Container,
  
  Card,
  
} from 'reactstrap';

function Ptable(){
  const navigate = useNavigate()
  const onSubmitHandler = (e) => {
        
    navigate('/Ahome')
  }
  return (
    <div>
      <Anav/>
    <Container style={{marginTop:'10%',}}>
      <Card className="mb-3"
        style={{
          width:'80rem',
            height:'auto',
          border: '1rem solid #ddbf3b',
        }}>
            <h2 style={{textAlign:'center'}}>HOCKEY</h2>
        <table class="table">
        <thead>
    <tr>
      <th >si.no</th>
      <th >NAME</th>
      <th>ID</th>
      <th>DEPT</th>
      <th >EMAIL</th>
      <th>FATHER-NAME</th>
      <th>MOTHER-NAME</th>
      <th>Ph-No</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th >1</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >2</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >3</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >4</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >5</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >6</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    
  </tbody>
</table>

        
      </Card>
    </Container>
    <Container>
      <Card className="mb-3"
        style={{
          width:'80rem',
            height:'auto',
          border: '1rem solid #000000',
        }}>
            <h2 style={{textAlign:'center'}}>RUNNING RACE</h2>
        <table class="table">
        <thead>
    <tr>
      <th >si.no</th>
      <th >NAME</th>
      <th>ID</th>
      <th>DEPT</th>
      <th >EMAIL</th>
      <th>FATHER-NAME</th>
      <th>MOTHER-NAME</th>
      <th>Ph-No</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th >1</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >2</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >3</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >4</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >5</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >6</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    
  </tbody>
</table>

        
      </Card>
    </Container>
    <Container>
      <Card className="mb-3"
        style={{
          width:'80rem',
            height:'auto',
          border: '1rem solid #ddbf3b',
        }}>
            <h2 style={{textAlign:'center'}}>WEIGHT-LIFTING</h2>
        <table class="table">
        <thead>
    <tr>
      <th >si.no</th>
      <th >NAME</th>
      <th>ID</th>
      <th>DEPT</th>
      <th >EMAIL</th>
      <th>FATHER-NAME</th>
      <th>MOTHER-NAME</th>
      <th>Ph-No</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th >1</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >2</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >3</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >4</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >5</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >6</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    
  </tbody>
</table>

        
      </Card>
    </Container>
    <Container>
      <Card className="mb-3"
        style={{
          width:'80rem',
            height:'auto',
          border: '1rem solid #000000',
        }}> <h2 style={{textAlign:'center'}}>FOOTBALL</h2>
        <table class="table">
        <thead>
    <tr>
      <th >si.no</th>
      <th >NAME</th>
      <th>ID</th>
      <th>DEPT</th>
      <th >EMAIL</th>
      <th>FATHER-NAME</th>
      <th>MOTHER-NAME</th>
      <th>Ph-No</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th >1</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >2</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >3</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >4</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >5</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >6</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    
  </tbody>
</table>

        
      </Card>
    </Container>
    <Container>
      <Card className="mb-3"
        style={{
          width:'80rem',
            height:'auto',
          border: '1rem solid #ddbf3b',
        }}><h2 style={{textAlign:'center'}}>TABLE-TENNEIS</h2>
        <table class="table">
        <thead>
    <tr>
      <th >si.no</th>
      <th >NAME</th>
      <th>ID</th>
      <th>DEPT</th>
      <th >EMAIL</th>
      <th>FATHER-NAME</th>
      <th>MOTHER-NAME</th>
      <th>Ph-No</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th >1</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >2</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >3</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >4</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >5</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >6</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    
  </tbody>
</table>

        
      </Card>
    </Container>
    <Container>
      <Card className="mb-3"
        style={{
          width:'80rem',
            height:'auto',
          border: '1rem solid #000000',
        }}> <h2 style={{textAlign:'center'}}>DANCING</h2>
        <table class="table">
        <thead>
    <tr>
      <th >si.no</th>
      <th >NAME</th>
      <th>ID</th>
      <th>DEPT</th>
      <th >EMAIL</th>
      <th>FATHER-NAME</th>
      <th>MOTHER-NAME</th>
      <th>Ph-No</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th >1</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >2</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >3</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >4</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >5</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >6</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    
  </tbody>
</table>

        
      </Card>
    </Container>
    <Container>
      <Card className="mb-3"
        style={{
          width:'80rem',
            height:'auto',
          border: '1rem solid #ddbf3b',
        }}><h2 style={{textAlign:'center'}}>SINGING</h2>
        <table class="table">
        <thead>
    <tr>
      <th >si.no</th>
      <th >NAME</th>
      <th>ID</th>
      <th>DEPT</th>
      <th >EMAIL</th>
      <th>FATHER-NAME</th>
      <th>MOTHER-NAME</th>
      <th>Ph-No</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th >1</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >2</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >3</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >4</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >5</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >6</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    
  </tbody>
</table>

        
      </Card>
    </Container>
    <Container>
      <Card className="mb-3"
        style={{
          width:'80rem',
            height:'auto',
          border: '1rem solid #000000',
        }}> <h2 style={{textAlign:'center'}}>HACKER-RANK</h2>
        <table class="table">
        <thead>
    <tr>
      <th >si.no</th>
      <th >NAME</th>
      <th>ID</th>
      <th>DEPT</th>
      <th >EMAIL</th>
      <th>FATHER-NAME</th>
      <th>MOTHER-NAME</th>
      <th>Ph-No</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th >1</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >2</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >3</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >4</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >5</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >6</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    
  </tbody>
</table>

        
      </Card>
    </Container>
    <Container>
      <Card className="mb-3"
        style={{
          width:'80rem',
            height:'auto',
          border: '1rem solid #ddbf3b',
        }}><h2 style={{textAlign:'center'}}>HACKER-EARTH</h2>
        <table class="table">
        <thead>
    <tr>
      <th >si.no</th>
      <th >NAME</th>
      <th>ID</th>
      <th>DEPT</th>
      <th >EMAIL</th>
      <th>FATHER-NAME</th>
      <th>MOTHER-NAME</th>
      <th>Ph-No</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th >1</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >2</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >3</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >4</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >5</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >6</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    
  </tbody>
</table>

        
      </Card>
    </Container>
    <Container>
      <Card className="mb-3"
        style={{
          width:'80rem',
            height:'auto',
          border: '1rem solid #000000',
        }}><h2 style={{textAlign:'center'}}>CODENINJA</h2>
        <table class="table">
  <thead>
    <tr>
      <th >si.no</th>
      <th >NAME</th>
      <th>ID</th>
      <th>DEPT</th>
      <th >EMAIL</th>
      <th>FATHER-NAME</th>
      <th>MOTHER-NAME</th>
      <th>Ph-No</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th >1</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >2</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >3</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >4</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >5</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
    </tr>
    <tr>
      <th >6</th>
      <td>name</td>
      <td>04r123</td>
      <td>ETE</td>    
      <td>name@g.in</td>
      <td>fname</td>
      <td>mname</td>
      <td>9876543210</td>
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

export default Ptable;