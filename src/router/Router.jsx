import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Shopcategory from "../pages/Shopcategory";
import Productdetails from "../pages/Productdetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Auth from "../pages/admin/Auth";
import Profile from "../pages/admin/Profile";
import Products from "../pages/admin/product/products";
import AddOrEditProduct from "../pages/admin/product/AddorEditProduct"
import Users from "../pages/admin/user/Users";
import AddorEditUsers from "../pages/admin/user/AddorEditUsers"
import Orders from "../pages/admin/order/Orders";
import Orderview from "../pages/admin/order/Orderview";
import AddorEditcategories from "../pages/admin/categories/AddorEditcategories"
import Categories from "../pages/admin/categories/Categories";


export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop-category" element={<Shopcategory />} />
      <Route path="/product-details" element={<Productdetails />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      
      <Route path="/admin" element={<Auth />}>
        {/* dashboard page*/}
        <Route path="profile" element={<Profile />} />
        {/* product  page Route */}
        <Route path="product" element={<Products />} />
        <Route path="product/create" element={<AddOrEditProduct />} />
        <Route path="product/edit/:id" element={<AddOrEditProduct />} />
        {/* category  page Route */}
        <Route path="category" element={<Categories/>} />
        <Route path="category/create" element={<AddorEditcategories/>} />
        <Route path="category/edit/:id" element={<AddorEditcategories />} />
        {/* user  page Route */}
        <Route path="users" element={<Users />} />
        <Route path="users/create" element={<AddorEditUsers />} />
        <Route path="users/edit/:id" element={<AddorEditUsers />} />
        {/* order  page Route */}
        <Route path="order" element={<Orders />} />
        <Route path="order/:id" element={<Orderview />} />
      </Route>
    </Routes>
  );
}
