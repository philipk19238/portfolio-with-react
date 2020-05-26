import React from 'react';
import "./button.css"

export class Button extends React.Component {
	render(){
		return (

			<button class="btn btn-lg btn-primary mr-2 mr-md-5" id="mediumButton">
				{this.props.title}
			</button>

			)
	}
}
