import React, {useState, useEffect} from 'react';

function ProgressBar() {
    const [progress, setProgress] = useState(0);

    useEffect(()=>{
        const progressBar = () =>{
            if(progress < 100){
                setProgress((prevProgress)=>prevProgress + 1);      // called previous state of the progress and increment it till 0 to 99
            }
        };
        //Given timer of 1 Sec as 1000 below
        const interval = setInterval(progressBar, 1000);

        return()=>{
            clearInterval(interval);        //clearing interval each time successed
        };
    },[progress])               // given progress as the initial val

    const progressBarStyle = {              //Given style to Bar 
        width: `${progress}%`,
        height:'20px',
        backgroundColor: 'green',
        transition: 'width 0.5s'
    }
    
  return (
    <div>
      <div style={progressBarStyle}></div>
    </div>
  )
}

export default ProgressBar
