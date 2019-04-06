import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import hotelBreakfast from '../../images/hotelBreakfast.jpg';
import hotelChristmas from '../../images/hotelChristmas.jpg';
import seniorDiscount from '../../images/seniorDiscount.jpeg';
import style from './hotelcarousel.css';

export default class HotelCarousel extends Component {
  render() {
    return (
      <div id="HotelCarousel">
        <Carousel>
          <Carousel.Item>
            <h3 className="carouselHeader">Enjoy Breakfast, Our Treat!</h3>
            <img
              className="d-block w-100"
              src={hotelBreakfast}
              alt="Hotel Breakfast"
            />
            <Carousel.Caption className="caption">
              <p className="carouselP">
                Breakfast served from 6:00 AM - 10:00 AM.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <h3 className="carouselHeader">Holiday Specials Available</h3>
            <img
              className="d-block w-100"
              src={hotelChristmas}
              alt="Holiday Special"
            />

            <Carousel.Caption className="caption">
              <p className="carouselP">Book now before we fill up.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <h3 className="carouselHeader">Senior Citizen Discounts</h3>
            <img
              className="d-block w-100"
              src={seniorDiscount}
              alt="Senior Discount"
            />

            <Carousel.Caption className="caption">
              <p className="carouselP">Ages 60+</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
