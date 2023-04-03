import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DelOrderRequest, GetOrderRequest } from '../ReduxSaga/Action/OrderAction'
import FormikOrderCreate from './FormikOrderCreate'
import FormikOrderEdit from './FormikOrderEdit'
import "../App.css";

export default function OrderSaga() {
const dispatch = useDispatch()
const { orders } = useSelector(state => state.orderState)
const [refresh, setRefresh] = useState(false)
const [display, setDisplay] = useState(false)
const [displayEdit, setDisplayEdit] = useState(false)
const [id, setId] = useState()

useEffect(() => {
    dispatch(GetOrderRequest())
}, [refresh]);


const onClick = (id) => {
    setDisplayEdit(true)
    setId(id)
}

const onDelete = (id) => {
    dispatch(DelOrderRequest(id));
    window.alert("Delete Data Successfully ");
    setDisplay(false)
    setRefresh(!refresh)
    setId(id)
};

return (
    <div>
        {
            displayEdit ? ( <FormikOrderEdit
                setRefresh={setRefresh}
                setDisplay={setDisplayEdit}
                id={id} /> ) : 
                display ? (<FormikOrderCreate
                setRefresh={setRefresh}
                setDisplay={setDisplay} /> ) : (
            <>

<h2 className="mx-2 my-2">List Order</h2>
    <button onClick={() => setDisplay(true)} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-2"> Add Order</button>
        <div className="flex items-center justify-center">
            <div className="container">
            <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                <thead class="text-white">
                <tr class="bg-blue-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th class="p-3 text-left">Order ID</th>
                <th class="p-3 text-left">Total Product</th>
                <th class="p-3 text-left">Price</th>
                <th class="p-3 text-left">Created AT</th>
                <th class="p-3 text-left">Update AT</th>
            <th class="p-3 text-left" width="110px"> Actions </th>
        </tr>
</thead>
    <tbody class="flex-1 sm:flex-none">                   
        {orders && orders.map(reg => {
            return (
                <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 pr-4" key={reg.orderId}>
                    <td class="border-grey-light border hover:bg-gray-100 p-3">{reg.orderId}</td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3">{reg.totalproduct}</td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3">{reg.totalprice}</td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3">{reg.createdat}</td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3">{reg.updatedat}</td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 cursor-pointer">       
                <div class="flex items-center justify-center">
            <button onClick={() => onClick(reg.orderId)} class="group h-10 w-[80px] border border-green-500 rounded-md hover:bg-green-600 px-4 py-2 m-2 bg-green-500 text-white relative overflow-hidden">Edit </button> 
            <button onClick={() => onDelete(reg.orderId)} class="border border-red-500 bg-red-500 text-white rounded-md h-10 w-[80px] px-4 py-2 m-2  hover:bg-red-600 focus:outline-none focus:shadow-outline">Delete </button>
        </div>
        </td>
        </tr>
        );
        })}
    </tbody>
    </table>
    </div>
    </div>
</>
)}
</div>
);
}