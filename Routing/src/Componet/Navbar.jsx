import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div style={{display:"flex",justifyContent:"space-between"}}>
        <Link to ="/"><h1>Home</h1></Link>
        <Link to ="/about"><h1>About</h1></Link>
        <Link to ="/contact"><h1>Contact</h1></Link>
    </div>
  )
}

export default Navbar