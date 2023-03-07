import { useState } from 'react';
import del from '../../images/delete.svg';

function SelectAuthor({ authors, filterAuthors }) {
	const [isActive, setIsActive] = useState(false);
	const [selected, setSelected] = useState("");
	const [currentAuthor, setCurrentAuthor] = useState('');
	const [filteredAuthors, setFilteredAuthors] = useState();
	const getValue = () => {
		console.log(authors.find(author => author.name === currentAuthor));
		return authors.find(author => author.name === currentAuthor)
	}

const onClick = (newValue) => {
	console.log(currentAuthor)
	filterAuthors(newValue.target)
}
	return (
		<div className='select'>
			<div className='select__dropdown'>
				<button
					className={isActive ? 'select__btn active' : 'select__btn'}
					onClick={() => setIsActive(!isActive)}
					type='button'
					value={getValue()}
				>
					{selected ? (
						<>
							<div className="select__text">{selected}</div>
							<img
								src={del}
								className='select__delete'
								onClick={() => setSelected(!selected)}
								alt='delete'
							/>
						</>
					) : (
						'Author'
					)}
				</button>
				{isActive && (
					<ul className='select__list'>
						{authors.map((author) => (
							<li
								className='select__list-item'
								key={author.id}
								onClick={(e) => {
									setSelected(author.name);
									setIsActive(false);
									onClick(e)
								}}
								
							>
								{author.name}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}

export default SelectAuthor;
