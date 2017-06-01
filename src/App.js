import React, { Component } from 'react';
import './App.css';

import TopTitle from './components/TopTitle';
import SearchBar from './components/SearchBar';
import ItemsList from './components/ItemsList';

import SidebarStore from './logic/SidebarStore';

class App extends Component {
  render() {
    const {
        displayedItems,
        setSearchVal
    } = SidebarStore;
    
    return (
      <div className="container">
          <TopTitle testsCount={displayedItems.length}  />
          <SearchBar submit={setSearchVal} />
          <ItemsList items={displayedItems} />
      </div>
    );
  }
}

export default App;
