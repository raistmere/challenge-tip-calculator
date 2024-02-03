import './App.css'
import appLogo from "./assets/images/logo.svg";
import dollarIcon from "./assets/images/icon-dollar.svg";
import personIcon from "./assets/images/icon-person.svg";

function App() {

  return (
    <div id="wrapper">
      <div className="logoBox">
        <img className='logo' src={appLogo} alt="App Logo" /> 
      </div>
      <div className="calculatorBox">
        <div className="inputBox">
          <div className="billBox">
            <label htmlFor="billInput">Bill</label>
            <input type="number" id='billInput' name='billInput' />
            <img src={dollarIcon} alt="A dollar icon" />
          </div>
          <div className="tipBox">
            <h2>Select Tip %</h2>
            <div className="percentBox">
              <button className="percentButton">5%</button>
              <button className="percentButton">10%</button>
              <button className="percentButton">15%</button>
              <button className="percentButton">25%</button>
              <button className="percentButton">50%</button>
              <button className="percentButton">Custom</button>
            </div>
          </div>
          <div className="peopleBox">
            <label htmlFor="peopleInput">Number of People</label>
            <input type="number" id='peopleInput' name='peopleInput' />
            <img src={personIcon} alt="A person icon" />
          </div>
        </div>
        <div className="outputBox">
          <div className="amountBox">
            <div className="tipTitle">
              <p className='mainText'>Tip Amount</p>
              <p className='subText'>/ person</p>
            </div>
            <p className='amountText'>$4.27</p>
          </div>
          <div className="totalBox">
            <div className="totalTitle">
              <p className='mainText'>Total</p>
              <p className='subText'>/ person</p>
            </div>
            <p className='amountText'>$32.79</p>
          </div>
          <button className="resetButton">RESET</button>
        </div>
      </div>
      {/* Bill

        Select Tip %
        5%
        10%
        15%
        25%
        50%
        Custom

        Number of People

        Tip Amount
        / person

        Total
        / person

        Reset */}

  </div>
  )
}

export default App
