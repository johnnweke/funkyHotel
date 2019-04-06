import React, { Component } from 'react';
import MapReservations from './MapReservations';

export default class DeleteReservations extends Component {
  state = {
    dataReservation: []
  };

  componentDidMount() {
    this.getDataReservation();
  }

  // Fetch reservations
  getDataReservation = () => {};

  // Delete reservations by id
  deleteReservation = id => {};

  render() {
    return (
      <div>
        <MapReservations
          dataReservation={this.state.dataReservation}
          buttonType="delete"
          onDeleteClick={e => this.deleteReservation(e.target.id)}
        />
      </div>
    );
  }
}
