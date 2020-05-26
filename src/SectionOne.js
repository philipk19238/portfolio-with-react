import React from 'react';
import "./SectionOne.css";

function SectionOne(){
	return (
		<section className="container mt-3 mb-5 d-flex align-items-center">

		<div className="container d-flex flex-column flex-lg-row align-items-start" style={{ padding: "0px" }}>

		<div className="container h-100" style={{ padding: "0px" }}>

			<p id="about-text">
				Hey y'all! I'm Philip, a sophomore studying Quantitative Finance
				at the University of Texas at Austin.
			</p>

			<p  id="about-text">
				I enjoy all things Python - from creating trading bots using
				Pandas, NumPy, and scikit-learn to deploying REST APIs on 
				AWS Lambda - the functionality and flexibility of the language
				is unparalleled. 
			</p>

			<p id="about-text">
				I am currently pursuing opportunities in both finance and software engineering. If you are a recruiter or know of a position available, please don't hesitate to reach out. I specialize in creating scalable full-stack web applications, analyzing & cleaning data, and automating back office workflow.
			</p>

			<p id="about-text">
				Here are also some technologies I've been working with recently:
			</p>

			<div className="container d-flex align-items-center justify-content-start h-100" style={{padding: "0px"}}>

				<ul className="mt-3 no_bullet" style={{marginLeft: "20px"}}>
					<li className="bullet-icon">JavaScript (ES6+)</li>
					<li className="bullet-icon">HTML & CSS</li>
					<li className="bullet-icon">Flask</li>
				</ul>


				<ul className="ml-5 mt-3 no_bullet">
					<li className="bullet-icon">Python</li>
					<li className="bullet-icon">Pandas</li>
					<li className="bullet-icon">Keras</li>
				</ul>


			</div>

			



		</div>

		<div className="container d-flex justify-content-center p-5" style={{padding: "0px"}}>
				<img src={"https://github.com/philipk19238/philipk19238.github.io/blob/master/static/images/bigbend.JPG?raw=true"}
				 id="me-image" className="frame" />
			</div>

		

		</div>



		</section>
		)
}


export default SectionOne;