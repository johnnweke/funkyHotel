import React, { Component } from 'react';
import MapReservations from './MapReservations';

export default class GetReservations extends Component {
  state = {
    dataReservation: []
  };

  componentDidMount() {
    this.getDataReservation();
  }

  // Sort reservations by date here
  sortResvsByDate = () => {
    let resv = this.state.dataReservation;
    resv = resv.sort((a,b) => {
      return new Date(a.checkIn) - new Date(b.checkIn);


    });
    this.setState({ dataReservation: resv })
  };

  // Fetch reservations
  getDataReservation = () => {
    //This fetches the data from the API. Standard. 
    fetch (`http://3.93.237.111/api/rest/reservation`)
      .then (response => response.json()) //this converts the data to json
      .then (data => this.setState({dataReservation: data})) // this sets the state of the converted data as per React
      .catch(err => //this catches any errors in document from fetching data (UI Fallback and for us)
        console.log("Error occured in fetching reservation data")
        )
  };

  render() {
    return (
      <div>
        <button onClick={this.sortResvsByDate}>Sort Rooms By Check In</button>
        <MapReservations dataReservation={this.state.dataReservation} />
      </div>
    );
  }
}
