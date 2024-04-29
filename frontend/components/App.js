import React from 'react';
 import { Routes, Route, NavLink, useNavigate } from 'react-router-dom'; // Make sure you have the correct version of React Router installed
import Home from './Home';
import Order from './Order';
import  Form  from './Form';

const App = () => {
  const navigate = useNavigate();
  return (
   <div id="app">
    <nav>
      <button onClick={() => navigate("") } >Home</button>
      <button onClick={() => navigate("/order") } >Order</button>
    </nav>
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='/order' element={<Form />} />
    </Routes>
   </div>

      
    
  );
};

export default App;