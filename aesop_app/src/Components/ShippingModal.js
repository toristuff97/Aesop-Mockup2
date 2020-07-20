import React from 'react'
import Button from 'react-bootstrap/Button'

class ShippingModal extends React.Component {



    render() {
        return (
            <div>
                <div className='modal-bar'>
                        <Button variant="dark" size="lg" block>
                        Complementary shipping on all orders +
                        </Button>
                </div>
            </div>
        )
    }
}

export default ShippingModal;
