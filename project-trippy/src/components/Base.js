import React from 'react';
import '../App.css';
import { Button } from './Button';
import'./Base.css';

function Base() {
  return (
    <div className='base-container'>
      
      <video src="C:\Users\Saurabh Shirke\Videos\Captures\video-2.mp4" autoPlay loop muted/>
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
            Watch Trailer <i className='far fa-play-circle'/>
        </Button>
      </div>
    </div>
  )
}

export default Base
