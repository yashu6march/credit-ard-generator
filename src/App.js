import React, { useState } from 'react'
import Card from './Component/Card'
import Form from './Component/Form'
import Snack from './Component/Snack'

import './App.css'
export default function App() {
  let [prompt, setPrompt] = useState(false);
  const [values, setValues] = useState(['Jane Appleseed', '0000 0000 0000 0000', '00', '00', '000']);
  function handleFill(data) {
    setValues(data);
    showPrompt();
  }
  function showPrompt(){
    setPrompt(true);
  }
  return (
    <>
      <div id='screen'></div>
      <div>
        <Form onSubmit={handleFill} />
        <Card cardHolder={values[0]} cardNumber={values[1]} expMonth={values[2]} expYear={values[3]} cvc={values[4]} />
        <Snack show={prompt}/>
      </div>
    </>
  )
}