import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import products from '../components/list';
import { Grid,Rating,Button } from '@mui/material';
import { CartContext } from '../components/CartContext';
const ProductDetails = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));
  const [rating, setRating] = useState(
    localStorage.getItem(`rating_${product.id}`) || 0
  ); 
  const { addToCart } = useContext(CartContext);
  useEffect(() => {
    localStorage.setItem(`rating_${product.id}`, rating);
  }, [rating, product.id]); 

  if (!product) {
    return <div>Товар не найден</div>;
  }
  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };
  return (
    <div className='productDetails'>
  <Grid container spacing={2}>
    <Grid item xs={9} md={4}>
      <img src={`/img/${product.img}`} alt={product.name} />
    </Grid>
    <Grid item xs={12} md={7.5}>
      <Grid container direction="column">
        <Grid item>
          <h2>{product.name}</h2>
        </Grid>
        <Grid item container direction="row" alignItems="center" spacing={2}>
          <Grid item>
            <Rating
              name="product-rating"
              value={rating}
              precision={1}
              onChange={handleRatingChange}
            />
          </Grid>
          <Grid item>
            <Button onClick={() => addToCart(product)}>В корзину</Button>
          </Grid>
        </Grid>
        <Grid item>
          <h2>Цена: {product.price} $</h2>
        </Grid>
        <Grid item>
          <p>Описание: {product.desc}</p>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
</div>

  );
};

export default ProductDetails;
