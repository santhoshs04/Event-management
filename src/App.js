import './App.css';
import {Routes,Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Ptable from './components/Ptable';
import AboutUsPage from './pages/AboutUsPage';
import Anav from './components/Ahead';
import Ahome from './components/Homea'
import Reg from './components/Reg';
import Agenda from './components/Agenda';
import Regcomplete from './components/Regcomplete';
import Alog from './components/Alog';
import Utable from './components/Utable';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import back from './assets/imgs/bge.jpg';
import Etable from './components/Etable';

function App() {
  return (
    <div>
    <main className="App">
      <div style={{backgroundImage:`url(${back})`,backgroundSize:'contain'}}>
      <Routes>  
      <Route path='Home' element={<AboutUsPage />} />
        <Route path='about' element={<LandingPage/>} />
        <Route path='/' element={<LoginForm />} />
        <Route path='register' element={<RegisterForm />} />
        <Route path='Alog' element={<Alog/>}/>
        <Route path='Utable' element={<Utable/>} />
        <Route path='Reg' element={<Reg />} />
        <Route path='Regc' element={<Regcomplete />} />
        <Route path='Agenda' element={<Agenda/>} />
        <Route path='Anav' element={<Anav/>} />
        <Route path='Ahome' element={<Ahome/>} />
        <Route path='Ptable' element={<Ptable/>} />
        <Route path='Etable' element={<Etable/>} />
      </Routes>
      </div>
    </main>
</div>
  );
}
export default App;
