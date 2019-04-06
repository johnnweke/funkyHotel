import React, { Component } from 'react';
import MapRooms from './MapRooms';

export default class DeleteRooms extends Component {
  state = {
    dataRoom: []
  };

  componentDidMount() {
    this.getDataRoom();
  }

  // Fetch rooms
  getDataRoom = () => {
    console.log('getDataRoom function call');
  };

  // Delete room by id
  deleteRoom = id => {
    console.log('deleteRoom function call');
    console.log('deleteRoom id', id);
  };

  render() {
    return (
      <div>
        <MapRooms
          dataRoom={this.state.dataRoom}
          buttonType="delete"
          onDeleteClick={e => this.deleteRoom(e.target.id)}
        />
        ;
      </div>
    );
  }
}
