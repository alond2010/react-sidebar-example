import React, { Component } from 'react';
import './App.css';

import TopTitle from './components/TopTitle';
import SearchBar from './components/SearchBar';
import ItemsList from './components/ItemsList';

import SidebarStore from './logic/SidebarStore';

import { observer } from 'mobx-react';

class App extends Component {

    state = {
        isOpened: false
    };

    toggleNav = () => {
        this.setState({
            isOpened: !this.state.isOpened
        })
    };

  render() {
    const {
        displayItems,
        setSearchVal
    } = SidebarStore;

    const items = displayItems.toJS();

    let cssClass = "sidebar-container ";

    if(this.state.isOpened)
        cssClass += "sidebar-container-open";

    return (
        <div>
            <button onClick={this.toggleNav} className="toggle-btn">Toogle</button>
            <div className={cssClass}>
                <div className="container-fluid">
                  <TopTitle closeNav={this.toggleNav} testsCount={items.length}  />
                  <SearchBar submit={setSearchVal} />
                </div>
              <ItemsList items={items} />
            </div>
        </div>
    );
  }
}

export default observer(App);
