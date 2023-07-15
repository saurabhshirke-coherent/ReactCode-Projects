import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Components/Button";
import './HomePage.css';

export const HomePage = () => {
    const rollback = useNavigate();

    const handleSubmit = () => {
        rollback('/');
    }
    return (
      <div className='base-container'>
        <video src="C:\Users\Saurabh Shirke\Videos\Captures\video-2.mp4" autoPlay loop muted />
        <h1>Adventure Awaits</h1>
        <p>What are your waiting for?</p>
        <div className='base-btns'>
          <Button
            className="btns"
            buttonStyle='btn--outline'
            buttonSize='btn--large'>
            GET STARTED
          </Button>
          <Button
            className="btns"
            buttonStyle='btn--primary'
            buttonSize='btn--large'>
            Watch Trailer
          </Button>
        </div>
        <button className="custom-button" onClick={handleSubmit}>Log Out</button>
      </div>
    )
}