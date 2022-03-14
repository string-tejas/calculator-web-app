import React, { useContext } from 'react'
import { StateContext } from '../App'

const DigitButton = ({ digit }) => {
   const { ACTIONS, dispatch } = useContext(StateContext)
   const handleClick = () =>
      dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })

   return <button onClick={handleClick}>{digit}</button>
}

export default DigitButton
