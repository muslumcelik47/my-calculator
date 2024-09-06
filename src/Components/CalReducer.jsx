 
import {reducer , initialState} from  "../reducers/reducerCal" ;
import { useReducer } from "react";
import "./Calculator.css" ;





 const CalReducer = () => {


    const [state , dispatch] =useReducer(reducer , initialState)
    const handNumber1 = (e) =>{
        dispatch({type : "SET_NUMBER1" , payload : Number(e.target.value) } )
    }

    const handNumber2 = (e) =>{
      dispatch({type : "SET_NUMBER2" , payload : Number(e.target.value) } )
  }

  const butResult = () =>{
    dispatch({type : "SET_RESULT" , payload : state.number1 + state.number2} )
}

const buttResult = () =>{
  dispatch({type : "SET_RESULT" , payload : state.number1 - state.number2} )
}

const butttResult = () =>{
  dispatch({type : "SET_RESULT" , payload : state.number1 * state.number2} )
}


const buttttResult = () =>{
  dispatch({type : "SET_RESULT" , payload : state.number1 / state.number2} )
}


console.log(state);
  

  return (
      <div className="calculator-container">
             <h1>UseReducer</h1>
             <div className="form-container">
               <div className="form-group">
                  <label htmlFor="number1" className="form-label">Number-1</label>
                  <input type="number" id="number1" placeholder="0" className="form-input" onChange={handNumber1} value={state.number1}/> 
               </div>   
                 
               <div className="form-group">
                  <label htmlFor="number2" className="form-label">Number-2</label>
                  <input type="number" placeholder="0" id="number2" className="form-input" onChange={handNumber2} value={state.number2} /> 
                </div>
                <div className="buttoun-group">
                    <button className="form-button" onClick={butResult}>Add</button>
                    <button className="form-button" onClick={buttResult}>Subtract</button>
                    <button className="form-button" onClick={butttResult}>Multiple</button>
                    <button className="form-button" onClick={buttttResult}>divide</button>
                </div>
                <div className="form-group">
                  <label htmlFor="result" className="form-label">Result</label>
                  <input  placeholder="0" type="number" id="result" className="form-input" value={state.result} readOnly /> 
                </div>
              </div> 
      </div>
    )
   
 }
 
 
 export default CalReducer ;
 