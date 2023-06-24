import React from 'react';


const NavBar = () => {
  //   const [activeButton, setActiveButton] = useState(1);

  // const handleClick = (buttonId) => {
  //   setActiveButton(buttonId);
  // };

  // const isButtonActive = (buttonId) => {
  //   return activeButton === buttonId;
  // };
  return (
    <div className='nav-bar'>
      <div>
        {/* <h1>company</h1> */}
        <img src='./CompanyLogo1.png' alt='celebal Logo'/>
      </div>
      {/* <div className='nav-details'>
        <button
          className={`Button ${isButtonActive(1) ? 'active' : ''}`}
          onClick={() => handleClick(1)}
          >Home</button>
        <button
            className={`Button ${isButtonActive(2) ? 'active' : ''}`}
            onClick={() => handleClick(2)}
          >About</button>
        <button
            className={`Button ${isButtonActive(3) ? 'active' : ''}`}
            onClick={() => handleClick(3)}
          >Contact</button>
        <button
            className={`Button ${isButtonActive(4) ? 'active' : ''}`}
            onClick={() => handleClick(4)}
          >Register</button>
        <button
            className={`Button ${isButtonActive(5) ? 'active' : ''}`}
            onClick={() => handleClick(5)}
          >Login</button>
      </div> */}
    </div>
  )
}

export default NavBar
