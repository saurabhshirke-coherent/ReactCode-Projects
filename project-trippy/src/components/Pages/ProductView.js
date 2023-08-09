import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../../App.css';
import '../Base.css';
import CardItem from '../CardItem';

export default function ProductView() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetchProductsByCategory();
  });
  
  //API Call for fetching products by filtering Categories:
  const fetchProductsByCategory = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className="productview">
      
      <div className="product-list">
        {
        products && (
          <div className='cards'>
            <h1>Products in Category "{category}"</h1>
            <div className='cards-scroll-container'>
              <div className='cards__container'>
                <div className='cards__wrapper'>
                  <ul className='cards__items'>
                    {products.map((product) => (
                      <CardItem
                        key={product.id}
                        src={product.image}
                        text={product.title}
                        label={product.category}
                        product={product}
                        path={`/description/${product.id}`}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
      }
      </div>
    </div>
  );
}
