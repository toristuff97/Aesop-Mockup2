import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import odyssey from './images/odyssey.png'

export default class AllGifts extends Component {
    render() {
        return (
            <div>
                <div class="container">
                <div class="row">
                    <div class="col-sm" className="allGiftsDesc">
                    <h4 className="giftOdyssey">An odyssey of gifts, for generous and</h4> 
                    <h4 className="giftOdyssey">inspired giving</h4>
                    <a>Seasonal Gift Kits</a> <br/><br/> 
                    <a>Aesop favourites</a> <br/><br/> 
                    <a>Small gestures</a> <br/><br/> 
                    <a>Generous offerings</a> <br/><br/> 
                    <a>Fragrant formulations</a> <br/><br/> 
                    <a>Treats for self</a> <br/><br/> 
                    <a>All gifts</a> <br/><br/> 
                    </div>
                    <div class="col-sm">
                        <br/> <br/> <br/>
                    <img src={odyssey} alt="An abstract photo of stairs and shapes."/>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
