import "./index.css";
const Product = ({ product }) => {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }
  return <div className="product">{product.name}</div>;
};

export default Product;
