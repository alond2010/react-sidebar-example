import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SideBarItem extends Component {
  static propTypes = {
      location: PropTypes.string,
      title: PropTypes.string,
      testType: PropTypes.string,
      date: PropTypes.date,
      lastUpdated: PropTypes.lastUpdated
  };
  
  render() {
    const {
        location,
        title,
        testType,
        lastUpdated,
        date
    } = this.props;
      
    return (
      <div className="sideBarItem">
        <div className="col-md-8">
            <div className="sideBarItemTitle">{ title }</div>
            <div className="siderBarItemLocation">{ location }</div>
        </div>
        <div className="col-md-4">
            <div className="sideBarItemDate">{ date }</div>
            <div className="siderBarItemLastUpdate">{ lastUpdated }</div>
        </div>
      </div>
    );
  }
}

export default SideBarItem;
