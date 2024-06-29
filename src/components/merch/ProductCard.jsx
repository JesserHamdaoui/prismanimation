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
    <div className="">
      <CardView>
        <img src={productImage} alt="product" className="rounded-lg mb-5" />
        <h2 className="text-xl font-bold">{productName}</h2>
        <p className="text-gray-500">{productDescription}</p>
        <p className="text-gray-700">{`${productPrice} DT`}</p>
        <a
          href={productButtonLink}
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <div className="flex justify-end">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
            Buy
          </button>
        </div>
      </CardView>
    </div>
  );
}
