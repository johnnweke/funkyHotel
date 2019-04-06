import React, { Component } from 'react';
import MapReservations from './MapReservations';

export default class UpdateReservations extends Component {
  state = {
    dataReservation: [],
    modalContent: {
      id: '',
      reserver: '',
      checkIn: '',
      checkOut: '',
      roomReserving: ''
    },
    errors: {}
  };

  componentDidMount() {
    this.getDataReservation();
  }

  handleChange = e => {
    let modalContent = this.state.modalContent;
    modalContent[e.target.name] = e.target.value;
    this.setState({ modalContent: modalContent });
  };

  // Fetch Reservations
  getDataReservation = () => {};

  // Patch room function
  updateReservation = () => {
    // Set each object key equal to state
    const reservationBody = {};
  };

  handleShow = e => {
    let updateResv = {};
    updateResv.id = e.target.getAttribute('id');
    updateResv.reserver = e.target.getAttribute('reserver');
    updateResv.checkIn = e.target.getAttribute('checkin');
    updateResv.checkOut = e.target.getAttribute('checkout');
    updateResv.roomReserving = e.target.getAttribute('roomreserving');
    this.setState({ modalContent: updateResv });
  };

  render() {
    return (
      <MapReservations
        dataReservation={this.state.dataReservation}
        updateResv={e => this.updateReservation(e.target.id)}
        handleShow={this.handleShow}
        modalContent={this.state.modalContent}
        handleChange={this.handleChange}
        buttonType="update"
        response={this.state.postResvResponse}
        errors={this.state.errors}
      />
    );
  }
}
