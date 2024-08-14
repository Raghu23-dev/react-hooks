import React, { useReducer } from 'react'

const initialState = {
    firstCounter:0,
    secondCounter:10
}
const reducer = (state,action) => {

    switch(action.type){
        case 'increment': return {...state,firstCounter : state.firstCounter+action.value}
        case 'decrement' : return {...state,firstCounter : state.firstCounter-action.value}
       
        case 'increment2': return {...state,secondCounter : state.secondCounter+action.value}
        case 'decrement2' : return {...state,secondCounter : state.secondCounter-action.value}
        
        case 'reset1':   return initialState 
        case 'reset2': return initialState
        default: return state

    }
}

export default function CounterTwo() {

    const [count,dispatch] = useReducer(reducer,initialState)

  return (
    <div>
    <div><h2>{count.firstCounter}</h2> </div>
    <div><h2>{count.secondCounter}</h2> </div>

    <button onClick={()=>{dispatch({type:'increment',value:1})}} >Increment 1</button>
    <button onClick={()=>{dispatch({type:'decrement',value:1})}}>Decrement 1</button>
    <button onClick={()=>{dispatch({type:'increment',value:5})}} >Increment 1 by 5</button>
    <button onClick={()=>{dispatch({type:'decrement',value:5})}}>Decrement 1 by 5</button>
    
    <button onClick={()=>{dispatch({type:'reset1'})}}>Reset 1</button>

    <button onClick={()=>{dispatch({type:'increment2',value:1})}} >Increment 2</button>
    <button onClick={()=>{dispatch({type:'decrement2',value:1})}}>Decrement 2</button>
    <button onClick={()=>{dispatch({type:'increment2',value:5})}} >Increment 2 by  5 </button>
    <button onClick={()=>{dispatch({type:'decrement2',value:5})}}>Decrement 2 by 5</button>
    
    <button onClick={()=>{dispatch({type:'reset2'})}}>Reset 2</button>
    
    </div>
  )
}