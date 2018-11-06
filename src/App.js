import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Route, Switch } from "react-router-dom";
import Data from './containers/Data';
import { Container } from 'reactstrap';
import Category from './containers/Category';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Container>
          <Switch>
            <Route exact path="/" component={Data} />
            <Route path="/ajout" component={Data} />
            <Route path="/aide" component={Data} />
            <Route path="/categorie" component={Category} />
          </Switch>
        </Container>
      </div >
    );
  }
}

export default App;
