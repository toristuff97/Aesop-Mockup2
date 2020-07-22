import React from 'react';
import Pic from '../assets/Aesop-Gift-Kits-2019-20-Hybris-Range-Page-Secondary-Mid-Desktop-1690x945px.png';
import './styles/GiftKits.css';


function GiftKits() {
    return(
        <div className="parent">
            
            <div className="row">
                <div className="col-sm-3">
                    <p id="title">Five mythical Gift Kits</p>
                    <p id="sub-title">Crafted for gods, mortals, and muses alike, our new Gift Kit collection makes for inspired gift giving this festive session.</p>
                    <button >Explore seasonal Gift Kits &nbsp; &nbsp; &nbsp; &#8594;</button>
                </div>
                <div className="col-sm-9">
                    <img className="pic" src={Pic} alt="Picture of Gift Kit" />
                </div>
            </div>
           
        </div>
    )
}

export default GiftKits();
