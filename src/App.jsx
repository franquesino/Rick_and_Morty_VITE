import './App.css'
import Cards from './components/cards/Cards'
import Detail from './components/detail/Detail'
import { Routes, Route } from "react-router-dom"
import Nav from './components/nav/Nav'
import Form from './components/form/Form'

function App() {
 

  return(
    
    <>
      <Nav/>
      <Routes>
          <Route path='/form' element={<Form/>} />
          <Route path='/home' element={<Cards/>} />
          <Route path='/detail/:id' element={<Detail/>} />
      </Routes>

    </>
  )
}

export default App
