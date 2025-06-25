import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function About() {
// Access the data useLocation() Hook
    const location = useLocation();
    console.log(location.state)
  return (
    <>
    <div>
      <h1>About Page</h1>
      <h2>Hi i am About Page and my id is {location.state.id}</h2>

      <Link to="/">Home</Link> <br/><br/>
      <Link to="/contact">Contact Us</Link>
    </div>
    </>
  )
}

export default About
