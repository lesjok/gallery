import { useState } from 'react';

function SelectDate() {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className='select'>
			<div className='select__dropdown'>
				<button
					className={isActive ? 'select__btn date-active' : 'select__btn'}
					onClick={() => setIsActive(!isActive)}
					type='button'
				>
          Created
				</button>
				{isActive && (
					<ul className="select__list select__list_dates">
            <li>
              <input placeholder='from' type='text' className="select__date" min="1" max="27" />
            </li>
            &mdash;
            <li>
              <input placeholder='before' type='text' className="select__date" min="1" max="27" />
            </li>        
          </ul>
				)}
			</div>
		</div>
	);
}

export default SelectDate;