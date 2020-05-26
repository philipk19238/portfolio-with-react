import React from 'react';
import { Button } from './helper/MediumButton.js'
import { Social } from './helper/Social.js'
import './About.css';


class Header extends React.Component {
    render() {
        return (

            <section className="container mb-5 d-flex align-items-center" style={{ textAlign:"left", minHeight:"100vh"}}>
            		<div className="container-fluid" style={{ padding: "0px", margin: "0px" }}>
					<h4 className="mt-5" id="welcome">Hi, my name is</h4>
					<h1 className="mt-3" id="name">Philip Kung.</h1>
					<h1 className="mt-2" id="description">I build things for the web.</h1>
					<h4 className="mt-4 col-lg-8" id="about-desc">
						I'm a sophomore studying Quantitative Finance at the University of Texas at Austin. 
						I consider myself a self-starter, an avid learner, and a big dreamer.
					</h4>

					<div className="container mt-4 mt-md-5" style={{ display: "inline-block !important", padding: "0px", margin: "0px" }}>
					<p style={{ paddingLeft: "4%" }}>
						<Button title="Get in Touch" />
						<Button title="View my Resume" />
					</p>
					</div>
					<div className="container mt-4 mt-md-5" style={{ display: "inline-block !important", padding: "0px", margin: "0px" }}>
					<p style={{ paddingLeft: "4%" }}>
						<Social />
					</p>
					</div>
					</div>
			</section>

        );
    }
}

export default Header;