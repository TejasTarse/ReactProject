import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { Col, Container, Row } from 'react-bootstrap';
import ProductItem from './ProductItem';

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller,setBestSeller]=useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => item.bestseller);
        setBestSeller(bestProduct.slice(0, 12));
    }, [products]);
  return (
    <Container>

        <div className="text-center py-4 text-3xl">
        <h3 className='my-2 '><span className='text-secondary'>BEST</span> SELLER</h3>
        <p className='text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati hic magnam consectetur dolores laboriosam ipsa suscipit consequatur nostrum reiciendis provident!</p>
      </div>

      {/* Product Grid */}
      <Row className=''>
        {
            bestSeller.map((item,index)=>(
                <Col key={index} xs={6} sm={4} md={3} lg={2} >
                    <ProductItem id={item.id} name={item.name} image={item.image} price={item.price}>

                    </ProductItem>
                </Col>
            ))
        }
      </Row>
    </Container>
  )
}

export default BestSeller
