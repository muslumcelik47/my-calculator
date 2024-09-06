

function reducer(state , action) {
    switch(action.type){

              case "SET_NUMBER1" :       
              return {...state, number1 : action.payload};
              case "SET_NUMBER2" :
              return {...state, number2 : action.payload};
              case "SET_RESULT":
              return{...state, result:action.payload}
              default : 
              throw new Error("invalid action type")

        }
  };

 const initialState = {
    number1:  "" ,
    number2: "",
    result:""
 }

 export {reducer,initialState}  ;