import React, { Component } from 'react';

export default class MapReservations extends Component {
  renderModal = resv => {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalCenter"
          onClick={this.props.handleShow}
          id={resv._id}
          reserver={resv.reserver}
          checkin={resv.checkIn}
          checkout={resv.checkOut}
          roomreserving={resv.roomReserving._id}
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
                  Update Reservation
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
                  <label htmlFor="reserver" className="col-form-label">
                    Reserver:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="reserver"
                    name="reserver"
                    value={this.props.modalContent.reserver}
                    onChange={this.props.handleChange}
                  />
                  {this.props.errors && (
                    <div style={{ color: 'red' }}>
                      {this.props.errors.reserver}
                    </div>
                  )}
                  <label htmlFor="checkIn" className="col-form-label">
                    Check In:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="checkIn"
                    name="checkIn"
                    value={this.props.modalContent.checkIn}
                    onChange={this.props.handleChange}
                  />
                  {this.props.errors && (
                    <div style={{ color: 'red' }}>
                      {this.props.errors.checkIn}
                    </div>
                  )}
                  <label htmlFor="checkOut" className="col-form-label">
                    Check Out:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="checkOut"
                    name="checkOut"
                    value={this.props.modalContent.checkOut}
                    onChange={this.props.handleChange}
                  />
                  {this.props.errors && (
                    <div style={{ color: 'red' }}>
                      {this.props.errors.checkOut}
                    </div>
                  )}
                  <label htmlFor="roomReserving" className="col-form-label">
                    Room Reserving:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="roomReserving"
                    name="roomReserving"
                    value={this.props.modalContent.roomReserving}
                    onChange={this.props.handleChange}
                  />
                  {this.props.errors && (
                    <div style={{ color: 'red' }}>
                      {this.props.errors.roomReserving}
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
                  onClick={this.props.updateResv}
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

  renderButton = (props, resv) => {
    switch (props) {
      case 'delete':
        return (
          <div>
            <input
              type="submit"
              id={resv._id}
              className="btn btn-danger"
              value="Delete"
              onClick={this.props.onDeleteClick}
            />
          </div>
        );
      case 'update':
        return this.renderModal(resv);
      default:
        break;
    }
  };

  render() {
    return (
      <div className="App">
        {this.props.dataReservation.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          this.props.dataReservation.map((resv, i) => (
            <form id={resv._id} reserver={resv.reserver} key={i}>
              <div>
                <p>ID: {resv._id}</p>
                <p>Reserver: {resv.reserver}</p>
                <p>Check In: {resv.checkIn}</p>
                <p>Check Out: {resv.checkOut}</p>

                {this.renderButton(this.props.buttonType, resv)}
                <hr />
              </div>
            </form>
          ))
        )}
      </div>
    );
  }
}
