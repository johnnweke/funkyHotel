import React, { Component } from 'react';

export default class MapRooms extends Component {
  renderModal = room => {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalCenter"
          onClick={this.props.handleShow}
          id={room._id}
          price={room.price}
          name={room.name}
          number={room.number}
          bed={room.bed}
          bathtub={`${room.bathtub}`}
          kitchen={`${room.kitchen}`}
        >
          Edit
        </button>
        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Update Room
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div>
                <div className="form-group">
                  <label htmlFor="price" className="col-form-label">
                    Price:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="price"
                    name="price"
                    value={this.props.modalContent.price}
                    onChange={this.props.handleChange}
                  />
                  {this.props.errors && (
                    <div style={{ color: 'red' }}>
                      {this.props.errors.price}
                    </div>
                  )}
                  <label htmlFor="name" className="col-form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={this.props.modalContent.name}
                    onChange={this.props.handleChange}
                  />
                  {this.props.errors && (
                    <div style={{ color: 'red' }}>{this.props.errors.name}</div>
                  )}
                  <label htmlFor="number" className="col-form-label">
                    Number:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="number"
                    name="number"
                    value={this.props.modalContent.number}
                    onChange={this.props.handleChange}
                  />
                  {this.props.errors && (
                    <div style={{ color: 'red' }}>
                      {this.props.errors.number}
                    </div>
                  )}
                  <label htmlFor="bed" className="col-form-label">
                    Bed :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="bed"
                    name="bed"
                    value={this.props.modalContent.bed}
                    onChange={this.props.handleChange}
                  />
                  {this.props.errors && (
                    <div style={{ color: 'red' }}>{this.props.errors.bed}</div>
                  )}
                  <label htmlFor="bathtub" className="col-form-label">
                    Bathtub
                  </label>
                  <input
                    checked={this.props.bathtubChecked}
                    type="checkBox"
                    id="bathtub"
                    name="bathtub"
                    onClick={this.props.handleCheckboxChange}
                  />
                  {this.props.errors && (
                    <div style={{ color: 'red' }}>
                      {this.props.errors.bathtub}
                    </div>
                  )}
                  <label htmlFor="kitchen" className="col-form-label">
                    Kitchen
                  </label>
                  <input
                    checked={this.props.kitchenChecked}
                    type="checkBox"
                    id="kitchen"
                    name="kitchen"
                    onClick={this.props.handleCheckboxChange}
                  />
                  {this.props.errors && (
                    <div style={{ color: 'red' }}>
                      {this.props.errors.kitchen}
                    </div>
                  )}
                </div>
              </div>
              <div className="modal-footer">
                <div>{this.props.response}</div>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.props.updateRoom}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  renderButton = (props, room) => {
    switch (props) {
      case 'delete':
        return (
          <div>
            <input
              type="submit"
              id={room._id}
              className="btn btn-danger"
              value="Delete"
              onClick={this.props.onDeleteClick}
            />
          </div>
        );
      case 'update':
        return this.renderModal(room);
      default:
        break;
    }
  };

  render() {
    return (
      <div className="App">
        {this.props.dataRoom.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          this.props.dataRoom.map((room, i) => (
            <form id={room._id} key={i}>
              <div>
                <p>ID: {room._id}</p>
                <p>Price: {room.price}</p>
                <p>Name: {room.name}</p>
                <p>Number: {room.number}</p>
                <p>Bed: {room.bed}</p>
                <p>Bathtub: {`${room.bathtub}`}</p>
                <p>Kitchen: {`${room.kitchen}`}</p>

                {this.renderButton(this.props.buttonType, room)}
                <hr />
              </div>
            </form>
          ))
        )}
      </div>
    );
  }
}
