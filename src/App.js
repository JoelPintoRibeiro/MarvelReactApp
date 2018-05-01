import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { NavBar, Nav, NavItem } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import TodoComponent from './Todo/TodoComponent'
import MarvelComponent from './Marvel/MarvelComponent'
import MarvelItem from './Marvel/MarvelItem'

const AboutMe = () => (
  <div>
    <h2>Home</h2>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="Nav">
            <header>

              <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">App</Link>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/todo-app">Todo</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/marvels">Marvels</Link></li>
                  </ul>
                </div>
              </nav>

              <div className="row">
                <div className="col-md-12">
                  <Switch>
                    <Route exact path="/" component={AboutMe} />
                    <Route path="/todo-app" component={TodoComponent} />
                    <Route path="/marvels/:id" component={MarvelItem} />
                    <Route path="/marvels" component={MarvelComponent} />
                  </Switch>
                </div>
              </div>
            </header>
          </div>
        </div>
      </Router >
    );
  }
}

export default App;
