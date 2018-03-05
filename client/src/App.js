import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';

import './App.css';

class App extends Component {
  render() {
      return (
          <div className="App Site">
              <div className="Site-content">
                  <div className="App-header">
                      <Header />
                  </div>
                  <div className="main">
                      {/* <Main /> */}
                    <Router>
                      <div>
                        <Switch>
                          <Route exact path="/" component={Home} />
                        </Switch>
                      </div>
                    </Router>
                  </div>
              </div>
              <Footer />
          </div>
      );
  }
}

export default App;