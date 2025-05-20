import React, { useEffect } from 'react'

const Subscription = () => {

    useEffect(()=>{

        //Subscription
        const handleResize =()=> console.log(window.innerWidth)
        window.addEventListener("resize",handleResize)

        // clean up Subscription
        return ()=> window.removeEventListener("resize",handleResize)
    },[])


  return (
    <div>Subscription:Resize the window and check the console</div>
  )
}

export default Subscription