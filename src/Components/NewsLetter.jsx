import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const NewsLetter = () => {
    return (
        <div>
            <Container className='text-center my-2'>
                <Row>
                    <Col>
                        <p className='fw-3 fw-medium text-dark'>Subscribe Now & Get 20% OFF</p>

                        <p className="">Get in touch with us to buy good product</p>

                        <Form className="mx-auto mt-4" style={{ maxWidth: "500px" }}>
                            <Row className="align-items-center border">
                                {/* Input box - take remaining width */}
                                <Col xs={8} sm={8}>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter Your Email"
                                        required
                                        className="border-0 shadow-none"
                                    />
                                </Col>

                                {/* Button - fixed width on right */}
                                <Col xs={4} sm={4} className="text-end p-0">
                                    <Button
                                        type="submit"
                                        className="w-100 text-white bg-dark border-none p-2 rounded-0"
                                    >
                                        Subscribe
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default NewsLetter
