import React from 'react'
import DaraFetching from './components/DaraFetching'
import Timer from './components/Timer'
import Subscription from './components/Subscription'

const App = () => {
  return (
    <div>
      <DaraFetching/>

      <Timer/>

      <Subscription/>
    </div>
  )
}

export default App
