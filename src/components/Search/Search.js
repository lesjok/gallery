import { useState } from 'react';

function Search() {

	return (
		<div className='search'>
      <input
				className='search__input'
				type='text'
				placeholder='Name'
			/>
		</div>
	);
}

export default Search;