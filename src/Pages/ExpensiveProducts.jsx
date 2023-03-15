import React, { useContext } from "react";
import { Context } from "../ProductsContext";

const ExpensiveProducts = () => {
  const products = useContext(Context);
  const expensiveProducts = products.filter((product) => product.price >= 200);
  console.log(expensiveProducts);
  return (
    <div>
      {expensiveProducts.map((product) => (
        <div className="product" key={product.id}>
          <img
            src={product.image}
            alt={product.title}
            width={150}
            height={150}
          />
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>{product.price} &#8380;</p>
          <p>
            Rate: <span>{product.rating.rate} &#9733;</span>
          </p>
          <p>
            Count: <span>{product.rating.count}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ExpensiveProducts;
