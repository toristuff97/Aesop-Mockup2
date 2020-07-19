import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import jquery from 'jquery';
import 'popper.js';
import roomspray from './images/istrosroomspray.png'
import tacit from './images/tacit.png'
import isabelle from './images/isabelle.png'
import marrakech from './images/marrakech.png'
import hwyl from './images/hwyl.png'

export default class Fragrance extends Component {
    render() {
        return (
            <div class = "container-sm">
                <div className="FragranceHeading">
                    <p>Fragrance</p>
                    <h2>An aromatic signature</h2>
                    <p>Our bold, sophisticated fragrances-from Parfum and Eau de Parfum to Room Sprays-are meticulously crafted using high-quality ingredients.</p>
                </div>

                <div id="fragranceCarousel" className="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#fragranceCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#fragranceCarousel" data-slide-to="1"></li>
                    <li data-target="#fragranceCarousel" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={roomspray} class="d-block w-100" alt="Istros Aromatique Room Spray"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Istros Aromatique Room Spray</h5>
                        <p>Enlivening florals; smoky Tobacco</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src={tacit} class="d-block w-100" alt="Tacit Eau de Parfum"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Tacit Eau de Parfum</h5>
                        <p>Basil Grand Vert, fresh citrus notes</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src={isabelle} class="d-block w-100" alt="Isabelle Oil Burner Blend"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Isabelle Oil Burner Blend</h5>
                        <p>Stimulating scents of Spearmint, Rose</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src={marrakech} class="d-block w-100" alt="Marrakech Intense Parfum"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Marrakech Intense Parfum</h5>
                        <p>Woody, spicy notes; fresh florals</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src={hwyl} class="d-block w-100" alt="Hwyl Eau de Parfum"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Hwyl Eau de Parfum</h5>
                        <p>Dark, earthy Cypress with notes of Vetiver</p>
                    </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#fragranceCarousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#fragranceCarousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                </div>
        </div>
        )
    }
}
