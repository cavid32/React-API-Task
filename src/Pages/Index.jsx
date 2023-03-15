import React, { useContext, useState, useEffect } from "react";
import { Context } from "../ProductsContext";

const Index = () => {
  const products = useContext(Context);
  const categories = products.map((product) => product.category);
  const uniqueCat = [...new Set(categories)];
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (products.length > 0) {
      setItems(products);
    }
  }, [products]);

  const filterByCategory = (e) => {
    setItems((items) =>
      products.filter((product) => product.category === e.target.value)
    );
  };
  return (
    <div>
      <select onChange={(e) => filterByCategory(e)}>
        {uniqueCat.map((cat, index) => (
          <option value={cat} key={index}>
            {cat}
          </option>
        ))}
      </select>
      {items.length > 0 &&
        items.map((product) => (
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

export default Index;
