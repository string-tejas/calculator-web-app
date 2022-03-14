import React, { useContext } from 'react'
import { StateContext } from '../App'

const Screen = () => {
   const { state } = useContext(StateContext)
   const { currentOperand, previousOperand, operation } = state
   return (
      <>
         <div className='screen span-all'>
            <div className='previous-result'>
               {previousOperand} {operation}
            </div>
            <div className='current-result'>{currentOperand}</div>
         </div>
      </>
   )
}

export default Screen
