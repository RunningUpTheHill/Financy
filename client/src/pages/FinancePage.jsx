import React from 'react';
import SpendingBackground from '../SpendingBackground.jsx';
import Expenses from '../Expenses.jsx';
import Financelogo from '../Images/giphy.gif';

import money from '../Images/money.png';
import '../App.css';

export default function App() {
  return (
    <div className="App">
    <header className="App-header">

    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '-75px'}}>  
        <img src={money} alt="Second Image" style={{ width: '100px', height: '100px' }} />
        <div style={{ marginRight: '-40px'}}></div> {/* Adding space */}
        <img src={Financelogo} className="App-logo" alt="logo" style={{ alignItems: 'center', width: '400px', height: '200px', marginRight: '-20px' }} />
    </div>       

     <SpendingBackground/>
     <div style={{ marginBottom: '25px' }}></div> {/* Adding space */}
     <Expenses/>
    
    </header>
  </div>
  )
}

