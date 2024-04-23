import React from 'react';


const ShoppingStyle = {
    alignItems: 'center', // center horizontally
    display: 'inline-block',
    width: '900px',
    height: '525px',
    backgroundColor: '#ffffff',
    borderRadius: '25px',
    paddingLeft: '30px',
    paddingRight: '30px',
    
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
  

export default function Shopping() {
  return (
    <div className="App">
    <header className="App-header">
    <>
      <div style={ShoppingStyle}>
        <h1 style={{textStyle, textAlign: 'center', fontSize: '30px' }}>Shopping</h1>
        <p style={{ ...textStyle, ...paragraphStyle }}>Checking</p>     
        <p style={{ ...textStyle, ...paragraphStyle }}>Savings</p>   
        <p style={{ ...textStyle}}>Credit</p>
      </div>
      </>

    </header>
  </div>
  )
}



