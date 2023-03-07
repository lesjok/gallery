import Card from '../Card/Card';

function Cards({ cards, authors, locations }) {
  
  return (
    <ul className="cards">
    {cards.map((card) => (
      <Card
      imageUrl={card.imageUrl}
      name={card.name}
      created={card.created}
      key={card.id}
      author={authors.find(({ id }) => id === card.authorId).name}
      location={locations.find(({ id }) => id === card.locationId).location}
      />
    ))}
  </ul>
  );
}

export default Cards;