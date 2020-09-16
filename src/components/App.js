import React from 'react'

import Product from './Product'
import Section from './Section'
import BookList from './BookList'
import favouriteBooks from '../books.json'

export default  function App () {
		return <>
			<Section title="Hello 1111">
				<Product 
					w="400"
					imgSrc="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
					price={250.12}
					name="Tacos With Lime"
					quantity={30}
				/>
		  </Section>
	      <Section title="Hello 222">
			<Product 
				w="400"
				imgSrc="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
				price={20.12}
				name="Fries and Burger"
				quantity={100}
			/>
		</Section>
		<BookList books={favouriteBooks}/>
	</>
}
