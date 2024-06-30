import React from "react";
import ProductCard from "./ProductCard";
import product1 from "../../assets/images/merch/product1.png";
import product2 from "../../assets/images/merch/product2.png";
import product3 from "../../assets/images/merch/product3.png";
import product4 from "../../assets/images/merch/product4.png";

export default function MerchContainer() {
  const products = [
    {
      productImage: product1,
      productName: "Prismanimation T-shirt",
      productDescription:
        "A cool T-shirt for a cool animator. Made from 100% organic cotton, this T-shirt features a unique Prismanimation design, perfect for showing off your animation passion. Available in various sizes and colors.",
      productPrice: 50,
    },
    {
      productImage: product2,
      productName: "Prismanimation Bag",
      productDescription:
        "A stylish and functional bag for animators on the go. The Prismanimation Bag is made from durable materials, has multiple compartments for organizing your essentials, and features a sleek design with the Prismanimation logo.",
      productPrice: 40,
    },
    {
      productImage: product3,
      productName: "Prismanimation Pen",
      productDescription:
        "A premium pen for animators. The Prismanimation Pen offers smooth writing with a comfortable grip, and its sleek design is adorned with the Prismanimation logo, making it a perfect accessory for both professional and personal use.",
      productPrice: 5,
    },
    {
      productImage: product4,
      productName: "Prismanimation iPhone Case",
      productDescription:
        "Protect your iPhone with style. The Prismanimation iPhone Case is designed to provide maximum protection with a slim profile. It features a high-quality print of the Prismanimation logo and is compatible with various iPhone models.",
      productPrice: 30,
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
