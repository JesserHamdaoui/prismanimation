import React from "react";
import ProductCard from "./ProductCard";

export default function MerchContainer() {
  const products = [
    {
      productImage: "https://via.placeholder.com/500x300",
      productName: "Product 1",
      productDescription: "Description 1",
      productPrice: 100,
    },
    {
      productImage: "https://via.placeholder.com/500x300",
      productName: "Product 2",
      productDescription: "Description 2",
      productPrice: 200,
    },
    {
      productImage: "https://via.placeholder.com/500x300",
      productName: "Product 3",
      productDescription: "Description 3",
      productPrice: 300,
    },
    {
      productImage: "https://via.placeholder.com/500x300",
      productName: "Product 4",
      productDescription: "Description 4",
      productPrice: 400,
    },
    {
      productImage: "https://via.placeholder.com/500x300",
      productName: "Product 5",
      productDescription: "Description 5",
      productPrice: 500,
    },
    {
      productImage: "https://via.placeholder.com/500x300",
      productName: "Product 6",
      productDescription: "Description 6",
      productPrice: 600,
    },
    {
      productImage: "https://via.placeholder.com/500x300",
      productName: "Product 7",
      productDescription: "Description 7",
      productPrice: 700,
    },
    {
      productImage: "https://via.placeholder.com/500x300",
      productName: "Product 8",
      productDescription: "Description 8",
      productPrice: 800,
    },
    {
      productImage: "https://via.placeholder.com/500x300",
      productName: "Product 9",
      productDescription: "Description 9",
      productPrice: 900,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1200px] m-auto pb-28">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
}
