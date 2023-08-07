import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../../App.css';
import '../Cards.css';

export default function AddProducts() {
  const [productCategory, setProductCategory] = useState(null);

  const fetchProductCategory = async () => {
    try {
      const Categoryresponse = await axios.get('https://fakestoreapi.com/products/categories');
      setProductCategory(Categoryresponse.data);
      console.log(productCategory);
    } catch (error) {
      console.error('Error fetching product List:', error);
    }
  }

  useEffect(() => {
    fetchProductCategory();
  });
  return (
    <h1 className="products">
    Add Product
    </h1>
  )
  
}