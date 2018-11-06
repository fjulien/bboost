import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Route } from "react-router-dom";
import Data from './components/Data';
import { Container } from 'reactstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Container>
          <Route exact path="/" component={Data} />
          <Route path="/ajout" component={Data} />
          <Route path="/aide" component={Data} />
        </Container>
      </div>
    );
  }
}

export default App;
