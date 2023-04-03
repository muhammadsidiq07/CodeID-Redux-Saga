import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddOrderRequest } from "../ReduxSaga/Action/OrderAction";

export default function FormikOrderCreate(props) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      totalproduct: undefined,
      totalprice: undefined,
    },
    onSubmit: async (values) => {
      let payload = {
      totalproduct: values.totalproduct,
      totalprice: values.totalprice,
      };

      dispatch(AddOrderRequest(payload));
      props.setDisplay(false);
      window.alert("Data Successfully Insert");
      props.setRefresh(true);
    },
  });

  return (
    <div class = "flex items-center justify-center p-12">
    <div class = "mx-auto w-full max-w-[600px]">
      <div class = "mb-5"> 
        <label for="totalproduct" class="mb-3 block text-base font-medium text-[#07074D]">Total Product</label>
        <input
            type ='text'
            name = 'totalproduct'
            placeholder="Total Product"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            value={formik.values.totalproduct}
            onChange={formik.handleChange}>
        </input>
    </div>

    <div>
      <div class = "mb-5"> 
        <label for="totalprice" class="mb-3 block text-base font-medium text-[#07074D]">Total Price</label>
        <input
            type ="text"
            name = "totalprice"
            placeholder="Total Price"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            value={formik.values.totalprice}
            onChange={formik.handleChange}>
        </input>
    </div>
    <div>
    <button class="hover:shadow-form rounded-md bg-blue-500 hover:bg-blue-700 py-3 px-8 text-base font-semibold text-white outline-none mx-1" type="submit" onClick={formik.handleSubmit}>Simpan</button>
    <button class="hover:shadow-form rounded-md bg-red-400 hover:bg-red-500 py-3 px-8 text-base font-semibold text-white outline-none"  onClick={() => props.setDisplay(false)}>cancel</button>
    </div>
</div>
</div>
</div>
)
}