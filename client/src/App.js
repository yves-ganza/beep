import logo from './logo.svg'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [state, setState] = useState({ message: '' })
  useEffect(() => {
    fetch('/api', {
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) =>setState({message: data.message}))
  },[])
  return (
    <div className='App'>
      <div className='Header'>

      </div>
      <div className='Container'>
        <div className='left'>
          <p>{state.message ? state.message : 'Loading...'}</p>
        </div>
        <div className='right'>
        </div>
      </div>
    </div>
  )
}

export default App
