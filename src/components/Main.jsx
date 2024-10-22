import React from 'react'

export default function Main({setIsClickedBurger, isClickedBurger}) {
  return (
    <div className='Main' onClick={()=>setIsClickedBurger((prev)=> {
      console.log('aaaaa')
      return !prev})}>Main</div>
  )
}
