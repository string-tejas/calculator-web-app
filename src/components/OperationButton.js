import React, { useContext } from 'react'
import { StateContext } from '../App'

const OperationButton = ({ operation, className, children }) => {
   const { ACTIONS, dispatch } = useContext(StateContext)

   const handleClick = () => {
      dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
   }

   return (
      <button onClick={handleClick} className={`op ${className}`}>
         {children ? children : operation}
      </button>
   )
}

export default OperationButton
