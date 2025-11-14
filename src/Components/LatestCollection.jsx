import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from "../Context/ShopContext.jsx";
import ProductItem from './ProductItem';
import { Container, Row, Col, Card } from "react-bootstrap";

const LatestCollection = () => {
  

  const {products}=useContext(ShopContext);
  const [latestProducts,setLatestProducts] = useState([]);

  useEffect(()=>{
    setLatestProducts(products.slice(0,12));
  },[products])

  

  return (
    <div className='mt-5'>
      <div className="text-center py-4 text-3xl">
        <h3 className='my-2 '><span className='text-secondary'>LATEST</span> COLLECTION</h3>
        <p className='text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati hic magnam consectetur dolores laboriosam ipsa suscipit consequatur nostrum reiciendis provident!</p>
      </div>
      {/* Rendiring Products */}

      <Container className="pb-5">
      <Row className="g-4">
        {latestProducts.map((item) => (
          <Col key={item.id} md={2} sm={6} xs={12}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={item.image}
                alt={item.name}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title className="fs-6 fw-semibold">{item.name}</Card.Title>
                <Card.Text className="fw-bold text-dark">₹{item.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </Container>

    </div>
  )
}

export default LatestCollection
