import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className='container_body'>
      <p className='text-xl text-center'>Page not found</p>
      <Link to='/' className='text-center'>На главную</Link>
    </div>
  )
}
