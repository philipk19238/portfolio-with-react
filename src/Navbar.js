import React from 'react';
import "./Navbar.css";

function Navbar() {
	return(

		<div>
			<nav className="navbar navbar-expand-lg sticky-top navbar-light" id="navbar-wrapper" style={{backgroundColor: "white"}}>
	
		<a href="#main-page" className="navbar-brand">
			<img src={"https://github.com/philipk19238/philipk19238.github.io/blob/master/static/images/logo.PNG?raw=true"} 
			style={{ height: "60px", width: "auto", filter: "hue-rotate(65deg)" }} />
		</a>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    	<span className="navbar-toggler-icon"></span>
  		</button>

		<div className="container">
		<div className="collapse navbar-collapse" id="navbarSupportedContent">
			<ul className="nav ml-auto" id="navbar-links">
			  <li className="nav-item">
			    <a className="nav-link" href="#about">About</a>
			  </li>
			  <li className="nav-item">
			    <a className="nav-link" href="#experience">Experience</a>
			  </li>
			  <li className="nav-item">
			    <a className="nav-link" href="#project">Projects</a>
			  </li>
			  <li className="nav-item">
			    <a className="nav-link" href="#contact">Contact</a>
			  </li>
			</ul>
		</div>
		</div>
	</nav>			
		</div>

		)
}

export default Navbar;