import React, { useState, useEffect } from 'react'
import { IoMdArrowBack } from 'react-icons/io'

const Expand = () => {
   const [showHistory, setShowHistory] = useState(true)
   let rotate = showHistory ? 'rotate' : ''
   const handleClick = () => {
      setShowHistory(!showHistory)
   }
   useEffect(() => {
      if (window.innerWidth < 800) setShowHistory(false)
   }, [])

   useEffect(() => {
      let history = document.getElementsByClassName('history')[0]
      history.classList.toggle('show', showHistory)
   }, [showHistory])
   return (
      <>
         <div onClick={handleClick} className={`expand ${rotate}`}>
            <IoMdArrowBack />
         </div>
      </>
   )
}
export default Expand
