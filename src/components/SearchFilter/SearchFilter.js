import Search from '../Search/Search';
import { useState } from 'react';
import SelectAuthor from '../SelectAuthor/SelectAuthor';
import SelectLocation from '../SelectLocation/SelectLocation';
import SelectDate from '../SelectDate/SelectDate';

function SearchFilter({ authors, locations, filterAuthors }) {

	return (

<>
<SelectAuthor authors={authors} filterAuthors={filterAuthors} />
      <SelectLocation locations={locations} />
      <SelectDate locations={locations} />
</>
			

	);
}

export default SearchFilter;
