import React from "react";
import "./Social.css"

export class Social extends React.Component {
	render(){
		return (
			<div id="social-container">
			<a href="https://github.com/philipk19238" target = "_blank">
				<i class="fab fa-github-alt fa-2x mr-4 mr-md-5"></i>
			</a>
            <a href="https://www.linkedin.com/in/philipkung/" target="_blank">
            	<i class="fab fa-linkedin fa-2x mr-4 mr-md-5"></i>
        	</a>
            <a href="https://www.instagram.com/pkung67/" target="_blank">
            	<i class="fab fa-instagram fa-2x mr-4 mr-md-5"></i>
        	</a>
            <a href="https://www.facebook.com/philip.kung.33" target="_blank">
            	<i class="fab fa-facebook fa-2x mr-4 mr-md-5"></i>
        	</a>
        	</div>

			)
	}
}