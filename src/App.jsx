import routes from "./routes";
import { useRoutes } from "react-router-dom";
import { Context } from "./ProductsContext";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const request = await fetch("https://fakestoreapi.com/products");
      const response = await request.json();
      setProducts(response);
    };
    getProducts();
  }, []);

  return (
    <div className="App">
      <Navbar/>
      <Context.Provider value={products}>{useRoutes(routes)}</Context.Provider>
    </div>
  );
};

export default App;
