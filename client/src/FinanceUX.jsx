import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const backgroundAccounts = {
  alignItems: 'center',
  display: 'inline-block',
  width: '900px',
  height: '225px',
  backgroundColor: '#FDFD96',
  borderRadius: '25px',
  paddingLeft: '30px',
  paddingRight: '30px',
}

const backgroundSpending = {
  alignItems: 'center',
  display: 'inline-block',
  width: '900px',
  height: '225px',
  backgroundColor: '#82fff3',
  borderRadius: '25px',
  paddingLeft: '30px',
  paddingRight: '30px',

};

const backgroundExpense = {
  alignItems: 'center',
  display: 'inline-block',
  width: '900px',
  height: '475px',
  backgroundColor: '#ffffff',
  borderRadius: '25px',
  paddingLeft: '30px',
  paddingRight: '30px',

};

const textStyle = {
  color: 'black',
  fontSize: '25px',
  fontFamily: 'madimi one',
  textAlign: 'left',
};

const paragraphStyle = {
  borderBottom: '2px solid black',
  paddingBottom: '8px',
  paddingTop: '2px',
  marginBottom: '4px',
};

const accountNumberStyle = {
  ...textStyle,
  textAlign: 'right',
};

const halfWidth = {
  width: '50%',
  display: 'inline-block',

};

