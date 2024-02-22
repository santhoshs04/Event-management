import React, { useState } from 'react';
import { Container,Row, Card } from "reactstrap";
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import hoc from '../assets/imgs/hoc.jpg';
import run from '../assets/imgs/run.jpg';
import wei from '../assets/imgs/wei.jpg';
import kab from '../assets/imgs/kab.png';
// import cri from '../assets/imgs/cri.jpg';
import foot from '../assets/imgs/foot.jpg';
import hr from '../assets/imgs/hr.jpg';
import he from '../assets/imgs/he.jpg';
import ce from '../assets/imgs/cn.jpg';
import wh from '../assets/imgs/wh.jpg';
import sb from '../assets/imgs/sb.jpg';
// import co from '../assets/imgs/co.jpg';
import che from '../assets/imgs/che.jpg';
import tt from '../assets/imgs/tt.jpg';
import cm from '../assets/imgs/cm.jpg';
// import bw from '../assets/imgs/bw.jpg';
import si from '../assets/imgs/si.jpg';
import di from '../assets/imgs/di.jpg';

const LandingPage = (props) => {
  const navigate = useNavigate();

  const [dietType, setDietType] = useState('');
  const [foodIntolerances, setIntolerances] = useState([]);

  const [cardOneSelected, setCardOneSelected] = useState(false);
  const [cardTwoSelected, setCardTwoSelected] = useState(false);
  const [cardThreeSelected, setCardThreeSelected] = useState(false);
  // const [cardFourSelected, setCardFourSelected] = useState(false);
  const [cardFiveSelected, setCardFiveSelected] = useState(false);
  const [cardSixSelected, setCardSixSelected] = useState(false);
  const [cardSevenSelected, setCardSevenSelected] = useState(false);
  // const [cardEightSelected, setCardEightSelected] = useState(false);
  const [cardNineSelected, setCardNineSelected] = useState(false);
  const [cardTenSelected, setCardTenSelected] = useState(false);
   const [cardElevenSelected, setCardElevenSelected] = useState(false);
  const [cardTwelSelected, setCardTwelSelected] = useState(false);
  console.log(dietType);
  console.log(foodIntolerances)

  const clickHandlerCardOne = (e) => {
    setCardOneSelected(!cardOneSelected)
    if (cardOneSelected === false) {
      setDietType('vegetarian')
      setCardTwoSelected(false)
    }
    else {
      setDietType('')
    }
  }

  const clickHandlerCardTwo = (e) => {
    setCardTwoSelected(!cardTwoSelected)
    if (cardTwoSelected === false) {
      setDietType("vegan")
      setCardOneSelected(false)
    }
    else {
      setDietType('')
    }
  }

  const clickHandlerCardThree = (e) => {
    setCardThreeSelected(true)
    setIntolerances((intolerance) => [...intolerance, 'Kabaddi'])
  }

  // const clickHandlerCardFour = (e) => {
  //   setCardFourSelected(true)
  //   setIntolerances((intolerance) => [...intolerance, 'gluten'])
  // }
  const clickHandlerCardNine = (e) => {
    setCardNineSelected(true)
    setIntolerances((intolerance) => [...intolerance, 'gluten'])
  }
  const clickHandlerCardTen = (e) => {
    setCardTenSelected(true)
    setIntolerances((intolerance) => [...intolerance, 'gluten'])
  }

  const clickHandlerCardFive = (e) => {
    setCardFiveSelected(true)
    setIntolerances((intolerance) => [...intolerance, 'treenut'])
  }

  const clickHandlerCardSix = (e) => {
    setCardSixSelected(true)
    setIntolerances((intolerance) => [...intolerance, 'shellfish'])
  }

  const clickHandlerCardSeven = (e) => {
    setCardSevenSelected(true)
    setIntolerances((intolerance) => [...intolerance, 'dairy'])
  }


  // const clickHandlerCardEight = (e) => {
  //   setCardEightSelected(true)
  //   setIntolerances((intolerance) => [...intolerance, 'soy'])
  // }
   const clickHandlerCardEleven = (e) => {
     setCardElevenSelected(true)
     setIntolerances((intolerance) => [...intolerance, 'soy'])
   }
  const clickHandlerCardTwel = (e) => {
    setCardTwelSelected(true)
    setIntolerances((intolerance) => [...intolerance, 'soy'])
  }

  

  const handleSubmit = (e) => {
    navigate('/Reg')
  }


  return (
    <div><Header/>
    <div className='In'>

    </div>
      <Container style={{
      marginTop:'10%',
      alignItems:'center',
    }}>
        <Row>
            <Row
              className="text-center"
              style={{
                fontFamily: 'TimesNewRoman',
              }}
            >
             
                <h2>SPORTS  EVENTS......- </h2>
                <p
                  style={{
                    color: '#010703',
                  }}
                >SELECT YOUR.....PLAY.....!</p>
              
            </Row>
            <Row xs="6" className="mb-3">
            
                <Card
                  className="text-black" 
                  onClick={() => clickHandlerCardOne()}
                  style={{
                    marginRight:'2rem',
                    marginBottom:'2rem',
                    maxWidth: '18rem',
                    border: '1rem solid #010703',
                    backgroundColor: '#eff3f0',
                    fontFamily: 'TimesNewRoman',
                    
                  }}>
                  <div style={{
                    maxWidth: '256px',
                    height: '256px',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '0.5rem',
                    
                  }}>
                    <img
                      className={(cardOneSelected) ? "opacity-25" : ""}
                      src={hoc}
                      alt="Food"
                      style={{
                        display: 'inline',
                        margin: '0 auto',
                        height: '100%',
                        maxWidth: 'auto'
                      }}
                    />
                  </div>
                  <h3 className={(cardOneSelected) ? "text-center mt-3 text-black" : "text-center mt-3"}>HOCKEY</h3>
                </Card>
                <Card
                  className="text-black"
                  onClick={() => clickHandlerCardTen()}
                  style={{
                    marginRight:'2rem',
                    marginBottom:'2rem',
                    maxWidth: '18rem',
                    border: '1rem solid #010703',
                    backgroundColor: '#eff3f0',
                    fontFamily: 'TimesNewRoman',
                  }}>
                  <div style={{
                    maxWidth: '256px',
                    height: '256px',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '0.5rem'
                  }}>
                    <img
                      className={(cardTenSelected) ? "opacity-25" : ""}
                      src={run}
                      alt="Food "
                      style={{
                      
                        display: 'inline',
                        margin: '0 auto',
                        height: '100%',
                        maxWidth: 'auto'
                      }}
                    />
                  </div>
                  <h3 className={(cardTenSelected) ? "text-center mt-3 text-black" : "text-center mt-3"}>running race</h3>
                </Card>
                <Card
                  className="text-black"
                  onClick={() => clickHandlerCardNine()}
                  style={{
                    marginRight:'2rem',
                    marginBottom:'2rem',
                    maxWidth: '18rem',
                    border: '1rem solid #010703',
                    backgroundColor: '#eff3f0',
                    fontFamily: 'TimesNewRoman',
                  }}>
                  <div style={{
                    maxWidth: '256px',
                    height: '256px',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '0.5rem'
                  }}>
                    <img
                      className={(cardNineSelected) ? "opacity-25" : ""}
                      src={wei}
                      alt="Food "
                      style={{
                        display: 'inline',
                        margin: '0 auto',
                        height: '100%',
                        maxWidth: 'auto'
                      }}
                    />
                  </div>
                  <h3 className={(cardNineSelected) ? "text-center mt-3 text-black" : "text-center mt-3"}>weight lifting</h3>
                </Card>
             
                <Card
                  className="text-black"
                  onClick={() => clickHandlerCardTwo()}
                  style={{
                    marginRight:'2rem',
                    marginBottom:'2rem',
                    maxWidth: '18rem',
                    border: '1rem solid #010703',
                    backgroundColor: '#eff3f0',
                    fontFamily: 'TimesNewRoman',
                  }}>
                  <div style={{
                    maxWidth: '256px',
                    height: '256px',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '0.5rem'
                  }}>
                    <img
                      className={(cardTwoSelected) ? "opacity-25" : ""}
                      src={foot}
                      alt="Food"
                      style={{
                        display: 'inline',
                        margin: '0 auto',
                        height: '100%',
                        maxWidth: 'auto'
                      }}
                    />
                  </div>
                  <h3 className={(cardTwoSelected) ? "text-center mt-3 text-black" : "text-center mt-3"}>FOOTBALL</h3>
                </Card>
              
            
            
             
                <Card
                  className="text-black"
                  onClick={() => clickHandlerCardThree()}
                  style={{
                    marginRight:'2rem',
                    marginBottom:'2rem',
                    maxWidth: '18rem',
                    border: '1rem solid #010703',
                    backgroundColor: '#eff3f0',
                    fontFamily:'TimesNewRoman',
                  }}>
                  <div style={{
                    maxWidth: '256px',
                    height: '256px',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '0.5rem'
                  }}>
                    <img
                      className={(cardThreeSelected) ? "opacity-25" : ""}
                      src={kab}
                      alt="Food "
                      style={{
                        display: 'inline',
                        margin: '0 auto',
                        height: 'auto',
                        maxWidth: '100%'
                      }}
                    />
                  </div>
                  <h3 className={(cardThreeSelected) ? "text-black text-center mt-3" : "text-center mt-3"}>KABADI</h3>
                </Card>
             
          
                {/* <Card
                  className="text-black"
                  onClick={() => clickHandlerCardFour()}
                  style={{marginRight:'2rem',
                  marginBottom:'2rem',
                    maxWidth: '18rem',
                    border: '1rem solid #010703',
                    backgroundColor: '#eff3f0',
                    fontFamily: 'TimesNewRoman',
                    borderRadius: '0.5rem'
                  }}>
                  <div style={{
                    maxWidth: '256px',
                    height: '256px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    <img
                      className={(cardFourSelected) ? "opacity-25" : ""}
                      src={cri}
                      alt="Food "
                      style={{
                        display: 'inline',
                        margin: '0 auto',
                        height: 'auto',
                        maxWidth: '100%',
                        borderRadius: '0.5rem'
                      }}
                    />
                  </div>
                  <h3 className={(cardFourSelected) ? "text-black text-center mt-3" : "text-center mt-3"}>CRICKET</h3>
                </Card> */}
         
            </Row>
            <Row
              className="text-center"
              style={{
                fontFamily: 'TimesNewRoman',
              }}
            >
             
                <h2 className="mt-3">INDOOR... EVENTS...</h2>
                <p
                  style={{
                    color: '#010703',
                  }}
                >SELECT YOUR .... GAME....!</p>
              
            </Row>
            <Row xs="6" className="mb-3">
              
        
                <Card
                  className="text-black"
                  onClick={() => clickHandlerCardFive()}
                  style={{
                    marginRight:'2rem',
                    marginBottom:'2rem',
                    maxWidth: '18rem',
                    border: '1rem solid #ce2c2c',
                    backgroundColor: '#eff3f0',
                    fontFamily: 'TimesNewRoman',
                  }}>
                  <div style={{
                    maxWidth: '256px',
                    height: '256px',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '0.5rem'
                  }}>
                    <img
                      className={(cardFiveSelected) ? "opacity-25" : ""}
                      src={che}
                      alt="Food "
                      style={{
                        display: 'inline',
                        margin: '0 auto',
                        height: '100%',
                        maxWidth: 'auto'
                      }}
                    />
                  </div>
                  <h3 className={(cardFiveSelected) ? "text-black text-center mt-3" : "text-center mt-3"}>CHESS</h3>
                </Card>
              
                {/*Card 6 */}
                <Card
                  className="text-black"
                  onClick={() => clickHandlerCardSix()}
                  style={{
                    marginRight:'2rem',
                    marginBottom:'2rem',
                    maxWidth: '18rem',
                    border: '1rem solid #ce2c2c',
                    backgroundColor: '#eff3f0',
                    fontFamily: 'TimesNewRoman',
                  }}>
                  <div style={{
                    maxWidth: '256px',
                    height: '256px',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '0.5rem'
                  }}>
                    <img
                      className={(cardSixSelected) ? "opacity-25" : ""}
                      src={tt}
                      alt="Food "
                      style={{
                        display: 'inline',
                        margin: '0 auto',
                        height: '100%',
                        maxWidth: 'auto'
                      }}
                    />
                  </div>
                  <h3 className={(cardSixSelected) ? "text-black text-center mt-3" : "text-center mt-3"}>TABLE TENNIES</h3>
                </Card>
              
            
                {/* Card 7 */}
                <Card
                  className="text-black"
                  onClick={() => clickHandlerCardSeven()}
                  style={{
                    marginRight:'2rem',
                    marginBottom:'2rem',
                    maxWidth: '18rem',
                    border: '1rem solid #ce2c2c',
                    backgroundColor: '#eff3f0',
                    fontFamily: 'TimesNewRoman',
                  }}>
                  <div style={{
                    maxWidth: '256px',
                    height: '256px',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '0.5rem'
                  }}>
                    <img
                      className={(cardSevenSelected) ? "opacity-25" : ""}
                      src={cm}
                      alt="Food "
                      style={{
                        display: 'inline',
                        margin: '0 auto',
                        height: '100%',
                        maxWidth: 'auto'
                      }}
                    />
                  </div>
                  <h3 className={(cardSevenSelected) ? "text-black text-center mt-3" : "text-center mt-3"}>CARROM</h3>
                </Card>
                {/*Card 8 */}
                {/* <Card
                  className="text-black"
                  onClick={() => clickHandlerCardEight()}
                  style={{
                    maxWidth: '18rem',
                    border: '1rem solid #ce2c2c',
                    backgroundColor: '#eff3f0',
                    fontFamily: 'TimesNewRoman',
                  }}>
                  <div style={{
                    maxWidth: '256px',
                    height: '256px',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '0.5rem'
                  }}>
                    <img
                      className={(cardEightSelected) ? "opacity-25" : ""}
                      src={bw}
                      alt="Food "
                      style={{
                        display: 'inline',
                        margin: '0 auto',
                        height: 'auto',
                        maxWidth: '100%'
                      }}
                    />
                  </div>
                  <h3 className={(cardEightSelected) ? "text-black text-center mt-3" : "text-center mt-3"}>BOWLING</h3>
                </Card> */}
                <Card
                  className="text-black"
                  onClick={() => clickHandlerCardEleven()}
                  style={{
                    marginRight:'2rem',
                    marginBottom:'2rem',
                    maxWidth: '18rem',
                    border: '1rem solid #ce2c2c',
                    backgroundColor: '#eff3f0',
                    fontFamily: 'TimesNewRoman',
                  }}>
                  <div style={{
                    maxWidth: '256px',
                    height: '256px',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '0.5rem'
                  }}>
                    <img
                      className={(cardElevenSelected) ? "opacity-25" : ""}
                      src={si}
                      alt="Food "
                      style={{
                        display: 'inline',
                        margin: '0 auto',
                        height: '100%',
                        maxWidth: 'auto'
                      }}
                    />
                  </div>
                  <h3 className={(cardElevenSelected) ? "text-black text-center mt-3" : "text-center mt-3"}>SINGING</h3>
                </Card>
                <Card
                  className="text-black"
                  onClick={() => clickHandlerCardTwel()}
                  style={{
                    marginRight:'2rem',
                    marginBottom:'2rem',
                    maxWidth: '18rem',
                    border: '1rem solid #ce2c2c',
                    backgroundColor: '#eff3f0',
                    fontFamily: 'TimesNewRoman',
                  }}>
                  <div style={{
                    maxWidth: '256px',
                    height: '256px',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '0.5rem'
                  }}>
                    <img
                      className={(cardTwelSelected) ? "opacity-25" : ""}
                      src={di}
                      alt="Food "
                      style={{
                        display: 'inline',
                        margin: '0 auto',
                        height: '100%',
                        maxWidth: 'auto'
                      }}
                    />
                  </div>
                  <h3 className={(cardTwelSelected) ? "text-black text-center mt-3" : "text-center mt-3"}>DANCING</h3>
                </Card>
            </Row>
            <Row
              className="text-center"
              style={{
                fontFamily: 'TimesNewRoman',
              }}
            >
             
                <h2 className="mt-3">TECHNICAL EVENTS...</h2>
                <p
                  style={{
                    color: '#010703',
                  }}
                >SELECT YOUR .... TALENT....!</p>
              
            </Row>
            <Row xs="6" className="mb-3">
              
        
                <Card
                  className="text-black"
                  onClick={() => clickHandlerCardFive()}
                  style={{
                    marginRight:'2rem',
                    marginBottom:'2rem',
                    maxWidth: '18rem',
                    border: '1rem solid #ddbf3b',
                    backgroundColor: '#eff3f0',
                    fontFamily: 'TimesNewRoman',
                  }}>
                  <div style={{
                    maxWidth: '256px',
                    height: '256px',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '0.5rem'
                  }}>
                    <img
                      className={(cardFiveSelected) ? "opacity-25" : ""}
                      src={hr}
                      alt="Food "
                      style={{
                        display: 'inline',
                        margin: '0 auto',
                        height: '100%',
                        maxWidth: 'auto'
                      }}
                    />
                  </div>
                  <h3 className={(cardFiveSelected) ? "text-black text-center mt-3" : "text-center mt-3"}>HACKER RANK</h3>
                </Card>
              
                {/*Card 6 */}
                <Card
                  className="text-black"
                  onClick={() => clickHandlerCardSix()}
                  style={{
                    marginRight:'2rem',
                    marginBottom:'2rem',
                    maxWidth: '18rem',
                    border: '1rem solid #ddbf3b',
                    backgroundColor: '#eff3f0',
                    fontFamily: 'TimesNewRoman',
                  }}>
                  <div style={{
                    maxWidth: '256px',
                    height: '256px',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '0.5rem'
                  }}>
                    <img
                      className={(cardSixSelected) ? "opacity-25" : ""}
                      src={ce}
                      alt="Food "
                      style={{
                        display: 'inline',
                        margin: '0 auto',
                        height: '100%',
                        maxWidth: 'auto'
                      }}
                    />
                  </div>
                  <h3 className={(cardSixSelected) ? "text-black text-center mt-3" : "text-center mt-3"}>CODE NINJA</h3>
                </Card>
              
            
                {/* Card 7 */}
                <Card
                  className="text-black"
                  onClick={() => clickHandlerCardSeven()}
                  style={{
                    marginRight:'2rem',
                    marginBottom:'2rem',
                    maxWidth: '18rem',
                    border: '1rem solid #ddbf3b',
                    backgroundColor: '#eff3f0',
                    fontFamily: 'TimesNewRoman',
                  }}>
                  <div style={{
                    maxWidth: '256px',
                    height: '256px',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '0.5rem'
                  }}>
                    <img
                      className={(cardSevenSelected) ? "opacity-25" : ""}
                      src={wh}
                      alt="Food "
                      style={{
                        display: 'inline',
                        margin: '0 auto',
                        height: '100%',
                        maxWidth: 'auto'
                      }}
                    />
                  </div>
                  <h3 className={(cardSevenSelected) ? "text-black text-center mt-3" : "text-center mt-3"}>WHITE HACKER</h3>
                </Card>
                {/*Card 8 */}
                {/* <Card
                  className="text-black"
                  onClick={() => clickHandlerCardEight()}
                  style={{
                    maxWidth: '18rem',
                    border: '1rem solid #ddbf3b',
                    backgroundColor: '#eff3f0',
                    fontFamily: 'TimesNewRoman',
                  }}>
                  <div style={{
                    maxWidth: '256px',
                    height: '256px',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '0.5rem'
                  }}>
                    <img
                      className={(cardEightSelected) ? "opacity-25" : ""}
                      src={sb}
                      alt="Food "
                      style={{
                        display: 'inline',
                        margin: '0 auto',
                        height: 'auto',
                        maxWidth: '100%'
                      }}
                    />
                  </div>
                  <h3 className={(cardEightSelected) ? "text-black text-center mt-3" : "text-center mt-3"}>SECURITY BREAKER</h3>
                </Card> */}
                 <Card
                  className="text-black"
                  onClick={() => clickHandlerCardEleven()}
                  style={{
                    marginRight:'2rem',
                    marginBottom:'2rem',
                    maxWidth: '18rem',
                    border: '1rem solid #ddbf3b',
                    backgroundColor: '#eff3f0',
                    fontFamily: 'TimesNewRoman',
                  }}>
                  <div style={{
                    maxWidth: '256px',
                    height: '256px',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '0.5rem'
                  }}>
                    <img
                      className={(cardElevenSelected) ? "opacity-25" : ""}
                      src={sb}
                      alt="Food "
                      style={{
                        display: 'inline',
                        margin: '0 auto',
                        height: '100%',
                        maxWidth: 'auto'
                      }}
                    />
                  </div>
                  <h3 className={(cardElevenSelected) ? "text-black text-center mt-3" : "text-center mt-3"}>SECURITY BREAKER</h3>
                </Card> 
                <Card
                  className="text-black"
                  onClick={() => clickHandlerCardTwel()}
                  style={{
                    marginRight:'2rem',
                    marginBottom:'2rem',
                    maxWidth: '18rem',
                    border: '1rem solid #ddbf3b',
                    backgroundColor: '#eff3f0',
                    fontFamily: 'TimesNewRoman',
                  }}>
                  <div style={{
                    maxWidth: '256px',
                    height: '256px',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '0.5rem'
                  }}>
                    <img
                      className={(cardTwelSelected) ? "opacity-25" : ""}
                      src={he}
                      alt="Food "
                      style={{
                        display: 'inline',
                        margin: '0 auto',
                        height: '100%',
                        maxWidth: 'auto'
                      }}
                    />
                  </div>
                  <h3 className={(cardTwelSelected) ? "text-black text-center mt-3" : "text-center mt-3"}>HACKER RANK</h3>
                </Card>
            </Row>
            <Row>
            <div className="text-center mb-3">
                <button 
                  style={{
                    width:'10rem',
                    color: '#ce2c2c',
                    fontFamily: 'TimesNewRoman',
                    backgroundColor: '',
                    border: '1px solid #ce2c2c'
                  }}
                  className="m-3 btn-white" onClick={() => handleSubmit()}>register</button>
              </div>
            </Row>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
