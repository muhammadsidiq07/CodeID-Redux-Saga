import { call, put } from 'redux-saga/effects';
import OrderApi from '../../api/OrderApi';
import { GetOrderSuccess, 
    GetOrderFailed, 
    AddOrderSuccess, 
    AddOrderFailed, 
    FindOrderSuccess, 
    FindOrderFailed, 
    EditOrderSuccess, 
    EditOrderFailed } from '../Action/OrderAction.js';

function* handleOrder() {
    try {
        const result = yield call(OrderApi.list);
        console.log(result);
        yield put(GetOrderSuccess(result));
    } catch (error) {
        yield put(GetOrderFailed(error));
    }
}
function* createOrder(action) {
    const { payload } = action;
    try {
        const result = yield call(OrderApi.create, payload);
        yield put(AddOrderSuccess(result.data));
        
    } catch (error) {
        yield put(AddOrderFailed(error));
    }
}
function* findOrder(action) {
    const { payload } = action;
    try {
        const result = yield call(OrderApi.findOne, payload);
        yield put(FindOrderSuccess(result));
    } catch (error) {
        yield put(FindOrderFailed(error));
    }
}
function* editOrder(action) {
    const {payload} = action;
    try {
        const result = yield call(OrderApi.update, payload);
        yield put(EditOrderSuccess(result.data));
    } catch (error) {
       yield put (EditOrderFailed(error)); 
    }
}

function* deleteOrder(action) {
    const { payload } = action;
    try {
      const result = yield call(OrderApi.deleted, payload);
      yield put(EditOrderSuccess(result.data));
    } catch (error) {
      yield put(EditOrderFailed(error));
    }
  }

export {
    handleOrder,
    createOrder,
    findOrder,
    editOrder,
    deleteOrder
}