import{all, fork} from 'redux-saga/effects'
import{category} from './category.saga'
import { product } from './product.saga'
import { user } from './user.saga'
export function* root(){
    yield all([
       fork(category) ,
       fork(product),
       fork(user)

    ])
}