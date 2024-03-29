import React from 'react';


const BookCard = (props) => {
	return(
		<div className='card-container'>
			<img src={props.image} alt=''/>
			<div className='desc'>
				<h2>{props.title}</h2>
				<h3>Author: {props.author}</h3>
				<p>Published Date: {props.published === '0000' ? 'Not Available' : props.published.substring(0, 4) }</p>
				<p>Description: {props.description}</p>
			</div>
		</div>
	);
}




export default BookCard; 