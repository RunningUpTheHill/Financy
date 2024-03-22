import React from 'react';
//import Dinning from './Dinning.png'; // Adjust this path to the actual location of your logo file
//import shopping from './shopping.png'; // Adjust this path to the actual location of your logo file
//import strawberry from './strawberry.png';
//import transport from './transport.png'

// Define the styles object
const backgroundStyle = {
  alignItems: 'center', // center horizontally
  display: 'inline-block',
  width: '900px',
  height: '525px',
  backgroundColor: '#82fff3',
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

function ExpensesBackground() {
  return (
    <div style={backgroundStyle}>
      <h1 style={{textStyle, textAlign: 'center', fontSize: '30px' }}>EXPENSES</h1>
      <p style={{ ...textStyle, ...paragraphStyle }}>Shopping</p>     
      <p style={{ ...textStyle, ...paragraphStyle }}>Groceries</p>   
      <p style={{ ...textStyle, ...paragraphStyle }}>Dinning</p>
      <p style={{ ...textStyle, ...paragraphStyle }}>Bills & Utilities</p>
      <p style={{ ...textStyle, ...paragraphStyle }}>Transportation</p>
      <p style={{ ...textStyle, }}>Everything Else</p>
    </div>
  );
}

export default ExpensesBackground;
