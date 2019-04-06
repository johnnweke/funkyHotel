import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import PostRooms from './components/Room/PostRooms';
import PostReservations from './components/Reservation/PostReservations';
import GetReservations from './components/Reservation/GetReservations';
import DeleteReservations from './components/Reservation/DeleteReservations';
import UpdateReservations from './components/Reservation/UpdateReservations';
import GetRooms from './components/Room/GetRooms';
import UpdateRooms from './components/Room/UpdateRooms';
import DeleteRooms from './components/Room/DeleteRooms';
import Home from './components/Home';
import NavBar from './components/NavBar/NavBar';
import GraphQL from './components/GraphQL/GraphQL';

const ErrorRoute = () => <h1>Page Not Found...</h1>;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/getRooms" component={GetRooms} />
            <Route exact path="/postRooms" component={PostRooms} />
            <Route exact path="/updateRooms" component={UpdateRooms} />
            <Route exact path="/deleteRooms" component={DeleteRooms} />

            <Route exact path="/getReservations" component={GetReservations} />
            <Route
              exact
              path="/postReservations"
              component={PostReservations}
            />
            <Route
              exact
              path="/updateReservations"
              component={UpdateReservations}
            />
            <Route
              exact
              path="/deleteReservations"
              component={DeleteReservations}
            />

            <Route exact path="/graphql" component={GraphQL} />

            <Route component={ErrorRoute} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
