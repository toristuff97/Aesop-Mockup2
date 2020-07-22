import React, { Component } from 'react';
import './ArchiAndDesign.module.css'; 
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pic1 from '../Images/Location-Images/Aesop-Bleecker-Street-Carousel.jpg';
import Pic2 from '../Images/Location-Images/Aesop-Downtown-LA-Carousel.jpg';
import Pic3 from '../Images/Location-Images/Aesop-Fashion-Valley-Carousel-1-Desktop-2560x1440px.jpg';




 
class ArchiAndDesign extends React.Component {
    render() {
        return (
            <div>
            <Carousel>
            <Carousel.Item>
              <img
                className="slide1"
                src= {Pic1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Bleecker Street Location</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="slide2"
                src= {Pic2}
                alt="Second slide"
              />
          
              <Carousel.Caption>
                <h3> Downtown LA </h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="slide3"
                src= {Pic3}
                alt="Third slide"
              />
          
              <Carousel.Caption>
                <h3> Fashion Valley </h3>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
          </div>
        );
    }
}

    

export default ArchiAndDesign;
