function Card({ imageUrl, name, created, author, location }) {
  return (
    <li className="card">
      <a href="" className="card__link">
        <img src={`https://test-front.framework.team` + imageUrl} alt={name} className="card__image" />
        <div className="card__info info">
          <h3 className="info__title">{name}</h3>
          <ul className="info__list">
            <li className="info__item"><span className="info__span">Author:</span>{author}</li>
            <li className="info__item"><span className="info__span">Created:</span>{created}</li>
            <li className="info__item"><span className="info__span">Location:</span>{location}</li>
          </ul>
        </div>
      </a>  
    </li>
  );
}

export default Card;