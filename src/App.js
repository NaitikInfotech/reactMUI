import logo from './logo.svg';
import './App.css';
import Landing from './componet/Landing';
import About from './componet/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Servese from './componet/Servese';

// https://demo18.houzez.co/
function App() {
  return (
    <>
      

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}>
        </Route>
        <Route path="/About" element={<About />}>
        </Route>
        <Route path="/servises" element={<Servese />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
