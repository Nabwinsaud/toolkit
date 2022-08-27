import React, { useState } from "react";
import { useSelector } from "react-redux";
const initialProduct = [
  {
    name: "Butter",
    price: 200,
  },
  {
    name: "Curd",
    price: 65,
  },
  {
    name: "Honey",
    price: 200,
  },
];
// without redux
// const Product = ({ filterItem }) => {
const Product = () => {
  // with redux
  const filterItem = useSelector((state) => state.productFilter.filter);
  const [products] = useState(initialProduct);
  return (
    <div>
      {products
        .filter((product) =>
          filterItem
            ? product.name
                .toLowerCase()
                .trim()
                .replace(/\s/g, "")
                .includes(filterItem)
            : true
        )
        .map((product) => (
          <div key={product.name}>
            {/* {filterItem && ( */}
            <p>
              {product.name}:{product.price}
            </p>
            {/* )} */}
          </div>
        ))}
    </div>
  );
};

export default Product;
