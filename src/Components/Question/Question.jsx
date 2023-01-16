import React from 'react';
import { useState } from 'react';
import './Question.scss';

const Question = ({ question }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className='question'>
			<div className='title'>
				<h2>{question.title}</h2>
				<button onClick={() => setIsOpen(!isOpen)}>{!isOpen ? '+' : '-'}</button>
			</div>
			{isOpen &&
				<div className='info'>
					<p>{question.info}</p>
				</div>
			}
		</div>
	);
};

export default Question;
