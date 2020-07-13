import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Route from 'react-router-dom/Route'
import Agregar from './components/agregar'
import Home from './components/home'
import { BrowserRouter } from 'react-router-dom'
import Nav from "./components/Navbar"


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Bienvenido a Codea-l@</h1>
                </header>

                <BrowserRouter>
                    <div>
                        <Nav />
                        <Route exact path="/" component={Home} />
                        <Route path="/agregar" component={Agregar} />
                    </div>
                </BrowserRouter>
                <body className="app-body">
                <p>Acá va la APP</p>
                </body>
            </div>
        );
    }
}
/*
function App() {
  return (
    <div className="App">




        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>


    </div>
  );
}
*/
export default App;
//          <img src={logo} className="App-logo" alt="logo" />
//<p>
//    Edit <code>src/App.js</code> and save to reload.
//</p>