import * as ActionType  from "../Constant/OrderConstant";

export const GetOrderRequest = () => ({
    type: ActionType.GET_ORDER_REQUEST 
});

export const GetOrderSuccess = (payload) =>({
    type: ActionType.GET_ORDER_SUCCESS,
    payload,
});

export const GetOrderFailed = (payload) =>({
    type: ActionType.GET_ORDER_FAILED,
    payload,
});

export const AddOrderRequest = (payload) => ({
    type: ActionType.ADD_ORDER_REQUEST,
    payload,
});

export const AddOrderSuccess = (payload) => ({
    type: ActionType.ADD_ORDER_SUCCESS,
    payload,
});

export const AddOrderFailed = (payload) => ({
    type: ActionType.ADD_ORDER_FAILED,
    payload,
});

export const EditOrderRequest = (payload) =>({
    type: ActionType.EDIT_ORDER_REQUEST,
    payload,
});

export const EditOrderSuccess = (payload) =>({
    type: ActionType.EDIT_ORDER_SUCCESS,
    payload,
});

export const EditOrderFailed = (payload) =>({
    type: ActionType.EDIT_ORDER_FAILED,
    payload,
});

export const DelOrderRequest = (payload) =>({
    type:ActionType.DEL_ORDER_REQUEST,
    payload,
});

export const DelOrderSuccess = (payload) =>({
    type:ActionType.DEL_ORDER_SUCCESS,
    payload,
});

export const DelOrderFailed = (payload) =>({
    type:ActionType.DEL_ORDER_FAILED,
    payload,
});

export const FindOrderRequest = (payload) =>({
    type:ActionType.FIND_ORDER_REQUEST,
    payload,
});

export const FindOrderSuccess = (payload) =>({
    type:ActionType.FIND_ORDER_SUCCESS,
    payload,
});

export const FindOrderFailed = (payload) =>({
    type:ActionType.FIND_ORDER_FAILED,
    payload,
});