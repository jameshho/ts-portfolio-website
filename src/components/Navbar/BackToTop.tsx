import React from 'react'

const BackToTop = () => {
  return (
    <div className='backtotop' onClick={()=> window.scrollTo(0, 0)}>△</div>
  )
}

export default BackToTop