 
 import { useState } from "react";
import "./Calculator.css" ;

const Calculator = () => {
  const [number1 ,setnumber1] = useState([]);
  const [number2 ,setnumber2] = useState([]);
  const [result ,setresult] = useState([]);

   const handleNumber1 = (e) => {
    setnumber1(Number(e.target.value))
   }

   const handleNumber2 = (e) => {
    setnumber2(Number(e.target.value))
   }
   
   const handleAddition = () => {
     setresult(number1 + number2);
   }

  return (
    <div className="calculator-container">
           <h1>UseState</h1>
           <div className="form-container">
             <div className="form-group">
                <label htmlFor="number1" className="form-label">Number-1</label>
                <input placeholder="Enter a number" onChange={handleNumber1} value={number1} type="number" id="number1" className="form-input"/> 
             </div>   
               
             <div className="form-group">
                <label htmlFor="number2" className="form-label">Number-2</label>
                <input placeholder="Enter a number" onChange={handleNumber2} value={number2} type="number" id="number2" className="form-input"/> 
              </div>

              <button onClick={handleAddition} className="form-button">Add</button>
              
              <div className="form-group">
                <label htmlFor="result" className="form-label">Result</label>
                <input placeholder="result of the operation" type="number" id="result" className="form-input"  value={result} readOnly/> 
              </div>
            </div> 
    </div>
  )
}

export default Calculator
