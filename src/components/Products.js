import React, { useState, useEffect } from "react";
import Customer from "./Customers";
import api from "../apis/api";

function Products() {
  const [products, setProducts] = useState([])


  useEffect(() => {
    api.get('/products')
    .then(response => setProducts(response.data))
    .catch(error => console.error(error))
  }, [])
 

    return (
     
      <section id="products-container" className="products">
        {products.map((product) => (
          <article key={product.id} className="product">
            <h2 className="product--name">{product.name}</h2>
           <Customer id={product.id}  /> 
          </article>
        ))}
      </section>
    );

}

export default Products;
