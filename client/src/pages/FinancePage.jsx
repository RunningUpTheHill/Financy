import React from 'react';
import FinanceUX from '../FinanceUX.jsx';
import Financelogo from '../Images/giphy.gif';

import money from '../Images/money.png';
import '../App.css';

export default function App() {
  return (
    <div className="App">
    <header className="App-header">

    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',}}>  
        <img src={Financelogo} className="App-logo" alt="logo" style={{ alignItems: 'center', width: '400px', height: '200px'}} />
    </div>       
     <FinanceUX/>
    </header>
  </div>
  )
}

