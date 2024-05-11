
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import {Routes,Route} from "react-router-dom"
import Navbar from './Componet/Navbar'

function App() {
  
  return (
    <> 
     <Navbar/>
      <div>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/contact' element={<Contact/>}/>
       </Routes>
      </div>   
    </>
  )
}

export default App
