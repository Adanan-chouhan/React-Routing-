import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  // How to pass data with useNavigate() hook 
  const id = 5;
  const navigate = useNavigate();

  function goToAbout() {
    navigate("/about", { state: { id: id } });
  }
  return (
    <>
      <div>
        <h1>Home Page</h1>
        {/* <Link to="/about">About</Link> <br /><br />
        <Link to="/contact">Contact Us</Link> */}
        <button onClick={goToAbout}>About</button>
      </div>
    </>
  );
}

export default Home;
