import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Button} from '@material-ui/core';
import {Alert} from "@material-ui/lab"
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation, useHistory} from 'react-router-dom';

import logo from '../../assets/logo.jpg';
import useStyles from './styles';
import { useAuth } from "../../contexts/AuthContext.js";

const PrimarySearchAppBar = ({ totalItems}) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();
  const location = useLocation();
  const [error, setError] = useState("")
  const {logout} = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
  
      <AppBar position="fixed" className={classes.appBar} color="inherit">
      {error && <Alert variant="danger">{error}</Alert>}
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="primary">
            <img src={logo} alt="commerce.js" height="25px" className={classes.image} /> Commerce.js
          </Typography>
          <Button className={classes.button} component={Link} to="/about-us" aria-label="About Us" variant="outlined" color="primary">
            About Us
            </Button>
            {/* <Button className={classes.button} component={Link} to="/update-profile" aria-label="Update Profile" variant="outlined" color="primary">
            Update Profile
            </Button>
            <Button className={classes.button} component={Link} to="/logout" aria-label="Logout" variant="outlined" color="primary" onClick={handleLogout}>
            Logout
            </Button> */}
            <Button className={classes.button} component={Link} to="/books" aria-label="Books" variant="outlined" color="primary">
              Books
            </Button>
            <Button className={classes.button} component={Link} to="/games" aria-label="Games" variant="outlined" color="primary">
              Games
            </Button>
            <Button className={classes.button} component={Link} to="/must-haves" aria-label="Must Haves" variant="outlined" color="primary">
            Must Haves
            </Button>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </>
  );
};
export default PrimarySearchAppBar;