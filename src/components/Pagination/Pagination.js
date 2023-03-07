import { useState, useEffect } from 'react';
import next from '../../images/next.svg';
import extraNext from '../../images/extra-next.svg';
import prev from '../../images/prev.svg';
import extraPrev from '../../images/extra-prev.svg';

function Pagination(props) {

  const pageNumbers = [];
  const [disabled, setDisabled] = useState();

  useEffect(() => {
    if(props.currentPage === 1) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [props.currentPage])

  const countOfPages = Math.ceil(props.totalCards / props.cardsPerPage);

  for( let i = 1; i <= countOfPages; i++ ) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <ul className="pagination__container">
        <button className="pagination__button button" onClick={props.firstPage} disabled={disabled}>
          {disabled ? 
          <img src={extraPrev} alt='first page' />
          :
          <img src={extraNext} alt='first page' className="button__rotate" /> 
        }
        </button>
        <button className="pagination__button" onClick={props.prevPage} disabled={disabled}>
        {disabled ? 
          <img src={prev} alt='prev' />
          :
          <img src={next} alt='prev' className="button__rotate" /> 
        }    
        </button>
        {
          pageNumbers.map(number => (
            <>       
            <li className="pagination__item" key={props.number}>
              <button className={props.currentPage === number ? 'pagination__button active' : 'pagination__button'} onClick={() => props.paginate(number)}>
                {number}
              </button>
            </li>        
            </>   
          ))
        }
        <button className="pagination__button button" onClick={props.nextPage} disabled={props.currentPage === countOfPages}>
          <img src={props.currentPage !== countOfPages ? next : prev} alt='next' className={props.currentPage === countOfPages && 'button__rotate'} />
        </button>
        <button className="pagination__button button" onClick={props.lastPage} disabled={props.currentPage === countOfPages}>
          <img src={props.currentPage !== countOfPages ? extraNext : extraPrev} alt='last page' className={props.currentPage === countOfPages && 'button__rotate'} />
        </button>
      </ul>
    </div>
  );
}

export default Pagination;