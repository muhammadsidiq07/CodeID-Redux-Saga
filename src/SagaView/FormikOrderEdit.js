import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import OrderApi from "../api/OrderApi";
import { useDispatch, useSelector } from "react-redux";
import { EditOrderRequest, FindOrderRequest } from "../ReduxSaga/Action/OrderAction";

export default function FormikOrderEdit(props) {
  const dispatch = useDispatch();
  const { order } = useSelector((state) => state.orderState);

  useEffect(() => {
    dispatch(FindOrderRequest(props.id));
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: props.id,
      totalproduct: order.totalproduct,
      totalpirce: order.totalpirce,
    },
    onSubmit: async (values) => {
      dispatch(EditOrderRequest(values));
      props.setDisplay(false);
      window.alert("Data Successfully Updated");
      props.setRefresh(true);
    },
  });

return (
<div class="flex items-center justify-center p-10">
<form onSubmit={formik.handleSubmit} class="mx-auto w-full max-w-[600px]">
  <div class = "mx-auto w-full max-w-[600px]">
    <div class="mb-5">
      <div>
        <label for="totalproduct" class="mb-1 block text-base font-medium text-[#07074D]">Total Product</label>
          <input 
            type="text" 
            name="totalproduct" 
            id="name"
            placeholder="Total Product" 
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            value={formik.values.name} 
            onChange={formik.handleChange}>
          </input>
        </div>

<div class="mb-5">
  <label for="totalprice" class="mb-1 block text-base font-medium text-[#07074D]">Total Price</label>
    <input 
      type="text" 
        name="totalprice" 
        id="name"
        placeholder="Total Price" 
        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
        value={formik.values.name} 
        onChange={formik.handleChange}>
    </input>
  </div>
<div>

<button class="hover:shadow-form rounded-md bg-blue-500 hover:bg-blue-600 py-3 px-8 text-base font-semibold text-white outline-none mx-1 "type="submit">
  Simpan 
</button>
<button class="hover:shadow-form rounded-md bg-red-400 hover:bg-red-500 py-3 px-8 text-base font-semibold text-white outline-none" onClick={() => props.setDisplay(false)}>
  Cancel
</button>
      </div>
    </div>
  </div>
  </form>
</div>
  );
}