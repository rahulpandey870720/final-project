import React from "react";
import { Link } from "react-router-dom";

export default function Singleproduct({ product }) {
  return (
    <div className="single-product">
      <div className="product-img">
        <img
          className="img-fluid w-100"
          src={product.image}
          alt={product.name}
        />
        <div className="p_icon">
          <Link to={"/product-detail/${product.id}"}>
            <i className="ti-eye"></i>
          </Link>
          <a href="#">
            <i className="ti-heart"></i>
          </a>
          <a href="#">
            <i className="ti-shopping-cart"></i>
          </a>
        </div>
      </div>
      <div className="product-btm">
        <a href="#" className="d-block">
          <h4>{product.name}</h4>
        </a>
        <div className="mt-3">
          <span className="mr-4">${product.final_price}</span>
          <del>${product.market_price}</del>
        </div>
      </div>
    </div>
  );
}
