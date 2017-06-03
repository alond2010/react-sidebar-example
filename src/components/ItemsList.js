import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SiderBarItem from './SiderBarItem';

import { observer } from 'mobx-react';

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
             const item = singleItem;

             return (
                <SiderBarItem key={item.id} {...item} />
             ); 
        });

        list = (
            <div className="itemList">
                  { mappedItems }
            </div>
        );
    } else {
        list = (
            <b>No tests...</b>    
        );
    }
      
    return (
      <div className="itemsListContainer">{list}</div>
    );
  }
}

export default observer(ItemsList);