import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TopTitle extends Component {
  static propTypes = {
      testsCount: PropTypes.number,
      closeNav: PropTypes.func.isRequired
  };
  
  render() {
    const {
        testsCount,
        closeNav
    } = this.props;
      
    // TODO: replace 'Close' text with actual icon
    return (
      <div className="row topLine">
        <div className="col-xs-8">
            Reports { testsCount }
        </div>
        <div className="col-xs-4">
            <span onClick={closeNav}>Close</span>
        </div>
      </div>
    );
  }
}

export default TopTitle;
