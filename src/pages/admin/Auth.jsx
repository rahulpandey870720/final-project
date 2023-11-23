import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../admin/Sidebar"
import { useDispatch, useSelector } from "react-redux";
import { getCategoryStart } from "../../redux/action/category.action";
import {getProductStart } from "../../redux/action/product.action"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../FirebaseConfig";



export default function Auth() {
  const navigate = useNavigate();
  let categories = useSelector(state => state.category.categories)
  let [user , setuser] = useState({})

  const dispatch =useDispatch();
const checkuserAuthentication = () =>{
  onAuthStateChanged(auth,(user) =>{
    if(user){
      const uid = user.uid;
      setuser(user);
    }else{
      navigate('/login')
    }
  })
}

  useEffect(() => {
    checkuserAuthentication()
    dispatch(getCategoryStart());
    dispatch(getProductStart())
  },[categories.length , user.uid ])
  return (
    <div className="container mb 4">
      <div className="row">
        <div className="col-sm-3">
          <Sidebar />
        </div>
        <div className="col-sm-9">
        <Outlet />
      </div>
      </div>
      
    </div>
  );
}
