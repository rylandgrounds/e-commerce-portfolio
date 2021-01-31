import React from "react";
import { Grid } from "@material-ui/core";

import Product from "../Product/Product";
import useStyles from "./styles";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running Shoes",
    price: "$5",
    image: "https://assets.reebok.com/images/w_600,f_auto,q_auto/6622a0728e1d454e8207ab03014ed396_9366/Forever_Floatride_Energy_2_Women's_Running_Shoes_Black_EG2119.jpg"
  },
  {
    id: 2,
    name: "macbook",
    description: "Apple macbook",
    price: "$10",
    image:'https://i.pcmag.com/imagery/reviews/05CbcW9cP4o0rqbCnVB2OFZ-1..1584707541.jpg'
  },
];

const Products = () => {
const classes = useStyles();
  return (
    <main className={classes.content}>
        <div className={classes.toolbar}/>
      <Grid container justify="center" space={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
