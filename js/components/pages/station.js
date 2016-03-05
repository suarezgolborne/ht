
import React, { Component } from 'react';
// import { fetch } from 'node-fetch';
import { connect } from 'react-redux';

require('es6-promise').polyfill();
require('isomorphic-fetch');




/*

  fetch.fetchUrl(url, function(error, meta, body){
      console.log(body.toString());
  });
  */


class Station extends Component {



  render() {
    const url = 'https://api.sl.se/api2/realtimedepartures.json?key=79666cae66db4bd6a8b25a91f796fd72&siteid=' + this.props.id + '&timewindow=60';
    fetch(url)
        .then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then(function(stories) {
            console.log(stories);
        });


    const dispatch = this.props.dispatch;


    return (
      <div>
        station
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
export default connect(select)(Station);
