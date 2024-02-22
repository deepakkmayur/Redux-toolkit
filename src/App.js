import React from 'react'
import AddTodo from './components/AddTodo'
import {store} from "../src/store/store"
import { Provider } from 'react-redux'
import Todos from "./components/Todos"
const App = () => {

  return (
    <Provider store={store}>   
   <AddTodo/>
   <Todos/>
    </Provider>
  )
}

export default App