import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Route } from "react-router-dom";
import Data from './components/Data';
import { Container } from 'reactstrap';
import Aide from './components/Aide/Aide';
import Chart from './components/Chart/Chart';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Container>
          <Route exact path="/" component={Data} />
          <Route path="/ajout" component={Data} />
          <Route path="/aide" component={Aide} />
          <Route path="/chart" component={Chart} />
        </Container>
      </div>
    );
  }
}

export default App;
