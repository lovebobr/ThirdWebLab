import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { Link ,  Outlet} from 'react-router-dom';
import { Button } from "@mui/material";
import { CartContext } from './CartContext';
import React, {  useContext } from 'react';
export default function Header() {
  const {count} = useContext(CartContext);
  
  return (
    <div>
    <header className="header">
      <div className="header-container">
        <Link to="/">
            <Button variant="contained">Гончарный магазин</Button>
          </Link>
        <Link to="/cart">
          <Badge badgeContent={count} color="primary">
            <ShoppingCartIcon fontSize="large" />
          </Badge>
        </Link>
      </div>
    </header>
     <Outlet /></div>
  );
}
