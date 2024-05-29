import React from 'react'
import { useState } from 'react'

const Calculadora = () => {

  // const numberOneRef = React.useRef(null)
  // const numberTwoRef = React.useRef(null)
  // const [suma, setSuma] = React.useState(0);

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [numResultado, setResultado] = useState(0);
  // const [product, setProduct] = useState(0);

  // const handleSuma = () => {
  //   // setSuma(+numberOneRef.current.value + +numberTwoRef.current.value)
  // }

  const handleRestaNum1 = (e) => {
    const { name, value } = e.target;
    setNum1(value);
    // const resta = setNum1(value) - setNum2(num2);
    console.log('num1', num1, 'value', value)
  }

  const handleRestaNum2 = (e) => {
    const { name, value } = e.target;
    setNum2(value);
    // const resta = setNum1(value) - setNum2(num2);
    console.log('num2', num2, 'value', value)
  }

  const handleResultado = (e) => {
    const resta = num1 - num2;
    setResultado(resta);
    console.log('resta', resta)
  }

  // const handleMultiply = () => {
  //   // setProduct(num1 * num2);
  // }

  // const handleDivision = () => {

  // }

  // const handleNum1Change = (event) => {
  //   setNum1(parseInt(event.target.value));
  // };

  // const handleNum2Change = (event) => {
  //   setNum2(parseInt(event.target.value));
  // };

  return (
    <div className='App'>
      <h2>Calculadora</h2>
      <h4> Resta </h4>
      <div className='row mb-5 mt-4'>
        <div className='col-2'>
          <label>Número 1</label>
          <input type="number" className='form-control' placeholder="numero 1" name="numero1" value={num1} onChange={handleRestaNum1} />
        </div>
        <div className='col-2 mt-2'>
          <button className='btn btn-primary'> - </button>
        </div>
        <div className='col-2'>
          <label>Número 2</label>
          <input type="number" className='form-control' placeholder="numero 2" name="numero2" value={num2} onChange={handleRestaNum2} />
        </div>
        <div className='col-2 mt-2'>
          <button className='btn btn-success' onClick={handleResultado}> = </button>
        </div>
        <div className='col-2'>
          <label>Resultado</label>
          <input type="number" className='form-control' placeholder="Resultado" name="res" value={numResultado} />
        </div>
      </div>

      <br />

      {/* <h3> Multiplicar </h3>
      <input type="number" onChange={handleNum1Change} />
      <input type="number" onChange={handleNum2Change} />
      <button onClick={handleMultiply}>Multiply</button>
      <p>Product: {product}</p> */}
    </div>

  )
}

export default Calculadora