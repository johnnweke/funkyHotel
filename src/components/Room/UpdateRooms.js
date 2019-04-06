import React, { Component } from 'react';
import MapRooms from './MapRooms';

export default class UpdateRooms extends Component {
  state = {
    dataRoom: [],
    modalContent: {
      id: '',
      price: undefined,
      name: '',
      number: undefined,
      bed: '',
      bathtub: undefined,
      kitchen: undefined,
      postRoomResponse: ''
    },
    errors: {}
  };

  componentDidMount() {
    this.getDataRoom();
  }

  handleChange = e => {
    let modalContent = this.state.modalContent;
    modalContent[e.target.name] = e.target.value;
    this.setState({ modalContent: modalContent });
  };

  // Get checkbox input
  handleCheckboxChange = e => {
    const modalContent = this.state.modalContent;
    modalContent[e.target.name] = !modalContent[e.target.name];
    this.setState({ modalContent: modalContent });
  };

  // Fetch rooms
  getDataRoom = () => {
    console.log('getDataRoom function called');
  };

  // Patch room function
  updateRoom = () => {
    // Set each object key equal to state
    const roomBody = {};
  };

  handleShow = e => {
    let updateRoom = {};

    updateRoom.id = e.target.getAttribute('id');
    updateRoom.price = e.target.getAttribute('price');
    updateRoom.name = e.target.getAttribute('name');
    updateRoom.number = e.target.getAttribute('number');
    updateRoom.bed = e.target.getAttribute('bed');
    const convertBathtub =
      e.target.getAttribute('bathtub') === 'true' ? true : false;
    const convertKitchen =
      e.target.getAttribute('kitchen') === 'true' ? true : false;
    updateRoom.bathtub = convertBathtub;
    updateRoom.kitchen = convertKitchen;

    this.setState({ modalContent: updateRoom });
  };

  render() {
    return (
      <MapRooms
        dataRoom={this.state.dataRoom}
        updateRoom={e => this.updateRoom(e.target.id)}
        handleShow={this.handleShow}
        modalContent={this.state.modalContent}
        handleChange={this.handleChange}
        handleCheckboxChange={this.handleCheckboxChange}
        buttonType="update"
        bathtubChecked={this.state.modalContent.bathtub}
        kitchenChecked={this.state.modalContent.kitchen}
        response={this.state.postRoomResponse}
        errors={this.state.errors}
      />
    );
  }
}
