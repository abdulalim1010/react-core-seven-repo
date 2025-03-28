
import { Suspense } from 'react'
import './App.css'
import Bottoles from './component/bottols/bottoles'

function App() {

const  bottlesPromis=fetch('./bottle.json').then(res=>res.json())

  return (
    <>
      
      <h1>Buy Awesome Water Bottle</h1>
      <Suspense fallback={<h1>Bottole are loading</h1>}>
        <Bottoles bottlesPromis={bottlesPromis}></Bottoles>
      </Suspense>
      
    </>
  )
}

export default App
