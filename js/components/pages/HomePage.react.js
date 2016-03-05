/*
 * HomePage
 * This is the first thing users see of our App
 */
//
//  Högalidskyrkan
// api.sl.se/api2/realtimedepartures.json?key=79666cae66db4bd6a8b25a91f796fd72&siteid=1376&timewindow=60
//
// Högalidsgatan
// api.sl.se/api2/realtimedepartures.json?key=79666cae66db4bd6a8b25a91f796fd72&siteid=1381&timewindow=60
//
// Hornsgatan
// api.sl.se/api2/realtimedepartures.json?key=79666cae66db4bd6a8b25a91f796fd72&siteid=1373&timewindow=60

// import { asyncChangeHeaderName, asyncChangeProjectName, asyncChangeOwnerName } from '../../actions/AppActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Stations from './Stations';

class HomePage extends Component {
  render() {
    // const dispatch = this.props.dispatch;
    // const { projectName, ownerName, headerName } = this.props.data;
    return (
      <div>
        <Stations />
      </div>
    );
  }
}

// REDUX STUFF

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(HomePage);
