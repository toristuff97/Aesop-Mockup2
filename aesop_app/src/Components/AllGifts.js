import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import odyssey from './images/odyssey.png'

export default class AllGifts extends Component {
    render() {
        return (
            <div>
                <div class="container">
                <div class="row">
                    <div class="col-sm">
                    <h2>An odyssey of gifts for generous and inspired giving</h2>
                    <a>Seasonal Gift Kits</a>
                    <a>Aesop favourites</a>
                    <a>Small gestures</a>
                    <a>Generous offerings</a>
                    <a>Fragrant formulations</a>
                    <a>Treats for self</a>
                    <a>All gifts</a>
                    </div>
                    <div class="col-sm">
                    <img src={odyssey} alt="An abstract photo of stairs and shapes."/>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
