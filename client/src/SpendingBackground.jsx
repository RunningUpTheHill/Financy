import React from 'react';

// Define the styles object
const backgroundStyle = {
  alignItems: 'center', // center horizontally
  display: 'inline-block',
  width: '900px',
  height: '350px',
  backgroundColor: '#FDFD96',
  borderRadius: '25px',
  paddingLeft: '30px',
  paddingRight: '30px',
  
};

const textStyle = {
  color: 'black',
  fontSize: '25px',
  fontFamily: 'Choco', // Corrected the font name to 'Arial'
  textAlign: 'left',
};

const paragraphStyle = {
  borderBottom: '2px solid black', // Adds a border to the bottom of each paragraph
  paddingBottom: '4px', // Optional: Adds some space between the text and the border
  marginBottom: '10px', // Optional: Adds some space after the border (between paragraphs)
};

function SpendingBackground() {
  return (
    <div style={backgroundStyle}>
      <h1 style={{textStyle, textAlign: 'center', fontSize: '30px' }}>SPENDING</h1>
      <p style={{ ...textStyle,...paragraphStyle, }}>Earned</p>
      <p style={{ ...textStyle, ...paragraphStyle }}>Bills Paid</p>
      <p style={{ ...textStyle, ...paragraphStyle }}>Current Spend</p>
      <p style={{ ...textStyle, }}>Left For Spending</p>
    </div>
  );
}

export default SpendingBackground;
