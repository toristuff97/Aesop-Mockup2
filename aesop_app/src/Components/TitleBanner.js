import React from 'react';
import './TitleBanner.css';
import Container from 'react-bootstrap/Container';

class TitleBanner extends React.Component {
    render() {
        return (
            <div>
                <div className='banner'>
                    {/* <div className='left-head'>
                        <h2>Aesop</h2>
                    </div>
                    <div className='right-head'>
                        <h2>Formulations for skin, hair, home, and body</h2>
                        <h4>Created with sensory pleasure in mind.</h4>
                    </div> */}
                    <Container>
                        <Row>
                            <Col sm={4}>
                                <h2>Aesop</h2>
                            </Col>
                            <Col sm={8}>
                                <h2>Formulations for skin, hair, home, and body</h2>
                            </Col>
                        </Row>
                    </Container>
                </div>
                
            </div>
        )
    }
}

export default TitleBanner;