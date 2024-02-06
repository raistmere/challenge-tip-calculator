import './App.css'
import { useEffect, useRef, useState } from 'react';
import appLogo from "./assets/images/logo.svg";
import dollarIcon from "./assets/images/icon-dollar.svg";
import personIcon from "./assets/images/icon-person.svg";

function App() {
  const [billAmount, setBillAmount] = useState<string>("0");
  const [percentageAmount, setPercentageAmount] = useState<string>("0");
  const [peopleAmount, setPeopleAmount] = useState<string>("0");

  useEffect(() => {

  }, [billAmount, peopleAmount])

  const calculateTipAmount = (): string => {
    if(billAmount === "") return "$0.00";
    if(peopleAmount === "0" || peopleAmount === "") return "$0.00";
    let amount = (parseInt(billAmount) / parseInt(peopleAmount)) * (parseInt(percentageAmount) / 100);
    return `$${amount}`;
  }

  const calculateTotalAmount = (): string => {
    if(billAmount === "") return "$00.00";
    if(peopleAmount === "0" || peopleAmount === "") return "$00.00";
    let tipAmount = (parseInt(billAmount) / parseInt(peopleAmount)) * (parseInt(percentageAmount) / 100);
    let totalAmount = parseInt(billAmount) / parseInt(peopleAmount) + tipAmount;
    return `$${totalAmount}`;
  }

  return (
    <div id="wrapper">
      <div className="logoBox">
        <img className='logo' src={appLogo} alt="App Logo" /> 
      </div>
      <div className="calculatorBox">
        <div className="inputBox">
          <div className="billBox">
            <label htmlFor="billInput">Bill</label>
            <input type="number" id='billInput' name='billInput' onChange={(e) => { setBillAmount(e.target.value) }} />
            <img src={dollarIcon} alt="A dollar icon" />
          </div>
          <div className="tipBox">
            <h2>Select Tip %</h2>
            <div className="percentBox">
              <button className={percentageAmount === "5" ? "percentButton selected" : "percentButton"} onClick={() => setPercentageAmount("5")}>5%</button>
              <button className={percentageAmount === "10" ? "percentButton selected" : "percentButton"} onClick={() => setPercentageAmount("10")}>10%</button>
              <button className={percentageAmount === "15" ? "percentButton selected" : "percentButton"} onClick={() => setPercentageAmount("15")}>15%</button>
              <button className={percentageAmount === "25" ? "percentButton selected" : "percentButton"} onClick={() => setPercentageAmount("25")}>25%</button>
              <button className={percentageAmount === "50" ? "percentButton selected" : "percentButton"} onClick={() => setPercentageAmount("50")}>50%</button>
              <button className="percentButton custom">Custom</button>
            </div>
          </div>
          <div className="peopleBox">
            <label htmlFor="peopleInput">Number of People</label>
            <input type="number" id='peopleInput' name='peopleInput' defaultValue={peopleAmount} onChange={(e) => {setPeopleAmount(e.target.value)}} />
            <img src={personIcon} alt="A person icon" />
          </div>
        </div>
        <div className="outputBox">
          <div className="tipAmountBox">
            <div className="tipTitle">
              <p className='mainText'>Tip Amount</p>
              <p className='subText'>/ person</p>
            </div>
            <p className='amountText'>{calculateTipAmount()}</p>
          </div>
          <div className="totalBox">
            <div className="totalTitle">
              <p className='mainText'>Total</p>
              <p className='subText'>/ person</p>
            </div>
            <p className='amountText'>{calculateTotalAmount()}</p>
          </div>
          <button className="resetButton">RESET</button>
        </div>
      </div>
  </div>
  )
}

export default App
