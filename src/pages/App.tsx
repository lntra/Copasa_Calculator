import React from 'react';
import Frontend from '../templates/Frontend/App';
import Info from '../templates/Info/App';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Frontend/>} ></Route>
      <Route path='info' element={<Info/>} ></Route>
    </Routes>
  );
}

export default App;
