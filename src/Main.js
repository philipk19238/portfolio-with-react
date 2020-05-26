import React from 'react';
import Header from './About'
import Subheader from './helper/subheader.js'

class Main extends React.Component {

	render(){

		return (
			<div>
			<Header/>
			<Subheader section_name="About" section_number="01." />
			</div>
			)
	}

}

export default Main;