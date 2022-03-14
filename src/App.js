import React, { useReducer, createContext } from 'react'
import { Calculator, Expand, History } from './components/list'
import './style.css'

const ACTIONS = {
   ADD_DIGIT: 'add-digit',
   DELETE_DIGIT: 'delete-digit',
   ALL_CLEAR: 'all-clear',
   CLEAR: 'clear',
   CHOOSE_OPERATION: 'choose-operation',
   EVALUATE: 'evaluate',
}

export const StateContext = createContext()

function App() {
   const [state, dispatch] = useReducer(reducer, {})
   return (
      <>
         <StateContext.Provider
            value={{ state: { ...state }, ACTIONS, dispatch }}
         >
            <div className='container'>
               <Calculator />
               <Expand />
               <History />
            </div>
         </StateContext.Provider>
      </>
   )
}

function reducer(state, { type, payload }) {
   switch (type) {
      case ACTIONS.ADD_DIGIT:
         if (payload.digit === '.' && state.currentOperand == null) return state
         if (payload.digit === '0' && state.currentOperand === '0') return state
         if (payload.digit === '.' && state.currentOperand.includes('.'))
            return state
         if (state.currentOperand?.length > 19) return state
         return {
            ...state,
            currentOperand: `${state.currentOperand || ''}${payload.digit}`,
         }

      case ACTIONS.CHOOSE_OPERATION:
         if (
            state.previousOperand &&
            state.operation &&
            state.currentOperand == null
         ) {
            return {
               ...state,
               operation: payload.operation,
            }
         }
         if (state.currentOperand == null) return state

         if (state.previousOperand != null) {
            let res = evaluate(
               state.previousOperand,
               state.currentOperand,
               state.operation
            )
            return {
               ...state,
               previousOperand: res,
               currentOperand: null,
               operation: payload.operation,
            }
         }

         return {
            ...state,
            previousOperand: state.currentOperand,
            currentOperand: null,
            operation: payload.operation,
         }

      case ACTIONS.EVALUATE:
         if (state.previousOperand == null || state.currentOperand == null)
            return state

         return {
            ...state,
            currentOperand: evaluate(
               state.previousOperand,
               state.currentOperand,
               state.operation
            ),
            previousOperand: null,
            operation: null,
         }

      case ACTIONS.DELETE_DIGIT:
         if (state.currentOperand == null && state.previousOperand == null)
            return state

         if (state.currentOperand == null || state.currentOperand == '') {
            return {
               ...state,
               currentOperand: state.previousOperand,
               operation: null,
               previousOperand: null,
            }
         }
         return {
            ...state,
            currentOperand: state.currentOperand.substring(
               0,
               state.currentOperand.length - 1
            ),
         }

      case ACTIONS.CLEAR:
         return {
            ...state,
            currentOperand: null,
         }

      case ACTIONS.ALL_CLEAR:
         return {}

      default:
         return state
   }
}

function evaluate(previousOperand, currentOperand, operation) {
   let result = 0
   switch (operation) {
      case '+':
         result = parseFloat(previousOperand) + parseFloat(currentOperand)
         break
      case '-':
         result = parseFloat(previousOperand) - parseFloat(currentOperand)
         break
      case '×':
         result = parseFloat(previousOperand) * parseFloat(currentOperand)
         break
      case '÷':
         result = parseFloat(previousOperand) / parseFloat(currentOperand)
         break
      case 'mod':
         result = parseInt(previousOperand) % parseInt(currentOperand)
         break
      case '&':
         result = parseInt(previousOperand) & parseInt(currentOperand)
         break
      case '|':
         result = parseInt(previousOperand) | parseInt(currentOperand)
         break
      case '^':
         result = parseInt(previousOperand) ^ parseInt(currentOperand)
         break
      case '**':
         result = parseFloat(previousOperand) ** parseFloat(currentOperand)
         break

      default:
         result = 0
   }
   return result.toString()
}

export default App
