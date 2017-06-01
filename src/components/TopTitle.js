import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TopTitle extends Component {
  static propTypes = {
      testsCount: PropTypes.number
  };
  
  render() {
    const {
        testsCount
    } = this.props;
      
    // TODO: replace 'Close' text with actual icon
    return (
      <div className="topTitle">
        <div className="col-md-6">
            Reports { testsCount }
        </div>
        <div className="col-md-6">
            Close
        </div>
      </div>
    );
  }
}

export default TopTitle;