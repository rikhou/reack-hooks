import { useDeferredValue, useState, useTransition } from "react";
import Product from "./Product";
import { getProductData } from "./data";

function MyApp() {
  const [searchText, setSearchText] = useState("");
  const [isPending, startTransition] = useTransition();
  // const deferredText = useDeferredValue(searchText);
  const deferredText = searchText;

  const filterProducts = () => {
    if (!deferredText) {
      return getProductData();
    } else {
      return getProductData().filter((product) =>
        product.name.includes(deferredText)
      );
    }
  };
  const products = filterProducts();

  const handleFilterChange = (e) => {
    startTransition(() => {
      setSearchText(e.target.value);
    });
    // setSearchText(e.target.value);
  };

  return (
    <div className="App">
      <div className="search">
        <input onChange={handleFilterChange} />
      </div>

      {products.map((product, index) => (
        <Product product={product} key={index} />
      ))}
    </div>
  );
}

export default MyApp;
