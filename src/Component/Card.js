import React from "react";
import "./Card.css";
import PropTypes from 'prop-types'
function Card({ cardHolder, cardNumber, expMonth, expYear, cvc }) {
  return (
    <>
      <div id="parent">
        {/* front of CARD */}
        <div id="front" className="cards">
          <div id="logos">
            <div id="d1"></div>
            <div id="d2"></div>
          </div>
          <div id="details">
            <h1>{cardNumber}</h1>
            <div id="data">
              <h3>{cardHolder.toUpperCase()}</h3>
              <h3> {expMonth} / {expYear}</h3>
            </div>
          </div>
        </div>
        {/* back of CARD */}
        <div id="rear" className="cards">
          <div id="label"></div>
          <div id="cvc-block">
            <h3>{cvc}</h3>
          </div>
          <div id="third">
            <h3>------- ------ ----------------- ---------- ---------- ----------- -------- -------- -- -----</h3>
          </div>
        </div>
      </div>
    </>
  );
}
Card.propTypes = {
  cardHolder: PropTypes.string,
  cardNumber: PropTypes.string,
  expMonth: PropTypes.string,
  expYear: PropTypes.string,
  cvc: PropTypes.string,
};
Card.defalutProps = {
  cardHolder: 'Jane Appleseed',
  cardNumber: '0000 0000 0000 0000',
  expMonth: '00',
  expYear: '00',
  cvc: '000'
};
export default Card;
