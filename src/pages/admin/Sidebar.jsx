import { signOut } from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../FirebaseConfig";
// import { error } from "jquery";

export default function Sidebar() {
  const navigate = useNavigate()
  const logout =() =>{
    signOut(auth).then (() =>{
      navigate('/login')
    }).catch((error) => {

    })
  }
  return (
    <ul className="list-group">
      <li className="list-group-item disabled" aria-disabled="true">
        side bar
      </li>
      <li className="list-group-item">
        <Link to="/admin/profile">Profile</Link>
      </li>
      <li className="list-group-item">
        <Link to="/admin/category">Category</Link>
      </li>
      <li className="list-group-item">
        <Link to="/admin/product">products</Link>
      </li>
      <li className="list-group-item">
        <a href="#" onClick={logout}>logout</a>
      </li>
     
    </ul>
  );
}
