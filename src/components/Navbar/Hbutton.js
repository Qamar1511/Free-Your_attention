import React, { useState } from 'react';

const Hbutton=()=> {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleClick = () => {
    setIsButtonClicked(true); 
    window.location.href = './activities';
  };

  return (
    <div>
      {!isButtonClicked && (
        <button className='btn' onClick={handleClick}>Learn more</button>
      )}
      {isButtonClicked && <p>Redirecting to...</p>}
    </div>
  );
}

export default Hbutton;