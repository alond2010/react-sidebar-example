import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  static propTypes = {
      submit: PropTypes.func
  };
  
  state = {
     searchVal: PropTypes.string
  };
  
  onTextChange = (e) => {
      this.setState({
            searchVal: e.target.value 
      });
      this.props.submit(this.state.searchVal);
  }
  
  render() {
    const {
        submit
    } = this.props;
      
    return (
      <div className="searchBar">
        <input type="text" onChange={this.onTextChange} value={this.state.searchVal}  />
      </div>
    );
  }
}

export default SearchBar;