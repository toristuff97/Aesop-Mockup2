import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import jquery from 'jquery';
import 'popper.js';
import roomspray from './images/istrosroomspray.png'

export default class Fragrance extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="..." class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="..."/>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
            

        <div>
            <img src={roomspray} alt="Istros Aromatique Room Spray"/>
            <h2>Istros Aromatique Room Spray</h2>
            <p>Enlivening florals; smoky Tobacco</p>
        </div>
        </div>
        )
    }
}
