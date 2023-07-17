import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Components/Button";
import './HomePage.css';
import '../Components/Button.css';
import videoTrailer from '../Components/videos/video3.mp4';

export const HomePage = () => {
    const payload = JSON.parse(localStorage.getItem('userData'));

    console.log(payload);
    const rollback = useNavigate();
    const handleSubmit = () => {
        rollback('/');
    }
    return (
      <div className='base-container'>
        {
          payload && (
            <div className="profile-image-container">
              {payload.picture && <img src={payload.picture} className="user-img" alt="User"/>}
            </div>
          )
        }
        <video src={videoTrailer} autoPlay loop muted />
        <h1>Adventure Awaits</h1>
        <p>"{payload.first} {payload.last}"</p>
        <p>What are your waiting for?</p>
        <div className='base-btns'>
          <Button
            className="btn"
            buttonStyle='btn--outline'
            buttonSize='btn--large'>
            GET STARTED
          </Button>
          <Button
            className="btn"
            buttonStyle='btn--primary'
            buttonSize='btn--large'>
            Watch Trailer
          </Button>
        </div>
        <button className="custom-button" onClick={handleSubmit}>Log Out</button>
      </div>
    )
}