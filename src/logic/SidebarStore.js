import { observable, runInAction, computed } from 'mobx';
import axios from 'axios';


class SidebarStore {
    items = observable([]);
    
    searchVal = observable("");
    
    baseUrl = "http://node-tests-alond2010.c9users.io:8080";
    
    displayedItems = computed(() => {
        const searchRegex = new RegExp(this.searchVal, "i");
        
        if(this.searchVal.length > 0){
            return this.items.filter(
                testItem => testItem.name.test(searchRegex)
            );
        }
        
        return this.items.toJS();
    });
    
    constructor(){
        this.loadData();
    }
    
    setSearchVal = (text) => {
        this.searchVal.replace(text);  
    };
    
    loadData = () => {
        axios.get(this.baseUrl + "/sidebar.json").then((res) => {
            runInAction(() => {
                this.items.replace(res.data); 
            });
        });
    }
}

export default new SidebarStore;