import React from 'react';



const GroceryStyle = {
    alignItems: 'center', // center horizontally
    display: 'inline-block',
    width: '900px',
    height: '525px',
    backgroundColor: '#82fff3',
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
  

export default function Groceries() {
  return (
    <div className="App">
    <header className="App-header">
    <>
      <div style={GroceryStyle}>
        <h1 style={{textStyle, textAlign: 'center', fontSize: '30px' }}>Groceries</h1>
      
        <div style={{ ...paragraphStyle, display: 'flex', justifyContent: 'space-evenly' }}>
              <div style={{ ...textStyle, ...halfWidth }}>Location</div>
              <div style={{ ...textStyle, ...halfWidth }}>Total</div>
              <div style={{ ...textStyle, ...halfWidth }}>Date</div>
            </div>

            <div style={{ ...paragraphStyle, display: 'flex', justifyContent: 'space-evenly' }}>
              <div style={{ ...textStyle, ...halfWidth }}>Walmart</div>
              <div style={{ ...textStyle, ...halfWidth }}>0.00</div>
              <div style={{ ...textStyle, ...halfWidth }}>4/24/2024</div>
            </div>
      </div>
      </>

    </header>
  </div>
  )
}



