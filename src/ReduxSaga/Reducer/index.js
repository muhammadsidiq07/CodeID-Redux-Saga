import { combineReducers } from 'redux';
import OrderReduce from './OrderReducer';
import UserReducer from './UserReducer';

const rootReducer = combineReducers({
    orderState: OrderReduce,
    userState: UserReducer
});

export default rootReducer;