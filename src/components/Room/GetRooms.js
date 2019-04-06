import React, { Component } from 'react';
import MapRooms from './MapRooms';

export default class GetRooms extends Component {
  state = {
    dataRoom: []
  };

  componentDidMount() { //runs first, and then mounts the API - even though the API link is at the bottom
    this.getDataRoom();
  }

  // Sort rooms by price
  sortRoomsByPrice = () => {
    let rooms = this.state.dataRoom;

    rooms = rooms.sort((a,b) => {
      //Sort in ascending order
      return a.price - b.price;
    });
    //Set State of array created from Sorting rooms
    this.setState({ dataRoom: rooms});
  };

  // Fetch rooms
  getDataRoom = () => {
    fetch(`http://3.93.237.111/api/rest/room`)
    .then(response => response.json())
    //'data' in this case is mutable and changeable. It's a variable. 
    .then(data => {
      this.setState({dataRoom: data});
    })
    .catch(err => console.log ('Error occurred in fetching room data.'));
  };

  render() {
    return (
      <div>
        <button onClick={this.sortRoomsByPrice}>Sort Rooms By Price</button>
        <MapRooms dataRoom={this.state.dataRoom} />
      </div>
    );
  }
}
