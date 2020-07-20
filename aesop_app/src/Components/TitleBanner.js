import React from 'react';
import './TitleBanner.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import assets from 'src'

class TitleBanner extends React.Component {
    render() {
        return (
            <div>
                <div className='banner'>
                    <div className='nav-div'>
                        {/* put nav bar here */}
                    </div>
                    <Container className='hero-text'>
                        <Row>
                            <Col sm={4}>
                                <h2>Aesop</h2>
                            </Col>
                            <Col sm={8}>
                                <h2>Formulations for skin, hair, home, and body</h2>
                                <h4>Created with sensory pleasure in mind.</h4>
                            </Col>
                        </Row>
                    </Container>
                </div>
                
            </div>
        )
    }
}

export default TitleBanner;