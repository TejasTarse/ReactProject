import React, { useContext } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { ShopContext } from "../Context/ShopContext.jsx";
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext)
    return (
        <>
            <Link className="text-decoration-none text-dark">
                <Card className="border-0">
                    <div className="overflow-hidden">
                        <Card.Img
                            variant="top"
                            src={image[0]}
                            alt={name}
                            className="img-fluid transition-transform"
                            style={{ transition: 'transform 0.3s ease-in-out' }}
                            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                        />
                    </div>

                    <Card.Body className="p-2">
                        <Card.Text className="pt-2 pb-1 text-muted small mb-0">{name}</Card.Text>
                        <Card.Text className="fw-medium small mb-0">
                            {currency}
                            {price}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </>
    )
}

export default ProductItem
