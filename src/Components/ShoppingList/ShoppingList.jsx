import React, { useState } from 'react';
import './ShoppingList.scss';

const ShoppingList = () => {
	const [productsList, setProductsList] = [];
	const [product, setProduct] = useState({
        name: '',
        count: ''
    });

	console.log(product)

	function onSubmit(e) {
		e.preventDefault();
		setProduct({...product, name:e.target[0].value})
		e.target[0].value = '';

		console.log(e.target[0].value)
	}

	return (
		<div className='shopping'>
			<div className='add-product'>
				<form onSubmit={onSubmit}>
					<label htmlFor='add'>Product</label>
					<input
						type='text'
						name='add'
						id='add'
					/>
					<input
						type='submit'
						value='Add'
					/>
				</form>
			</div>
			<div className='list'>
                <p className="product">{product.name}</p>
                <p className="count">{product.count}</p>
                <button className="delete">Delete</button>
            </div>
		</div>
	);
};

export default ShoppingList;
