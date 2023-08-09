import React, { useState } from "react";
import './AddProduct.css';
import { useNavigate } from 'react-router-dom';

export default function AddProducts() {
  const rollback = useNavigate();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(null);
  const [descr, setDescr] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  //API to Add Product:
  const handleAddProduct = async (e) => {
    e.preventDefault();
    const productData = {
      title: title,
      price: parseFloat(price),
      description: descr,
      image: 'https://i.pravatar.cc',
      category: category
    };

    try {
      const addProductPayload = await fetch('https://fakestoreapi.com/products', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
      });

      const json = await addProductPayload.json();
      // console.log(json);

      if (json.id) {
        setMessage('Product Added Successfully!!!');
        setTitle('');
        setPrice('');
        setDescr('');
        setCategory('');
        setTimeout(() => {
          rollback('/');
        }, 2000);
      } else {
        setMessage('Error adding Product');
      }
    } catch (error) {
      console.error('Error adding Product:', error);
      setMessage('Error adding Product');
    }
    
  }
  return (
    <div className="add-product">
      <div className="add-product-container">
        <h1>Add Product</h1>
        <form className="addproduct-form-container" onSubmit={handleAddProduct}>
          <label htmlFor="title">Title</label>
          <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />

          <label htmlFor="price">Price</label>
          <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} />

          <label htmlFor="descr">Description</label>
          <textarea name="description" onChange={(e) => setDescr(e.target.value)} value={descr} />

          <label htmlFor="category">Category</label>
          <select onChange={(e) => setCategory(e.target.value)} value={category}>
            <option value="">Select a category</option>
            <option value="electronics">Electronics</option>
            <option value="jewellery">Jewellery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>

          <button type="submit" className="btn-submit">ADD PRODUCT +</button>
          
        </form>
        {
          message && <p>{message}</p>
        }
      </div>
    </div>
  )

}