function FinanceUX() {
  const [account_no, setAccountNumber] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchAccountNumber();
    setAccountNumber(account_no);
  }, []);

  const fetchAccountNumber = () => {
    axios.get('http://127.0.0.1:8080/retrieve_account', {
      account_no: account_no
    })
      .then(function (response) {
        console.log(response);
        setAccountNumber(strCheck(response.data.account_no));
      })
      .catch(function (error) {
        console.log(error, 'error');
        if (error.response.status === 401) {
          alert("ENOENT");
        }
      })
  }

  const strCheck = (str) => {
    if (str.includes("'")) {
      return str.replace("'", '');
    }
    return str;
  }

  return (
    <>
      <div style={backgroundAccounts}>
        <h1 style={{ textStyle, textAlign: 'center', fontSize: '30px' }}>ACCOUNT</h1>

        <div style={{ ...paragraphStyle, display: 'flex', justifyContent: 'space-evenly' }}>
          <div style={{ ...textStyle, ...halfWidth, textAlign: 'left' }}>Checking</div>
          <div style={{ ...textStyle, ...halfWidth, textAlign: 'right' }}>{account_no}</div>
        </div>
        <div style={{ marginBottom: '15px' }}></div> {/* Adding space */}

        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <div style={{ ...textStyle, ...halfWidth, textAlign: 'left' }}>Savings</div>
          <div style={{ ...textStyle, ...halfWidth, textAlign: 'right' }}>######</div>
        </div>

      </div>

      <div style={{ marginBottom: '25px' }}></div> {/* Adding space */}

      <div style={backgroundSpending}>
        <h1 style={{ textStyle, textAlign: 'center', fontSize: '30px' }}>ACCOUNT BALANCE</h1>
        <div style={{ ...paragraphStyle, display: 'flex', justifyContent: 'space-evenly' }}>
          <div style={{ ...textStyle, ...halfWidth, textAlign: 'left' }}>Account Balance</div>
          <div style={{ ...textStyle, ...halfWidth, textAlign: 'right' }}>$0.00</div>
        </div>
        <div style={{ marginBottom: '15px' }}></div> {/* Adding space */}

        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <div style={{ ...textStyle, paragraphStyle, ...halfWidth, textAlign: 'left' }}>Earned Income</div>
          <input type="text" placeholder="Enter Amount" style={{ ...textStyle, ...halfWidth, textAlign: 'center', border: 'none', backgroundColor: 'white' , borderRadius: '30px', width: '250px', '::placeholder': { color: 'black' }}} />
          <div style={{ ...textStyle, ...halfWidth, textAlign: 'right' }}>$0.00</div>
        </div>
      </div>

      <div style={{ marginBottom: '25px' }}></div> {/* Adding space */}



      <div style={backgroundExpense}>
        <h1 style={{ textStyle, textAlign: 'center', fontSize: '30px' }}>EXPENSES</h1>

        <div style={{ ...paragraphStyle, display: 'flex', justifyContent: 'space-evenly' }}>
          <div style={{ ...textStyle, ...halfWidth, textAlign: 'left' }}><Link to="/Categories/Shopping">Shopping</Link></div>
          <input type="text" placeholder="Enter Amount" style={{ ...textStyle, ...halfWidth, textAlign: 'center', border: 'none', backgroundColor: '#CC99FF' , borderRadius: '30px', width: '250px', '::placeholder': { color: 'black' }}} />

          <div style={{ ...textStyle, ...halfWidth, textAlign: 'right' }}>$0.00</div>
        </div>

        <div style={{ marginBottom: '15px' }}></div> {/* Adding space */}

        <div style={{ ...paragraphStyle, display: 'flex', justifyContent: 'space-evenly' }}>
          <div style={{ ...textStyle, paragraphStyle, ...halfWidth, textAlign: 'left' }}><Link to="/Categories/Groceries">Groceries</Link></div>
          <input type="text" placeholder="Enter Amount" style={{ ...textStyle, ...halfWidth, textAlign: 'center', border: 'none', backgroundColor: '#A9D1F7' , borderRadius: '30px', width: '250px', '::placeholder': { color: 'black' }}} />
          <div style={{ ...textStyle, ...halfWidth, textAlign: 'right' }}>$0.00</div>
        </div>

        <div style={{ marginBottom: '15px' }}></div> {/* Adding space */}

        <div style={{ ...paragraphStyle, display: 'flex', justifyContent: 'space-evenly' }}>
          <div style={{ ...textStyle, paragraphStyle, ...halfWidth, textAlign: 'left' }}><Link to="/Categories/Dining">Dining</Link></div>
          <input type="text" placeholder="Enter Amount" style={{ ...textStyle, ...halfWidth, textAlign: 'center', border: 'none', backgroundColor: '#B4F0A7' , borderRadius: '30px', width: '250px', '::placeholder': { color: 'black' }}} />
          <div style={{ ...textStyle, ...halfWidth, textAlign: 'right' }}>$0.00</div>
        </div>

        <div style={{ marginBottom: '15px' }}></div> {/* Adding space */}

        <div style={{ ...paragraphStyle, display: 'flex', justifyContent: 'space-evenly' }}>
          <div style={{ ...textStyle, paragraphStyle, ...halfWidth, textAlign: 'left' }}><Link to="/Categories/Utilities">Bills & Utilities</Link></div>
          <input type="text" placeholder="Enter Amount" style={{ ...textStyle, ...halfWidth, textAlign: 'center', border: 'none', backgroundColor: '#FFFFBF' , borderRadius: '30px', width: '250px', '::placeholder': { color: 'black' }}} />

          <div style={{ ...textStyle, ...halfWidth, textAlign: 'right' }}>$0.00</div>
        </div>

        <div style={{ marginBottom: '15px' }}></div> {/* Adding space */}

        <div style={{ ...paragraphStyle, display: 'flex', justifyContent: 'space-evenly' }}>
          <div style={{ ...textStyle, paragraphStyle, ...halfWidth, textAlign: 'left' }}><Link to="/Categories/Transportation">Transportation</Link></div>
          <input type="text" placeholder="Enter Amount" style={{ ...textStyle, ...halfWidth, textAlign: 'center', border: 'none', backgroundColor: '#FFDFBE' , borderRadius: '30px', width: '250px', '::placeholder': { color: 'black' }}} />
          <div style={{ ...textStyle, ...halfWidth, textAlign: 'right' }}>$0.00</div>
        </div>

        <div style={{ marginBottom: '15px' }}></div> {/* Adding space */}

        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <div style={{ ...textStyle, paragraphStyle, ...halfWidth, textAlign: 'left' }}><Link to="/Categories/EverythingElse">Everything Else</Link></div>
          <input type="text" placeholder="Enter Amount" style={{ ...textStyle, ...halfWidth, textAlign: 'center', border: 'none', backgroundColor: '#FFB1B0' , borderRadius: '30px', width: '250px', '::placeholder': { color: 'black' }}} />
          <div style={{ ...textStyle, ...halfWidth, textAlign: 'right' }}>$0.00</div>
        </div>
      </div>
    </>
  );
}


export default FinanceUX;
