import React, { useState } from "react";
import '../../App.css';
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import EditModal from "../EditModal";
import '../EditModal.css';

Modal.setAppElement('#root');

export default function Description() {
    const rollBack = useNavigate();
    const payload = JSON.parse(localStorage.getItem('Title'));
    const [message, setMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (event) => {
        const action = event.target.value;
        if (action === 'Edit') {
            setIsModalOpen(true);

        } else if (action === 'Delete') {
            const shouldDelete = window.confirm("Are you sure you want to Delete the product?");
            if (shouldDelete) {
                deleteProduct();
            }
        }
    }
    //Delete API for product Delete:

    const deleteProduct = () => {
        fetch('https://fakestoreapi.com/products/6', {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(json => {
                setMessage("Product Deleted Successfully");
                console.log(json);
                setTimeout(() => {
                    localStorage.removeItem('Title');
                    rollBack('/');
                }, 2000);


            })
            .catch(error => {
                console.error("error deleting product:", error);
                setMessage("Error in Deleting the Product.");
            });
    };
    // Edit API for Editing details of Product
    
    const handleEditSave = async (editedProduct) => {
        setIsModalOpen(false);
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${payload.id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editedProduct),
            });

            if (response.ok) {
                const updatedProduct = await response.json();
                console.log("Product updated successfully:", updatedProduct);               // You might want to update the local state or reload data here if needed
            } else {
                console.error("Error updating product:", response.statusText);
            }
        } catch (error) {
            console.error("Error updating product:", error);
        }
     };

    // console.log(payload);
    return (
        <>
            {
                payload && (
                    <>
                        <div className="description--action">
                            <select onChange={handleChange}>
                                <option value="">Action</option>
                                <option value="Edit">Edit</option>
                                <option value="Delete">Delete</option>
                            </select>
                            {
                                message && <p>{message}</p>
                            }
                        </div>

                        <Modal
                        isOpen ={isModalOpen}
                        onRequestClose={()=>setIsModalOpen(false)}
                        className="modal">
                            <EditModal onSave ={handleEditSave} onClose={()=>setIsModalOpen(false)}/>
                        </Modal>

                        <div className="description-container">
                            <img src={payload.image} alt={payload.title} className="description-image" />
                        </div>
                        <div className="description-heading">
                            <hr />
                            <p>Ratings: {payload.rating.rate} |  {payload.rating.count} ratings </p>
                            <h4>Category: {payload.category}</h4>
                            <hr />
                            <h1 className=".description-h1" style={{ color: "orange" }}>{payload.title}</h1>
                            <div className="description-desc">
                                <p>{payload.description}</p>
                                <h3> Best Buy Price: <sup>$</sup>{payload.price}</h3>
                            </div>
                        </div>
                        <div className="button-container">
                            <button className="btn-cart" >Add to Cart +</button>
                            <button className="btn-purchase" >Buy Now</button>
                        </div>
                    </>
                )
            }
        </>
    )
}