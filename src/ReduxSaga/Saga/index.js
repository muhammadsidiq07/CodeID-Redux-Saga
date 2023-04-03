import { takeEvery,all } from "redux-saga/effects";
import * as ActionOrder from '../Constant/OrderConstant'
import { handleOrder, createOrder, findOrder, editOrder, deleteOrder } from "./OrderSaga";
import * as ActionUser from '../Constant/UserConstant'
import { handleSignin, handleSignup, handleSignout } from "./UserSaga";
function* watchAll(){
    yield all([
        takeEvery(ActionOrder.GET_ORDER_REQUEST,handleOrder),
        takeEvery(ActionOrder.ADD_ORDER_REQUEST,createOrder),
        takeEvery(ActionOrder.FIND_ORDER_REQUEST,findOrder),
        takeEvery(ActionOrder.EDIT_ORDER_REQUEST,editOrder),
        takeEvery(ActionOrder.DEL_ORDER_REQUEST,deleteOrder),
        takeEvery(ActionUser.SIGNIN_REQUEST,handleSignin),
        takeEvery(ActionUser.SIGNUP_REQUEST,handleSignup),
        takeEvery(ActionUser.SIGNOUT_REQUEST,handleSignout)

    ]);
}

export default watchAll;