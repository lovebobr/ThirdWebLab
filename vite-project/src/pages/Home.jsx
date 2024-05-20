import React, { useState, useContext } from 'react';
import { Button, Grid, TextField, Slider, Typography } from '@mui/material';
import { CartContext } from '../components/CartContext';
import { Link } from 'react-router-dom';
import products from '../components/list';

const Home = () => {
  const [searchText, setSearchText] = useState('');
  const [priceRange, setPriceRange] = useState([0, 35]);
  const { addToCart } = useContext(CartContext); 

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase()) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
  );

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <Grid container spacing={2}>
          {filteredProducts.map((product) =>( 
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <div className="product-card">
              <Link to={`/product/${product.id}`}>
                <img src={`./img/${product.img}`} alt={product.name} />
                </Link>
                <h3>{product.name}</h3>
                <p>Цена: {product.price} $</p>
                <Button onClick={() => {addToCart(product)}}>В корзину</Button>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          label="Поиск"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Typography gutterBottom>Фильтр по цене:</Typography>
        <Slider
          value={priceRange}
          onChange={(e, newValue) => setPriceRange(newValue)}
          valueLabelDisplay="auto"
          min={0}
          max={35}
        />
      </Grid>
    </Grid>
  );
};

export default Home;
