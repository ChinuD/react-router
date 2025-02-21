import React, {useState, useEffect } from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {

    const data = useLoaderData();
    console.log(data)

    // const [data,setData] = useState([])

    // useEffect(()=> {
    //     fetch('https://api.github.com/users/chinud')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

  return (
    <>
        <div className='mx-150'>Github: {data.name}</div>
        <div className='mx-150'>Github Followers: {data.followers}</div> 
        <img src={data.avatar_url} className='rounded-full w-20 mx-180' />
    </>
  )
}

export default Github

export const githubinfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/chinud')
    return response.json();
}