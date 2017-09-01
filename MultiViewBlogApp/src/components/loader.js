import React, { Component } from 'react';
import LoadingBar from 'react-redux-loading-bar';

class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <LoadingBar />
      </div>
    )
  }
}

export default Loader;
