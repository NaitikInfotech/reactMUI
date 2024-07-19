import logo from './logo.svg';
import './App.css';
import Landing from './componet/Landing';
import About from './componet/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Servese from './componet/Servese';
import Solutions from './componet/Solutions';
import Portfolio from './componet/portfolio';
import Contectus from './componet/Contect-us';
import { useState } from 'react';

// https://demo18.houzez.co/
function App() {
  // const [color, setcolor] = useState(0);

  // function yello(item) {
  //  if (String(item).length==1) {
  //       setcolor(`0${item}`)
  //  }
  //  else{
  //    setcolor(item)
  //  }
  // }
  return (
    <>
      {/* <button onClick={() => yello(Math.floor(Math.random()*20))}>pluse+</button> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}>
        </Route>
        <Route path="/About" element={<About />}>
        </Route>
        <Route path="/servises" element={<Servese />}>
        </Route>
        <Route path="/Solutions" element={<Solutions />}>
        </Route>
        <Route path="/Portfolio" element={<Portfolio />}>
        </Route>
        <Route path="/Contect-us" element={<Contectus />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
