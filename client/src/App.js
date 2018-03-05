import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

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
                  </div>
              </div>
              <Footer />
          </div>
      );
  }
}

export default App;