import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import aboutMe from './components/AboutMe';
import Contact from './components/Contact';
import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/' component={Main}></Route>
          <Route path='/about' component={aboutMe}></Route>
          <Route path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </div>
    )
  }
}



export default App;
