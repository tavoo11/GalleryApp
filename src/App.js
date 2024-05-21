import './App.css';
<<<<<<< HEAD
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Paisaje1 from './components/Paisaje1';
import Paisaje2 from './components/Paisaje2';
import Paisaje3 from './components/Paisaje3';
import Paisaje4 from './components/Paisaje4';
import Paisaje5 from './components/Paisaje5';
import Paisaje6 from './components/Paisaje6';
import Paisaje7 from './components/Paisaje7';
import Paisaje8 from './components/Paisaje8';
import Paisaje9 from './components/Paisaje9';
import Paisaje10 from './components/Paisaje10';
import Navegation from './components/Navegation';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/images1" element={<Paisaje1/>}/>
        <Route exact path="/images2" element={<Paisaje2/>}/>
        <Route path="/images3" element={<Paisaje3/>}/>
        <Route path="/images4" element={<Paisaje4/>}/>
        <Route path="/images5" element={<Paisaje5/>}/>
        <Route path="/images6" element={<Paisaje6/>}/>
        <Route path="/images7" element={<Paisaje7/>}/>
        <Route path="/images8" element={<Paisaje8/>}/>
        <Route path="/images9" element={<Paisaje9/>}/>
        <Route path="/images10" element={<Paisaje10/>}/>
        <Route exact path="/" element={<Paisaje1 />} />
      </Routes>
      <Navegation/>
    </Router>
=======

function App() {
  return (
    <div className="">
      
    </div>
>>>>>>> ed62aad2021421ce4bbbaeaee146a11ebbdcf801
  );
}

export default App;
