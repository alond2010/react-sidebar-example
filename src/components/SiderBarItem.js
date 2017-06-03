import React, { Component } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

moment.lang('en');

class SideBarItem extends Component {
  static propTypes = {
      location: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      created: PropTypes.number.isRequired,
      updated: PropTypes.number.isRequired
  };
  
  render() {
    const {
        location,
        name,
        type,
        updated,
        created
    } = this.props;

    console.log(created);

    const updatedDate = moment.unix(updated).local().format("MMM D");
    const updatedTime = moment.unix(updated).local().format("h:mm A");

    return (
      <div className="row">
          <div className="sideBarItem">
            <div className="col-xs-8">
                <div className="sideBarItemTitle">{ name }</div>
                <div className="sideBarItemLocation">{ location }</div>
            </div>
            <div className="col-xs-4">
                <div className="sideBarItemDate">{ updatedDate }</div>
                <div className="sideBarItemLastUpdate">{ updatedTime }</div>
            </div>
          </div>
      </div>
    );
  }
}

export default SideBarItem;
