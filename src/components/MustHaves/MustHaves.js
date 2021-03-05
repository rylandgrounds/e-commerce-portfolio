import React from "react";
import Grid from "@material-ui/core/Grid";

import Product from "../Products/Product/Product";
import useStyles from "./styles";

const MustHaves = ({ products, onAddToCart }) => {
  const classes = useStyles();
  if (!products.length) return <p>Loading...</p>;
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
            product.categories[0].name === "Must Haves" && (
                <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
            )))}
      </Grid>
    </main>
  );
};


export default MustHaves;