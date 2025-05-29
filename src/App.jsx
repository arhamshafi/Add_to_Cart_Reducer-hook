import React, { useReducer } from 'react'
import Header from './Header'
import Section from './Section'
import Footer from './Footer'
import Reducer_f from './Reducer_f'

function App() {

  let initial_value = {
    item: [],
    total_amount: 0
  }
  let [state, dispatch] = useReducer(Reducer_f, initial_value)
  
    console.log(state);
    

  return (
    <>
      <Header state={state} />
      <Section dispatch={dispatch} />
      <Footer />
    </>
  )
}

export default App