import React, { useContext } from 'react'
import { CountContext } from '../../App'

export default function ComponentA() {
    const countContext = useContext(CountContext)
  return (
    <div>ComponentA
    <div><h2>{countContext.countState}</h2> </div>
    <button onClick={()=>countContext.countDispatch('increment')} >Increment</button>
    <button onClick={()=>countContext.countDispatch('decrement')}>decrement</button>
    <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>

    </div>
  )
}