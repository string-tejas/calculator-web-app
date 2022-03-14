import React, { useContext } from 'react'
import { FiDelete } from 'react-icons/fi'
import { StateContext } from '../App'
import DigitButton from './DigitButton'
import OperationButton from './OperationButton'
// import buttons from './buttons'
import Screen from './Screen'

const Calculator = () => {
   const { ACTIONS, dispatch } = useContext(StateContext)
   return (
      <>
         <div className='calc'>
            <Screen />
            {/* {buttons[0]} */}
            {/* * Buttons */}

            {/* row 1 */}
            <button onClick={() => dispatch({ type: ACTIONS.ALL_CLEAR })}>
               AC
            </button>
            <button className='hide-when-min'>CH</button>
            <button onClick={() => dispatch({ type: ACTIONS.CLEAR })}>C</button>
            <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
               <FiDelete />
            </button>
            <OperationButton operation='÷' />

            {/* row 2 */}
            <DigitButton digit='7' />
            <DigitButton digit='8' />
            <DigitButton digit='9' />
            <OperationButton
               className='hide-when-min op-text'
               operation={'&'}
            />
            <OperationButton operation='×' />

            {/* row 3 */}
            <DigitButton digit='4' />
            <DigitButton digit='5' />
            <DigitButton digit='6' />
            <OperationButton
               className='hide-when-min op-text'
               operation={'|'}
            />
            <OperationButton operation='-' />

            {/* row 4 */}
            <DigitButton digit='1' />
            <DigitButton digit='2' />
            <DigitButton digit='3' />

            <OperationButton
               className='hide-when-min op-text'
               operation={'^'}
            />
            <OperationButton operation='+' />

            {/* row 5 */}
            <OperationButton
               className='hide-when-min op-text'
               operation={'mod'}
            />
            <DigitButton digit='0' />
            <DigitButton digit='.' />
            <OperationButton className={'hide-when-min op-text'} operation='**'>
               x<sup>y</sup>
            </OperationButton>
            <button
               className='op'
               onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
            >
               {'='}
            </button>
         </div>
      </>
   )
}

export default Calculator
