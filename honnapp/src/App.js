import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/Nav';
import About from './components/About';
import Apply from './components/Apply';
import Apply from './components/Connect';

function App() {
  return (
    <div className="App">
      <main>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/resume" component={Resume}/>
          </Switch>
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;
