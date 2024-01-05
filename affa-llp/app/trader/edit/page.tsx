"use client";

import Link from "next/link";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import { IoMdArrowRoundBack } from "react-icons/io";
// import { useMutation, useQuery } from "react-query";
// import Navbar from "../Navbar";
// import { get, post } from "../app_packages/http-client";
// import { useFormik } from "formik";
// import { getUserContext } from "../app_packages/tocken";
// import toast from "react-hot-toast";
// import { useRouter } from "next/navigation";
// import { CustomerForm } from "../Types";
// import { useEffect, useState } from "react";
// import { Debug } from "../debugg";

export default function CreateTrader() {
  //   const { data: code } = useQuery(["LedgerCode"], () =>
  //     get("/Ledger/NextCode")
  //   );

  //   const itemCode = code?.nextItemCode;
  //   const [nextCode, setNextCode] = useState("0");
  //   const [ledgerGroupId, setLedgerGroupId] = useState(0);

  //   useEffect(() => {
  //     const userContext = getUserContext();
  //     const ledgerGroupsId = userContext?.sundryDebtor;

  //     setNextCode(itemCode);

  //     setLedgerGroupId(ledgerGroupsId);
  //   }, [code, ledgerGroupId,itemCode]);

  //   const router = useRouter();

  //   const formik = useFormik<CustomerForm>({
  //     initialValues: {
  //       ledgerCode: nextCode,
  //       ledgerGroupId: ledgerGroupId,
  //       openingBal: 0,
  //       drOrCr: 0,
  //       branchId: 0,
  //       name: "",
  //       mobile: "",
  //       gstin: "",
  //     },
  //     onSubmit: (values) => {
  //       createCustomerMutation.mutate(values);
  //     },
  //     enableReinitialize: true,
  //   });

  //   const createCustomerMutation = useMutation(
  //     (values: CustomerForm) => {
  //       const v = { ...values };
  //       v.ledgerCode = values.ledgerCode.toString();
  //       v.ledgerGroupId = +values.ledgerGroupId;
  //       v.name = values.name;
  //       v.mobile = values.mobile;
  //       v.gstin = values.gstin;
  //       return post("/Ledger", v);
  //     },
  //     {
  //       onSuccess() {
  //         toast.success("Customer Created Successfully...");
  //         router.push("/dashboard");
  //       },
  //       onError(e) {
  //         toast.error("Something went wrong");
  //         console.log(e);
  //       },
  //     }
  //   );

  //   const { values, handleChange, handleSubmit } = formik;

  return (
    <div className="w-full h-screen bg-white">
      <Navbar />
      <div className="w-full h-full flex justify-center items-start p-3 pt-[50px]">
        <div className="w-full  flex justify-center items-center flex-col p-1">
          {/* <Debug data={values} /> */}
          <div className="w-full h-full bg-gradient-to-b from-green-100 to-lime-100 flex justify-start items-center flex-col p-2 rounded-md">
            <div className="w-full h-full flex  flex-col p-2 rounded-md border border-slate-500">
              <div className="flex flex-row gap-3 justify-start">
                <Link href={"/trader"}>
                  <IoMdArrowRoundBack
                    className="mt-3 fill-gray-700"
                    size={25}
                  />
                </Link>
                <p className="text-2xl p-2 font-bold text-gray-600">
                  Edit Trader
                </p>
              </div>
              <form
              // onSubmit={handleSubmit}
              >
                <div className="h-[50px] w-full flex flex-row justify-center items-center gap-3 p-2 mt-2">
                  {/* <p className="w-[150px] font-semibold text-gray-600 h-full text-center flex justify-center items-center"> */}
                  <p className="w-[150px] font-semibold text-gray-600 h-full ">
                    Name
                  </p>
                  :
                  <input
                    // value={values.name}
                    type="text"
                    name="name"
                    className="outline-none pl-3 rounded-md w-full h-full"
                    // onChange={handleChange}
                    required
                  />
                </div>
                <div className="h-[50px] w-full flex flex-row justify-center items-center gap-3 p-2">
                  <p className="w-[150px] font-semibold text-gray-600 h-full ">
                    T Code
                  </p>
                  :
                  <input
                    type="text"
                    name="ledgerCode"
                    className="outline-none pl-3 rounded-md w-full h-full"
                    // value={values.ledgerCode}
                    // onChange={handleChange}
                    required
                  />
                </div>
                <div className="h-[50px] w-full flex flex-row justify-center items-center gap-3 p-2">
                  <p className="w-[150px] font-semibold text-gray-600 h-full ">
                    Password
                  </p>
                  :
                  <input
                    type="text"
                    name="ledgerCode"
                    className="outline-none pl-3 rounded-md w-full h-full"
                    // value={values.ledgerCode}
                    // onChange={handleChange}
                    required
                  />
                </div>
                <div className="h-[50px] w-full flex flex-row justify-center items-center gap-3 p-2">
                  <p className="w-[150px] font-semibold text-gray-600 h-full ">
                    Mobile
                  </p>
                  :
                  <input
                    // value={values.mobile}
                    type="text"
                    name="mobile"
                    className="outline-none pl-3 rounded-md w-full h-full"
                    // onChange={handleChange}
                    required
                  />
                </div>
                <div className="h-[50px] w-full flex flex-row justify-center items-center gap-3 p-2">
                  <p className="w-[150px] font-semibold text-gray-600 h-full ">
                    C Address
                  </p>
                  :
                  <textarea
                    name="header"
                    id="header"
                    // onChange={handleChange}
                    className="outline-none pl-3 rounded-md w-full h-full"
                  >
                    {/* {values.header} */}
                  </textarea>
                </div>
                <div className="h-[50px] w-full flex flex-row justify-center items-center gap-3 p-2">
                  <p className="w-[150px] font-semibold text-gray-600 h-full ">
                    P Address
                  </p>
                  :
                  <textarea
                    name="header"
                    id="header"
                    // onChange={handleChange}
                    className="outline-none pl-3 rounded-md w-full h-full"
                  >
                    {/* {values.header} */}
                  </textarea>
                </div>
                <div className="h-[50px] w-full flex flex-row justify-center items-center gap-3 p-2">
                  <p className="w-[150px] font-semibold text-gray-600 h-full ">
                    Bank
                  </p>
                  :
                  <textarea
                    name="header"
                    id="header"
                    // onChange={handleChange}
                    className="outline-none pl-3 rounded-md w-full h-full"
                  >
                    {/* {values.header} */}
                  </textarea>
                </div>
                <div className="h-[50px] w-full flex flex-row justify-center items-center gap-3 p-2">
                  <p className="w-[150px] font-semibold text-gray-600 h-full ">
                    Scheme
                  </p>
                  :
                  <select
                    name="category"
                    // value={values.category}
                    className="outline-none pl-3 rounded-md w-full h-full"
                    // onChange={handleChange}
                    required
                  >
                    <option>select</option>
                    <option>Schem 1</option>
                    <option>Scheme 2</option>
                    <option>Scheme 3</option>
                    {/* {category?.map((dcat: any, index: number) => (
                      <option key={index} value={dcat.diaryCategoryId}>
                        {dcat.diaryCategoryName}
                      </option>
                    ))} */}
                  </select>
                </div>
                <div className="h-[50px] w-full flex flex-row justify-center items-center gap-3 p-2">
                  <p className="w-[150px] font-semibold text-gray-600 h-full ">
                    Note
                  </p>
                  :
                  <textarea
                    name="header"
                    id="header"
                    // onChange={handleChange}
                    className="outline-none pl-3 rounded-md w-full h-full"
                  >
                    {/* {values.header} */}
                  </textarea>
                </div>
                <div className="h-[50px] w-full flex flex-row justify-center items-center gap-3 p-2">
                  <p className="w-[150px] font-semibold text-gray-600 h-full ">
                    Remarks
                  </p>
                  :
                  <textarea
                    name="header"
                    id="header"
                    // onChange={handleChange}
                    className="outline-none pl-3 rounded-md w-full h-full"
                  >
                    {/* {values.header} */}
                  </textarea>
                </div>
                <div className="h-[50px] w-full flex justify-center items-center m-2">
                  <button
                    type="submit"
                    className="w-[100px] h-[50px] rounded-xl font-semibold text-gray-600 bg-cyan-300 text-center flex justify-center items-center"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
