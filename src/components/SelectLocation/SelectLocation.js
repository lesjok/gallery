import { useState } from 'react';
import del from '../../images/delete.svg';

function SelectLocation({ locations }) {
	const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("");

	return (
		<div className='select'>
			<div className='select__dropdown'>
				<button
					className={isActive ? 'select__btn active' : 'select__btn'}
					onClick={() => setIsActive(!isActive)}
					type='button'
				>
					{selected ? (
						<>
							<div className="select__text">{selected}</div>
							<img
								src={del}
								className='select__delete'
								onClick={() => setSelected(!selected)
                }
                alt='delete'
							/>
						</>
					) : (
						'Location'
					)}
				</button>
				{isActive && (
					<ul className='select__list'>
						{locations.map((location) => (
							<li
								className='select__list-item'
								key={location.id}
								onClick={() => {
									setSelected(location.location);
									setIsActive(false);
								}}
							>
								{location.location}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}

export default SelectLocation;