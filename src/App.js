import React, { Component } from 'react';


import ForumNav from './components/ForumNav/ForumNav';
import Home from './components/Home/Home';
import Board from './components/Board/Board';
import Footer from './components/Footer/Footer';

import './css/index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <ForumNav />
        <Home />
        <Board />
        <Footer />
      </div>
    );
  }
}

export default App;
