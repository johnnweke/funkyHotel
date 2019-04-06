import React from 'react';

const RoomForm = props => {
  return (
    <div className="roomForm">
      <h2>Create a new Room</h2>
      <form onSubmit={props.addRoom} style={{ display: 'grid' }}>
        <label htmlFor="price">
          Price:
          <input type="text" name="price" onChange={props.onChange} />
        </label>
        {props.errors.price && (
          <div style={{ color: 'red' }}>{props.errors.price}</div>
        )}
        <label htmlFor="name">
          Name:
          <input type="text" name="name" onChange={props.onChange} />
        </label>
        {props.errors.name && (
          <div style={{ color: 'red' }}>{props.errors.name}</div>
        )}
        <label htmlFor="number">
          Number:
          <input type="text" name="number" onChange={props.onChange} />
        </label>
        {props.errors.number && (
          <div style={{ color: 'red' }}>{props.errors.number}</div>
        )}
        <label htmlFor="bed">
          Beds:
          <input type="text" name="bed" onChange={props.onChange} />
        </label>
        {props.errors.bed && (
          <div style={{ color: 'red' }}>{props.errors.bed}</div>
        )}
        <label htmlFor="">
          Bathtub
          <input
            type="checkbox"
            name="bathtub"
            onChange={props.checkboxChange}
          />
        </label>
        <label htmlFor="">
          Kitchen
          <input
            type="checkbox"
            name="kitchen"
            onChange={props.checkboxChange}
          />
        </label>
        <div>
          <button type="submit">Add Room</button>
        </div>
      </form>
    </div>
  );
};

export default RoomForm;
