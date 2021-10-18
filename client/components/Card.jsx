import React, {useState, useEffect} from 'react';

// check the props object, console.log
const Card = (props) => {
	console.log('props.info: ',props.info)
	const name = props.info.projectname;
	const tech = props.info.technology;
	const description = props.info.description;

  return (
		<div className='individualCard'>
			<h3><b>Name: </b></h3>
			<h4>{name}</h4> <br />
			<h3><b>Technology: </b></h3>
			<h4>{tech}</h4> <br />
			<h3> <b>Description: </b></h3>
			<h4 >{description}</h4>
		</div>
	)
}

export default Card;