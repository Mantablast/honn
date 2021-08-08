import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/Nav';
import About from './pages/About';
import Apply from './pages/Apply';
import Connect from './pages/Connect';
import Policy from './pages/Policy';
import Home from './pages/Home';
import News from './pages/News';
import Rules from './pages/Rules';
import Footer from './components/Footer';
import { Card, CardColumns, CardGroup, Body, Img, Text, Deck, Title, Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <main>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/news" component={News} />
            <Route exact path="/connect" component={Connect} />
            <Route exact path="/apply" component={Apply} />
            <Route exact path="/policy" component={Policy}/>
            <Route exact path="/rules" component={Rules}/>
          </Switch>
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;
