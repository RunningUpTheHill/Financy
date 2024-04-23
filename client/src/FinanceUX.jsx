import React from 'react';
//import Dinning from './Dinning.png'; // Adjust this path to the actual location of your logo file
//import shopping from './shopping.png'; // Adjust this path to the actual location of your logo file
//import strawberry from './strawberry.png';
//import transport from './transport.png'

// Define the styles object

const backgroundAccounts = {
  alignItems: 'center', // center horizontally
  display: 'inline-block',
  width: '900px',
  height: '300px',
  backgroundColor: '#FDFD96',
  borderRadius: '25px',
  paddingLeft: '30px',
  paddingRight: '30px',
}

const backgroundSpending = {
  alignItems: 'center', // center horizontally
  display: 'inline-block',
  width: '900px',
  height: '375px',
  backgroundColor: '#82fff3',
  borderRadius: '25px',
  paddingLeft: '30px',
  paddingRight: '30px',

};

const backgroundExpense = {
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

function FinanceUX() {
  return (
    <>
      <div style={backgroundAccounts}>
        <h1 style={{ textStyle, textAlign: 'center', fontSize: '30px' }}>ACCOUNTS</h1>
        <p style={{ ...textStyle, ...paragraphStyle }}>Checking</p>
        <p style={{ ...textStyle, ...paragraphStyle }}>Savings</p>
      </div>

      <div style={{ marginBottom: '25px' }}></div> {/* Adding space */}

      <div style={backgroundSpending}>
        <h1 style={{ textStyle, textAlign: 'center', fontSize: '30px' }}>ACCOUNT BALANCE</h1>
        <p style={{ ...textStyle, ...paragraphStyle, }}>Earned Income</p>
        <p style={{ ...textStyle, }}>Remaining Balance</p>
      </div>

      <div style={{ marginBottom: '25px' }}></div> {/* Adding space */}

      <div style={backgroundExpense}>
        <h1 style={{ textStyle, textAlign: 'center', fontSize: '30px' }}>EXPENSES</h1>
        <p style={{ ...textStyle, ...paragraphStyle }}>Shopping</p>
        <p style={{ ...textStyle, ...paragraphStyle }}>Groceries</p>
        <p style={{ ...textStyle, ...paragraphStyle }}>Dining</p>
        <p style={{ ...textStyle, ...paragraphStyle }}>Bills & Utilities</p>
        <p style={{ ...textStyle, ...paragraphStyle }}>Transportation</p>
        <p style={{ ...textStyle, }}>Everything Else</p>
      </div>
    </>
  );
}

export default FinanceUX;
