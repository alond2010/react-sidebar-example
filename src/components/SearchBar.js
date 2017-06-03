import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  static propTypes = {
      submit: PropTypes.func
  };
  
  state = {
     searchVal: ""
  };
  
  onTextChange = (e) => {
      const text = e.target.value;

      this.setState({
            searchVal: text
      });
      this.props.submit(text);
  }
  
  render() {
    const {
        submit
    } = this.props;
      
    return (
      <div className="row">
          <div className="searchBar">
              <input placeholder="search reports" className="searchBarInput" type="text" onChange={this.onTextChange} value={this.state.searchVal}  />
          </div>
      </div>
    );
  }
}

export default SearchBar;