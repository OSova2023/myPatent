import React from 'react'
import '../App.css'
import './error.css'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className='container_body shrink-body'>
      <p className='text-xl text-center'>404 Page not found</p>
      <Link to='/' className='text-center'>На главную</Link>
    </div>
  )
}
