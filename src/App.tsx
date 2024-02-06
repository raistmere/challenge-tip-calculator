import './App.css'
import { useState } from 'react';
import appLogo from "./assets/images/logo.svg";
import dollarIcon from "./assets/images/icon-dollar.svg";
import personIcon from "./assets/images/icon-person.svg";

function App() {
  const [billAmount, setBillAmount] = useState<string>("0");
  const [percentageAmount, setPercentageAmount] = useState<string>("0");
  const [peopleAmount, setPeopleAmount] = useState<string>("0");
  const [customAmount, setCustomAmount] = useState<boolean>(false);

  const changePercentage = (value: string, isCustom: boolean) => {
    console.log(value);
    setCustomAmount(isCustom);
    setPercentageAmount(value);
  }

  const calculateTipAmount = (): string => {
    if(billAmount === "") return "$0.00";
    if(peopleAmount === "0" || peopleAmount === "") return "$0.00";
    let amount = Math.round(((parseInt(billAmount) / parseInt(peopleAmount)) * (parseInt(percentageAmount) / 100)) * 100) / 100;
    return `$${amount}`;
  }

  const calculateTotalAmount = (): string => {
    if(billAmount === "") return "$00.00";
    if(peopleAmount === "0" || peopleAmount === "") return "$00.00";
    let tipAmount = (parseInt(billAmount) / parseInt(peopleAmount)) * (parseInt(percentageAmount) / 100);
    let totalAmount = Math.round((parseInt(billAmount) / parseInt(peopleAmount) + tipAmount) * 100) / 100;
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
              {/* Because there is a limit of percentage buttons, I decided to not make a custom component and instead just create static html for each button */}
              <button className={percentageAmount === "5" && !customAmount ? "percentButton selected" : "percentButton"} onClick={() => changePercentage("5", false)}>5%</button>
              <button className={percentageAmount === "10" && !customAmount ? "percentButton selected" : "percentButton"} onClick={() => changePercentage("10", false)}>10%</button>
              <button className={percentageAmount === "15" && !customAmount ? "percentButton selected" : "percentButton"} onClick={() => changePercentage("15", false)}>15%</button>
              <button className={percentageAmount === "25" && !customAmount ? "percentButton selected" : "percentButton"} onClick={() => changePercentage("25", false)}>25%</button>
              <button className={percentageAmount === "50" && !customAmount ? "percentButton selected" : "percentButton"} onClick={() => changePercentage("50", false)}>50%</button>
              {/* For the custom input, I went with a button that will activate an input field upon next render. The user will autofocus on that and be able to type in
              what they need for percentage. After that it will remain selected until a percentageButton is selected. */}
              {customAmount ? 
                <input type="number" id='customInput' name='customInput' autoFocus defaultValue={percentageAmount} onChange={(e) => changePercentage(e.target.value, true)} />
                : 
                <button className="percentButton custom" onClick={() => changePercentage("0", true)}>Custom</button>
              }
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
