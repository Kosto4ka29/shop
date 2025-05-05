import { useState } from 'react';
import productsData from '../../data/products.js';
import Product from '../Product/Product.js';

const Products = () => {
  const [products] = useState(productsData);

  return (
    <section>
      {products.map(product => (
        <Product
          key={product.id}
          {...product}
        />
      ))}
    </section>
  );
};

export default Products;
