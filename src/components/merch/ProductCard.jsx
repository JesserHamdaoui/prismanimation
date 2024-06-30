import React from "react";
import CardView from "../../UI/CardView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function ProductCard({
  productName,
  productDescription,
  productPrice,
  productImage,
  productButtonLink = "",
}) {
  return (
    <CardView>
      <div className="relative w-full h-[200px] border-8 border-white rounded-lg mb-8">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-lg rounded-lg"
          style={{ backgroundImage: `url(${productImage})` }}
        ></div>
        <img
          src={productImage}
          alt="product"
          className="relative z-10 rounded-lg w-[325px] h-[200px] object-scale-down -top-2"
        />
      </div>
      <h2 className="text-xl font-bold">{productName}</h2>
      <p className="text-gray-500 truncate text-ellipsis max-h-[120px] text-wrap text-[12px]">
        {productDescription}
      </p>
      <p className="text-gray-700 text-2xl">{`${productPrice} DT`}</p>
      <a href={productButtonLink} target="_blank" rel="noopener noreferrer"></a>
      <div className="flex justify-end">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
          Buy
        </button>
      </div>
    </CardView>
  );
}
