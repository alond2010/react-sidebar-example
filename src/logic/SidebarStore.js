import {
    observable,
    extendObservable,
    runInAction,
    computed
} from 'mobx';

import axios from 'axios';


class SidebarStore {
    items = observable([]);
    
    searchVal = observable("");

    displayItems = observable([]);

    // CONSIDER: changing this address to relative url
    baseUrl = "";

    constructor(){
        this.loadData();
    }
    
    setSearchVal = (text) => {
        console.log(text);
        this.searchVal = text;
        this.updateDisplayItems();
    };

    updateDisplayItems = () => {
        const searchRegex = new RegExp(this.searchVal, "i");
        if(this.searchVal.length > 0){
            const filteredItems = this.items.filter((testItem) => {
                return searchRegex.test(testItem.name)
            });
            this.displayItems.replace(filteredItems);
        } else {
            this.displayItems.replace(this.items);
        }
    };
    
    loadData = () => {
        axios.get(this.baseUrl + "/sidebar.json").then((res) => {
            runInAction(() => {
                this.items.replace(res.data);
                this.updateDisplayItems();
            });
        });
    }
}

export default new SidebarStore;
