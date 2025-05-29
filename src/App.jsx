import React, { useReducer, useState } from 'react'
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
  let [side_bar, setside_bar] = useState(false)

  return (
    < >
      <Header state={state} dispatch={dispatch} side_bar={side_bar} setside_bar={setside_bar} />
      <Section dispatch={dispatch} setside_bar={setside_bar} />
      <Footer />
    </>
  )
}

export default App