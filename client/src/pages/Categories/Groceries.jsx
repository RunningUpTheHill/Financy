import React, { useState, useEffect } from 'react';



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
  const [groceryData, setGroceryData] = useState([]);

  useEffect(() => {
    fetchGroceryData();
  }, []);

  const fetchGroceryData = async () => {
    try {
      const response = await fetch('/retrieve_transactions', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      setGroceryData(data);
    } catch (error) {
      console.error('Error fetching grocery data:', error);
    }
  };

  return (
    <div className="App">
    <header className="App-header">
    <>
      <div style={GroceryStyle}>
        <h1 style={{textStyle, textAlign: 'center', fontSize: '30px' }}>Groceries</h1>
      
        <div style={{ ...paragraphStyle, display: 'flex', justifyContent: 'space-evenly' }}>
              <div style={{ ...textStyle, ...halfWidth }}>Total</div>
              <div style={{ ...textStyle, ...halfWidth }}>Date</div>
        </div>

              {/* Render grocery items dynamically */}
            {groceryData.map((item, index) => (
              <div key={index} style={{ ...paragraphStyle, display: 'flex', justifyContent: 'space-evenly' }}>
                <div style={{ ...textStyle, ...halfWidth }}>{item.total}</div>
                <div style={{ ...textStyle, ...halfWidth }}>{item.date}</div>
              </div>
            ))}
      </div>
      </>

    </header>
  </div>
  )
}



