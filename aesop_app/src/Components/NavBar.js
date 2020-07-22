import React from 'react'
import './Styles/NavBar.css'
import Nav from 'react-bootstrap/Nav'
// import Nav from 'react-bootstrap/Nav'
// import Nav from 'react-bootstrap/Nav'

class NavBar extends React.Component {
    render() {
        return (
            <div className='navbar'>
                <Nav defaultActiveKey='/shop' as='ul'>
                    <Nav.Item as='li'>
                        <Nav.Link href='/shop'><p>Shop</p></Nav.Link>
                    </Nav.Item>
                    <Nav.Item as='li'>
                        <Nav.Link href='/read'><p>Read</p></Nav.Link>
                    </Nav.Item>
                    <Nav.Item as='li'>
                        <Nav.Link href='/stores'><p>Stores</p></Nav.Link>
                    </Nav.Item>
                    <Nav.Item as='li'>
                        <Nav.Link href='/search'><p>Search</p></Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav className='justify-content-end'>
                    <Nav.Item as='li'>
                        <Nav.Link href='/login'><p>Login</p></Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item as='li'>
                        <Nav.Link href='/shop'>Shop</Nav.Link>
                    </Nav.Item> */}
                </Nav>
            {/* //     <div className='navbar-left'>
            //         <a href='#'>Shop</a>
            //         <a href='#'>Read</a>
            //         <a href='#'>Stores</a>
            //         <a href='#'>Search</a>
            //     </div>
            //     <div className='navbar-right'>
            //         <a href='#'>Login</a>
            //         <a href='#'>*</a>
            //     </div> */}
            </div>
        )
    }
}

export default NavBar;
