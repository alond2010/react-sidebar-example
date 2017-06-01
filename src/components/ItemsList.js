import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SiderBarItem from './SiderBarItem';

class ItemsList extends Component {
  static propTypes = {
      items: PropTypes.array
  };
  
  
  constructor(props){
      super(props);
      this.state = {
            items: this.props.items  
      };
  }
  
  render() {
      
    let list;
    
    const {
        items
    } = this.props;
    
    if(items.length > 0){
        const mappedItems = items.map((singleItem) => {
             return (
                <SiderBarItem {...singleItem} />
             ); 
        });
        
        list = (
            <ul className="itemList">
                  { mappedItems }
            </ul>
        );
    } else {
        list = (
            <b>No tests...</b>    
        );
    }
      
    return (
      <div className="itemsList">{list}</div>
    );
  }
}

export default ItemsList;