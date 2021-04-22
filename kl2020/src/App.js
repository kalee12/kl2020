import React, { Component } from 'react';
import './App.css';
import './component.css';

import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import constants from "./Components/constants";

import MainActivity from "./Components/MainActivity";
import Aevus from "./Components/Aevus";
import Ambulo from "./Components/Ambulo";
import Chromatic from "./Components/Chromatic";
import HH from "./Components/HH";
import OCAM from "./Components/OCAM";
import SH from "./Components/SH";
import Shift from "./Components/Shift";

import About from "./Components/About"

class App extends Component {
  render() {
    return (
      <Router>
      <Switch>
        <Route exact path={constants.routes.main} component={MainActivity}/>
        {/* <Route exact path={constants.routes.aevus} component={Aevus}/> */}
        <Route exact path={constants.routes.ambulo} component={Ambulo} />
        <Route exact path={constants.routes.chromatic} component={Chromatic}/>
        <Route exact path={constants.routes.hh} component={HH}/>
        <Route exact path={constants.routes.ocam} component={OCAM}/>
        <Route exact path={constants.routes.sh} component={SH}/>
        <Route exact path={constants.routes.shift} component={Shift}/>
        <Route exact path={constants.routes.about} component={About}/>
      </Switch>
    </Router>
    );
  }
}

export default App;
