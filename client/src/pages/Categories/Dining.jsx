import React from 'react';


const ShoppingStyle = {
    alignItems: 'center', // center horizontally
    display: 'inline-block',
    width: '900px',
    height: '525px',
    backgroundColor: '#FDFD96',
    borderRadius: '25px',
    paddingLeft: '30px',
    paddingRight: '30px',
    
  };
  
  const halfWidth = {
    width: '50%', // Set width to 50% for each half
    display: 'inline-block', // Make it inline-block to sit side by side
    textAlign: 'center', // Center the text horizontally

  };
  
  const textStyle = {
    color: 'black',
    fontSize: '25px',
    fontFamily: 'madimi one', // Corrected the font name to 'Arial'
    textAlign: 'left',
  };
  
  const paragraphStyle = {
      borderBottom: '2px solid black', // Adds a border to the bottom of each paragraph
      paddingBottom: '8px',
      paddingTop: '2px',
      marginBottom: '4px', // Adds
  };
  

export default function Dining() {
  return (
    <div className="App">
    <header className="App-header">
    <>
      <div style={ShoppingStyle}>
        <h1 style={{textStyle, textAlign: 'center', fontSize: '30px' }}>Dining</h1>
      
        <div style={{ ...paragraphStyle, display: 'flex', justifyContent: 'space-evenly' }}>
              <div style={{ ...textStyle, ...halfWidth }}>Total</div>
              <div style={{ ...textStyle, ...halfWidth }}>Date</div>

            </div>
      </div>
      </>

    </header>
  </div>
  )
}



