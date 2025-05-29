import React, { useEffect, useReducer } from 'react'
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

  return (
    <>
      <Header state={state} dispatch={dispatch} />
      <Section dispatch={dispatch} />
      <Footer />
    </>
  )
}

export default App