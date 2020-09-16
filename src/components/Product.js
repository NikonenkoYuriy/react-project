import React from 'react'
import PropTypes from 'prop-types';

function Product ( { w, imgSrc, name, price, quantity } ){
  return <div>
    <img
      src={imgSrc}
      alt={price}
      width={w}
    />
    <h2>{name}</h2>
	<p>{quantity > 30 ? 'In stock' : 'few left'}</p>
    <p>Price: {price}$</p>
    <button type="button">Add to cart</button>
  </div>
}

Product.defaultProps = {
	imgSrc: "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder"
}

Product.propTypes = {
	imgSrc: PropTypes.string,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired
}

export default Product;