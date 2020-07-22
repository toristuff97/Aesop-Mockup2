import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Styles/SubFooter.css'

class SubFooter extends React.Component {
    render() {
        return (
            <div className='subfooter'>
                <Container fluid='sm'>
                    <Row>
                        <Col className="quote-text">
                            <p>
                                'And your very flesh shall be a great poem'
                            </p>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                    <Col>
                        <p><strong>Walt Whiteman</strong></p>
                    </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default SubFooter;