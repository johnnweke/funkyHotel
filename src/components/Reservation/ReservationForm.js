import React from 'react';

export default function ReservationForm(props) {
  return (
    <div>
      <form onSubmit={props.addReservation} style={{ display: 'grid' }}>
        <label htmlFor="reserver">
          Reserver:
          <input type="text" name="reserver" onChange={props.onChange} />
        </label>
        {props.errors.reserver && (
          <div style={{ color: 'red' }}>{props.errors.reserver}</div>
        )}
        <label htmlFor="roomReserving">
          Room Reserving:
          <input type="text" name="roomReserving" onChange={props.onChange} />
        </label>
        {props.errors.roomReserving && (
          <div style={{ color: 'red' }}>{props.errors.roomReserving}</div>
        )}
        <label htmlFor="checkIn">
          Check In:
          <input type="date" name="checkIn" onChange={props.dateChange} />
        </label>
        {props.errors.checkIn && (
          <div style={{ color: 'red' }}>{props.errors.checkIn}</div>
        )}
        <label htmlFor="checkOut">
          Check Out:
          <input type="date" name="checkOut" onChange={props.dateChange} />
        </label>
        {props.errors.checkOut && (
          <div style={{ color: 'red' }}>{props.errors.checkOut}</div>
        )}
        <div>
          <button type="submit">Add Reservation</button>
        </div>
      </form>
    </div>
  );
}
