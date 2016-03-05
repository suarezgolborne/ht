/*
 * Knapp
 */

import { asyncButton } from '../../actions/AppActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import counter from './reducers';

class SSGButton extends Component {

  incrementOne() {
    console.log("incrementOne");
    this.props.onIncrement()
  }
  render() {
    const dispatch = this.props.dispatch;
    const { buttonName } = this.props.data;


    return (
      <div>
        <label className="home__label">
           Clicked: {buttonName} times
          <button
            type="button" onClick={(evt) => { dispatch(asyncChangeHeaderName(evt.target.value)); }}
            >{buttonName} deded
          </button>
        </label>
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
export default connect(select)(SSGButton);
