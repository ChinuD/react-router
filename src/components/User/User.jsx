import React from 'react'
import {useParams} from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='mx-180'>User: {userid}</div>
  )
}

export default User