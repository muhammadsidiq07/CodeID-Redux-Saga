import * as ActionType from '../Constant/OrderConstant'

const INIT_STATE = {
    orders: [],
    order: [],
};

const OrderReduce = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_ORDER_REQUEST: 
            return { ...state }
        case ActionType.GET_ORDER_SUCCESS:
            return GetOrderSuccessfully(state, action)
        case ActionType.ADD_ORDER_REQUEST:
            return { ...state }
        case ActionType.ADD_ORDER_SUCCESS:
            return AddOrderSuccessfully(state, action)
        case ActionType.FIND_ORDER_REQUEST:
            return { ...state }
        case ActionType.FIND_ORDER_SUCCESS:
            return FindOrderSuccessfully(state, action)
        case ActionType.EDIT_ORDER_REQUEST:
            return { ...state }
        case ActionType.EDIT_ORDER_SUCCESS:
            return EditOrderSuccessfully(state, action)
        case ActionType.DEL_ORDER_REQUEST: 
            return { ...state }
        case ActionType.DEL_ORDER_SUCCESS:
            return DeleteOrderSuccessfully(state, action)
        default:
            return { ...state };  
    };
};

const GetOrderSuccessfully = (state, action) => {
    console.log(state);
    return {
        ...state,
        orders: action.payload,
    };
};

const AddOrderSuccessfully = (state, action) => {
    const { payload } = action;
    return {
        ...state,
        orders: [...state.orders, payload],
    };
};

const FindOrderSuccessfully = (state, action) => {
    const { payload } = action;
    return {
        ...state,
        order: payload,
    };
};

const EditOrderSuccessfully = (state,action) => {
    return {
        ...state,
    };
};

const DeleteOrderSuccessfully = (state, action) => {
    return {
      ...state,
    };
  };

export default OrderReduce;