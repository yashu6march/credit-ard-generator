import React, { useState } from "react";
import "./Form.css";

export default function Form(props) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvc, setCVC] = useState('');
  const [error, setError] = useState(false);
  function between(num, min, max) {
    if (num > max) {
      return false;
    }
    if (num < min) {
      return false;
    }
    return true;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(name.length <= 0 || number.length !== 16 || month.length < 1 || year.length < 2 || cvc.length !== 3 || Number.isInteger(cvc) || Number.isInteger(year) || Number.isInteger(month) || !between(parseInt(month, 0, 13)) || parseInt(year) < 23)) {
      let data = [name, number, month, year, cvc];
      props.onSubmit(data);
    }
    else{
      setError(true);
    }
  }
  return (
    <form>
      <div id="name">
        <h2>CARDHOLDER NAME</h2>
        <input className="input1" type="text" placeholder="e.g. Jane Appleseed" onBlur={e => setName(e.target.value)} />
        <br />
        {error && name.length <= 0 ?
          <label>Cardholder name is required</label> : ""}
      </div>
      <div id="cardNumber">
        <h2>CARD NUMBER</h2>
        <input className="input1" type="text" placeholder="e.g. 1234 5678 9000 0000" onBlur={e => setNumber(e.target.value)} />
        <br />
        {error && (number.length !== 16) ?
          <label>Card number must be 16 digit number</label> : ""}
      </div>
      <div id="second">
        <div id="exp">
          <h2>EXP. DATE</h2>
          <input type="text" className="input2" id="month" placeholder="MM" onBlur={e => setMonth(e.target.value)} />
          <input type="text" className="input2" id="year" placeholder="YY" onBlur={e => setYear(e.target.value)} />
          <br />
          {error && (Number.isInteger(year) || Number.isInteger(month) || month.length < 1 || year.length < 2 || !between(parseInt(month, 0, 13)) || parseInt(year) < 23) ?
            <label>Input valid Date</label> : ""}
        </div>
        <div id="cvc">
          <h2>CVC</h2>
          <input type="text" id="input3" placeholder="e.g. 123" onBlur={e => setCVC(e.target.value)} />
          <br />
          {error && (cvc.length !== 3 || Number.isInteger(cvc)) ?
            <label>CVC must be 3 digit number</label> : ""}
        </div>
      </div>
      <button onClick={handleSubmit}>Confirm</button>
    </form>
  );
}
