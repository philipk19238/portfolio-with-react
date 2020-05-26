import React from 'react';
import "./Subheader.css"


function Subheader(props) {

	let section_number = props.section_number;
	let section_name = props.section_name;

	return (

		<div className="container mt-5" style={{ borderTop: "2px solid WhiteSmoke", paddingLeft: "4%" }}>
				<h1 className="mt-5" id="sub-header" style={{ textAlign: props.align }}>
					{section_number + " " + section_name}
				</h1>
		</div>

		)
}

export default Subheader;


