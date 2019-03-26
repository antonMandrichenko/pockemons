import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import PockemonsList from "../../containers/PockemonsList";
import Pockemon from "../../containers/Pockemon";
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route
            path='/'
            exact
            component={PockemonsList}/>
          <Route
            path={'/:pockemonname'}
            exact
            render={() => <Pockemon/>}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
