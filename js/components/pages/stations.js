
import { asyncButton } from '../../actions/AppActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Station from './station';

class Stations extends Component {

  render() {
    const dispatch = this.props.dispatch;
    // const { buttonName } = this.props.data;


    return (
      <div>
        "Stationer"
        <Station id="1376"/>
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
export default connect(select)(Stations);
