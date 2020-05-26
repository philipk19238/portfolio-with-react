import React from 'react';
import Header from './About'
import Subheader from './helper/subheader.js'
import Navbar from './Navbar'
import SectionOne from './SectionOne'

class Main extends React.Component {

	render(){

		return (
			<div>
			<Navbar/>
			<Header/>
			<Subheader section_name="About" section_number="01." />
			<SectionOne />
			</div>
			)
	}

}

export default Main;