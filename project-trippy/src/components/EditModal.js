import React, { useState } from "react";
import './EditModal.css';

export default function EditModal({ isOpen, onSave, onClose }) {
    const [editedProduct, setEditedProduct] = useState({
        title: '',
        price: '',
        description: '',
        image: '',
        category: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSave = () => {
        onSave(editedProduct);
        setEditedProduct({
            title: '',
            price: '',
            description: '',
            image: '',
            category: ''
        });
        onClose();
    };

    return (
        <div className={`modal ${isOpen ? "open" : ""}`}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Edit Product</h2>
                <label>Title:</label>
                <input type="text" name="title" value={editedProduct.title} onChange={handleInputChange} />
                <label>Price:</label>
                <input type="number" name="price" value={editedProduct.price} onChange={handleInputChange} />
                <label>Description:</label>
                <textarea name="description" value={editedProduct.description} onChange={handleInputChange} />
                <label>Image URL:</label>
                <input type="text" name="image" value={editedProduct.image} onChange={handleInputChange} />
                <label>Category:</label>
                <select name="category" className="select-modal" value={editedProduct.category} onChange={handleInputChange}>
                    <option value="">Select a category</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewellery">Jewellery</option>
                    <option value="mens-clothing">Men's Clothing</option>
                    <option value="womens-clothing">Women's Clothing</option>
                </select>
                <button className="btn-save" onClick={handleSave}>Save</button>
            </div>
        </div>
    );
}
