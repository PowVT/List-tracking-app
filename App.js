import React, { Component } from 'react';
import Lists from './Lists.js';
import AddList from './AddList.js';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
	lists: [], // this holds the name of each list
	items: {} // this property names of this object are the names of the lists; their values are arrays of the items in each list
    };
  }

  handleAddList(s) {
      
      var updatedItems = this.state;
      updatedItems[s.newList] = [];
      console.log(updatedItems);

      this.setState( {lists: this.state.lists.concat(s.newList), items: updatedItems}, function () {});
  }
    
  handleAddItem(s) {
     
      var updatedItems = this.state.items;
      updatedItems[s.name].push(s.newItem);

      this.setState({
        items : updatedItems
      }, function () {});
  }

  /**
   * Renders the component.
   */
  render() {
    return (
      <div className="App">
        <AddList addList={this.handleAddList.bind(this)}/>
        <div id="listsDiv" className="List">
          <Lists lists={this.state.lists} items={this.state.items} addItem={this.handleAddItem.bind(this)} />
        </div>
      </div>
    );
  }

}

export default App;
