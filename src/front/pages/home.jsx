import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  const [iphones, setIphones] = useState([]);

  useEffect(() => {
    // CHANGED: https to http
    // fetch('http://localhost:3000/getproducts')
    fetch('/iphone.json')
      .then(response => response.json())
      .then(data => {
        console.log("Data received:", data);
        // Your backend returns {products: [...]} format
        if (data && data.products) {
          setIphones(data.products);
        } else {
          setIphones(data);
        }
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  console.log(iphones);

  return (
    <div>
      <section className='internal-page-wrapper'>
        <div className='container'>
          <div className='row justify-content-center text-center'>
            <div className='col-12 mt-5 pt-5'>
              <h1 className='font-weight-bold'>iPhone Products</h1>
              <div className='brief-description mb-5'>
                the best for the brightness of your screen
              </div>
            </div>
          </div>
          
          {iphones?.map((product, index) => {
            const order1 = index % 2 === 0 ? 1 : 2;
            const order2 = index % 2 === 0 ? 2 : 1;
            
            return (
              <div 
                key={product.product_url || product.product_id || index} 
                className='row justify-content-center text-center product-holder h-100 mb-5 pb-5'
              >
                {/* Product Info Column */}
                <div 
                  className='col-12 col-md-6 d-flex flex-column align-items-center justify-content-center' 
                  style={{ order: order1 }}
                >
                  <div className='product-title h3 mb-3'>{product.product_name}</div>
                  <div className='product_brief h5 mb-3'>{product.product_brief}</div>
                  <div className='start_price h6 mb-2'>
                    {product.start_price ? `Starting at $${product.start_price}` : ''}
                  </div>
                  <div className='monthly-price text-muted mb-3'>{product.price_range}</div>
                  <div className='Links-wrapper'>
                    <ul className='list-unstyled'>
                      <li>
                        <Link 
                          to={`/getproducts/${product.product_url}`}
                          className='btn btn-primary'
                        >
                          Learn more
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Product Image Column */}
                <div 
                  className='col-12 col-md-6 d-flex align-items-center justify-content-center' 
                  style={{ order: order2 }}
                >
                  <img 
                    src={product.product_img || 'https://via.placeholder.com/400x300?text=iPhone'} 
                    alt={product.product_name}
                    className='img-fluid product-image'
                    style={{ maxWidth: '100%', height: 'auto' }}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x300?text=No+Image';
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;