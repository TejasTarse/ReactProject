import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <>
        <Container className='border border-secondary py-0'>
            <Row className=''>
                <Col  sm={6}  xs={12} className='text-center mb-4 mb-sm-0 text-small-start'>
                    <div className="text-dark d-flex justify-content-center flex-column align-items-center h-100">
                        <div className="d-flex align-items-center justify-content-center justify-content-sm-st gap-1">
                            <div className="" style={{width:'40px',height:'2px',backgroundColor:"#414141"}}></div>
                            <p className="mb-0 fw-medium small">OUR BESTSELLERS</p>
                        </div>
                        <h1 className='fw-bold display-6 mb-3'>Latest Arrivals</h1>
                        <div className="d-flex align-items-center justify-content-center justify-content-sm-st gap-1">
                            <p className="mb-0 fw-medium small">SHOP NOW  </p>
                            <div className="" style={{width:'40px',height:'2px',backgroundColor:"#414141"}}></div>
                        </div>
                    </div>
                </Col>

                <Col  sm={6}  xs={12} className='text-center m-0 p-0'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYBlu1wieChQ5J04X62owd3MoCYirRfaxWLQ&s" alt="" height={500} className='w-100' />
                </Col>
                
            </Row>
        </Container>
    </>
  )
}

export default Hero
