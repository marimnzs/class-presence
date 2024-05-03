import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignIn, Classes } from './features';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/entrar" element={<SignIn/>} />
        {/* colocamos * pra pegar qualquer rota que não estiver especificada */}
        <Route path="*" element={<h1>About</h1>} />
      </Routes>
   </BrowserRouter>
  )
};

export default App;
