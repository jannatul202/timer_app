import React, { useEffect, useState } from 'react'

const DaraFetching = () => {

    const [data , setData]= useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then((data)=>{
            // console.log(iteam);
            setData(data.slice(0,10))
        })
    },[]) //once after the first render

    //useEffect() কেবল একবার চলে (কারণ dependency array ফাঁকা []) — মানে শুধু প্রথমবার component রেন্ডার হওয়ার পর।
    //fetch() দিয়ে URL থেকে ডেটা আনা হয়।
    //res.json() দিয়ে response কে JSON এ কনভার্ট করা হয়।
    //তারপর সেই data কে setData দিয়ে data state এ রেখে দেয়া হয়।

    
        // console.log(data);


  return (
    <div>
        <h2 className='text-2xl font-semibold mb-4 mt-4'>Data fetching from JESONplaceholder</h2>

        <ul>
            {
                data.map((iteam , index)=>(
                    <li key={index}>{iteam.id}. {iteam.title}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default DaraFetching