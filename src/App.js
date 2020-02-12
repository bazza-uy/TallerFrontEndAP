import React from 'react';
import logo from './logo.svg';
import './App.css';
import './pages/productos.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Taller Front End.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Entrar
        </a><a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Registrarse
        </a>
        <a
          className="App-link"
          href="./pages/productos.js"
          rel="noopener noreferrer"
        >
          Productos
        </a>
      </header>
    </div>
  );
}

export default App;
