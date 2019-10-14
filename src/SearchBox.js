import React from 'react';


const SearchBox = (props) => {
	return(
		<div className='search-box'>
			<form onSubmit={props.searchBook} action="">
				<input onChange={props.handleSearch} type='text'/>
				<button className='btn' type="submit">Search</button>
				<select className='sortbtn' defaultValue='Sort' onChange={props.handleSort}> 
					<option disabled value='Sort'>Sort</option>
					<option value='Newest'>Newest</option>
					<option value='Oldest'>Oldest</option>
				</select>
			</form>
		</div>
	);
}



export default SearchBox;