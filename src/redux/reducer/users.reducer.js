// import { GET_PRODUCT_SUCCESS , GET_PRODUCT_START } from "../constant/product.constant";

import { GET_USER_SUCCESS } from "../constant/user.constant";

    
   const initialState={
    users:[]
   } 
const userReducer = (state = initialState,action)=>{
switch (action.type) {
    case GET_USER_SUCCESS:
        return{
            ...state,
            users:[...action.payload]
        }
    default:
        return state
}
}
export default userReducer;