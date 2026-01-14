
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import './App.css'
import Counting from './count'
import { Provider } from 'react-redux'
import stores from './Stores'

function App() {
 

  return (

    <Provider store={stores}>
     <h1>Redux</h1>
     <Counting/>
     </Provider>
    
  )
}

export default App
