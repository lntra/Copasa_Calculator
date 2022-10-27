import React from 'react';
import Frontend from '../templates/Frontend/App';
import Info from '../templates/Info/App';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Frontend children={undefined} />} ></Route>
      <Route path='info' element={<Info children={undefined} />} ></Route>
    </Routes>
  );
}

export default App;
