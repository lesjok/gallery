import { useState, useEffect } from 'react';
import './App.scss';
import Header from '../Header/Header';
import SearchFilter from '../SearchFilter/SearchFilter';
import Cards from '../Cards/Cards';
import Pagination from '../Pagination/Pagination';
import api from '../../utils/Api';

function App() {
	const [cards, setCards] = useState([]);
	const [listCards, setListCards] = useState(cards);
	const [authors, setAuthors] = useState([]);
	const [locations, setLocations] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [cardsPerPage] = useState(12);
	const lastCardIndex = currentPage * cardsPerPage;
	const firstCardIndex = lastCardIndex - cardsPerPage;
	const currentCard = cards.slice(firstCardIndex, lastCardIndex);
	const paginate = pageNumber => setCurrentPage(pageNumber);
	const nextPage = () => setCurrentPage(prev => prev + 1);
	const prevPage = () => setCurrentPage(prev => prev - 1);
	const lastPage = () => setCurrentPage(Math.ceil(cards.length / cardsPerPage));
	const firstPage = () => setCurrentPage(1);
	const [searchTerm, setSearchTerm] = useState('')

const filterCards = (searchText, listOfCards) => {
	if(!searchText) {
		return listOfCards;
	}
	return listOfCards.filter(({ name }) => 
		name.toLowerCase().includes(searchText.toLowerCase())
	)
}
const filterAuthors = (value) => {
	// if(!value) {
	// 	return cards;
	// }
	// cards.forEach((card) => {
	// 		return authors.find(({ id }) => id === card.authorId).name;
			
	// 	})
	// 	console.log(authors);
	// return cards.filter((card) => {
		// const authorsArr = authors.find(({ id }) => id === card.authorId).name;
		// card.authorId === authors.find
		// authors.forEach((author) => {
		// name.toLowerCase().includes(value.toLowerCase())
		// })

	// }

	// )
}
useEffect(() => {
	const filteredCards = filterCards(searchTerm, cards);
	setCards(filteredCards)
}, [])
	useEffect(() => {
		const getAuthors = async () => {
			await api
			.getAuthors()
			.then((res) => {
				setAuthors(res);
			})
			.catch((err) => {
				console.log(err);
			});
		}
		getAuthors();
	}, []);

	useEffect(() => {
		const getLocations = async () => {
			await api
			.getLocations()
			.then((res) => {
				setLocations(res);
			})
			.catch((err) => {
				console.log(err);
			});
		}
		getLocations();
	}, []);

	useEffect(() => {
		api
			.getPaintings()
			.then((res) => {
				setCards(res);				
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className='App'>
			<div className='container'>
			<Header />
			<form className='filter'>
				<div className='search'>
					<input
						value={searchTerm}
						className='search__input'
						type='text'
						placeholder='Name'
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>
				<SearchFilter authors={authors} locations={locations} filterAuthors={filterAuthors} />
				</form>
				<Cards cards={currentCard} authors={authors} locations={locations} />
				<Pagination cardsPerPage={cardsPerPage} totalCards={cards.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} lastPage={lastPage} firstPage={firstPage} currentPage={currentPage} />
			</div>
		</div>
	);
}

export default App;
