import React, { useEffect, useState } from 'react'

const Timer = () => {

  const [count , setCount]= useState(0);
  const [isRurning , setIsRurning] = useState(false);

  useEffect(()=>{
    let timer;
    if(isRurning){
      timer = setInterval( ()=>{
        setCount((iteam)=> iteam +1)
      }, 1000);
    }
    return ()=> clearInterval(timer)//ধরো তুমি isRurning = true করলে timer শুরু হলো। এরপর তুমি আবার isRurning = false করলে: React বুঝবে useEffect() আবার চলতে যাচ্ছে (কারণ dependency [isRurning] চেঞ্জ হয়েছে) তাই React আগের useEffect এর return function চালাবে — মানে:
  },[isRurning])


  // count start
  const startHadller =()=>{
    setIsRurning(true);
  }

  
  // count stop
  const stoptHadller =()=>{
    setIsRurning(false);
  }
  // count Restart
  const restarttHadller =()=>{
    setCount(0);
    setIsRurning(false)
  }

  return (
    <div className='h-screen bg-gray-200 flex justify-center items-center text-center'>
        <div>
            <h2 className='text-2xl font-semibold'>Timer: {count}s</h2>

            <div className='flex space-x-5 mt-4'>
                <button onClick={startHadller} 
                  className='bg-blue-500 px-4 py-2 text-white rounded-lg cursor-pointer'>Start</button>
                <button  onClick={stoptHadller}
                  className='bg-red-500 px-4 py-2 text-white rounded-lg cursor-pointer'>Stop</button>
                <button onClick={restarttHadller}
                  className='bg-gray-500 px-4 py-2 text-white rounded-lg cursor-pointer'>Restart</button>
            </div>
        </div>
    </div>
  )
}

export default Timer