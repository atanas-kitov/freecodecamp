import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Quotes.scss';

const Quotes = () => {
	const [quotes, setQuotes] = useState([]);
	const [quote, setQuote] = useState();

	function randomQuote(quotes) {
		return quotes[Math.floor(Math.random() * quotes.length)];
	}

	function getRandomQuote(quotes) {
		setQuote(randomQuote(quotes));
	}

	useEffect(() => {
		fetch('https://type.fit/api/quotes')
			.then((res) => res.json())
			.then((data) => {
				setQuotes(data);
				setQuote(data[0]);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className='quotes'>
            {!quote
            ? <p>Loading...</p>
            :
			<>
				<button
					onClick={() => getRandomQuote(quotes)}
					className='newquote'>
					Get new quote
				</button>
				<h3 className='text'>{quote.text}</h3>
				<p className='author'>- {quote.author}</p>
			</>
}
		</div>
	);
};

export default Quotes;
