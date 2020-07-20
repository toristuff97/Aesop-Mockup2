import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'


function ShippingModal() {
    const [lgShow, setLgShow] = useState(false);

    return (
    <>
        <Button 
            onClick={() => setLgShow(true)}
            variant='dark'
            size='lg'
            block
        >Complementary shipping on all orders +</Button>
        <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
        >
        {/* <Modal.Header closeButton>
            <Modal.Title>
                Shipping Information
            </Modal.Title>
        </Modal.Header> */}
        <Modal.Body className='modal-body'>
            <h4>Shipping fees and delivery times</h4>
            <span>
            <h4>Standard Shipping</h4>
            <p>Complimentary</p>
            </span> 
            <br />
            <p>2-4 business days</p>
            <br />
            <p>Order by TODAYS DATE to ensure delivery by 6 DAYS OUT</p>
            <span>
                <h4>Next Day Shipping</h4>
                <p>$35</p>
            </span>
            <br />
            <p>Order by 12PM ET for delivery on the next working day</p>
        </Modal.Body>
        </Modal>
    </>
    );
}

export default ShippingModal;