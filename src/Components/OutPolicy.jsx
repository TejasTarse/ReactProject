import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { assets } from '../assets/assets'

const OutPolicy = () => {
  return (
    <div>
        
      <Container className=''>
        <Row className='text-center justify-content-between gy-4 mb-5' >
            <Col xs={12} sm={4} >
                <img src={assets[0]} width={50} alt="exchange" className='mb-3' />
                <p className="fw-semibold">Easy Exchange Policy</p>
                <p className="text-muted">No offer hassle free exchange policy</p>
            </Col>
            <Col xs={12} sm={4} >
                <img src={assets[1]} width={50} alt="exchange" className='mb-3' />
                <p className="fw-semibold">7 Days Return Policy</p>
                <p className="text-muted">We provide 7 days free return policy</p>
            </Col>
            <Col xs={12} sm={4} >
                <img src={assets[2]} width={50} alt="exchange" className='mb-3' />
                <p className="fw-semibold">Best customer support</p>
                <p className="text-muted">We provide 24/7 customer support</p>
            </Col>
        </Row>
      </Container>

    </div>
  )
}

export default OutPolicy
