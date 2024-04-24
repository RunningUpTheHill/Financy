import React from 'react';
import { Link } from 'react-router-dom';
//import Dinning from './Dinning.png'; // Adjust this path to the actual location of your logo file
//import shopping from './shopping.png'; // Adjust this path to the actual location of your logo file
//import strawberry from './strawberry.png';
//import transport from './transport.png'

// Define the styles object

const backgroundAccounts = {
  alignItems: 'center', // center horizontally
  display: 'inline-block',
  width: '900px',
  height: '225px',
  backgroundColor: '#FDFD96',
  borderRadius: '25px',
  paddingLeft: '30px',
  paddingRight: '30px',
}

const backgroundSpending = {
  alignItems: 'center', // center horizontally
  display: 'inline-block',
  width: '900px',
  height: '225px',
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

const accountNumberStyle = {
  ...textStyle,
  textAlign: 'right', // Aligns account numbers to the right
};

const halfWidth = {
  width: '50%', // Set width to 50% for each half
  display: 'inline-block', // Make it inline-block to sit side by side

};

function FinanceUX() {
  return (
    <>
      <div style={backgroundAccounts}>
            <h1 style={{textStyle, textAlign: 'center', fontSize: '30px' }}>Account</h1>

            <div style={{ ...paragraphStyle, display: 'flex', justifyContent: 'space-evenly' }}>
                  <div style={{ ...textStyle, ...halfWidth,textAlign: 'left' }}>Checking</div>
                  <div style={{ ...textStyle, ...halfWidth,textAlign: 'right' }}>######</div>
            </div>
            <div style={{ marginBottom: '10px' }}></div> {/* Adding space */}

            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                  <div style={{ ...textStyle, paragraphStyle,...halfWidth, textAlign: 'left' }}>Savings</div>
                  <div style={{ ...textStyle, ...halfWidth, textAlign: 'right' }}>######</div>
            </div>

      </div>

      <div style={{ marginBottom: '25px' }}></div> {/* Adding space */}

      <div style={backgroundSpending}>
        <h1 style={{ textStyle, textAlign: 'center', fontSize: '30px' }}>ACCOUNT BALANCE</h1>
        <p style={{ ...textStyle, ...paragraphStyle, }}>Earned Income</p>
        <p style={{ ...textStyle, }}>Account Balance</p>
      </div>

      <div style={{ marginBottom: '25px' }}></div> {/* Adding space */}

      

    <div style={backgroundExpense}>
      <h1 style={{textStyle, textAlign: 'center', fontSize: '30px' }}>EXPENSES</h1>
      <p style={{ ...textStyle, ...paragraphStyle }}><Link to="/Categories/Shopping">Shopping</Link></p>     
      <p style={{ ...textStyle, ...paragraphStyle }}><Link to="/Categories/Groceries">Groceries</Link></p>   
      <p style={{ ...textStyle, ...paragraphStyle }}><Link to="/Categories/Dinning">Dining</Link></p>
      <p style={{ ...textStyle, ...paragraphStyle }}><Link to="/Categories/Utilities">Bills & Utilities</Link></p>
      <p style={{ ...textStyle, ...paragraphStyle }}><Link to="/Categories/Transportation">Transportation</Link></p>
      <p style={{ ...textStyle, }}><Link to="/Categories/EverythingElse">Everything Else</Link></p>
    </div>
    </>
  );
}


export default FinanceUX;
