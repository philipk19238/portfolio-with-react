import React from 'react';
import Header from './About'
import Subheader from './helper/subheader.js'
import Navbar from './Navbar'

class Main extends React.Component {

	render(){

		return (
			<div>
			<Navbar/>
			<Header/>
			<Subheader section_name="About" section_number="01." />
			</div>
			)
	}

}

export default Main;