import React, {Component} from 'react';
import './App.scss';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import About from './About/About';
import Cars from './Cars/Cars';
import CarDetail from './CarDetail/CarDetail';

class App extends Component {
  render() {

    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/" exact>Home</NavLink>
            </li>
            <li>
              <NavLink to={{
                pathname: "/about",
              }}>About</NavLink>
            </li>
            <li>
              <NavLink to="/cars">Cars</NavLink>
            </li>
          </ul>
        </nav>

        <hr/>

        <Switch>
          <Route path="/" exact render={() => <h1>Home Page</h1>} />
          <Route path="/about" component={About} />
          <Route path="/cars/:name" component={CarDetail} />              
          <Route path="/cars" component={Cars} />
          <Redirect from={"/cars2"} to={"/cars"} />
          <Route render={() => <h1 style={{textAlign: 'center'}}>404 Not Found</h1>} />
        </Switch>

      </div>
    );
  }
}

export default App
