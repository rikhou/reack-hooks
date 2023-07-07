export const getProductData = () => {
  let products = [];
  for (let i = 0; i < 500; i++) {
    products.push({ id: i, name: "product:" + i });
  }

  return products;
};
