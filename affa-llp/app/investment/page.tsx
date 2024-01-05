import Link from "next/link";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Dashboard() {
  return (
    // <div className="w-full h-screen bg-gradient-to-b from-green-900 to-green-900">
    <div className="w-full h-screen bg-white">
      <Navbar />
      <div className="w-full h-full flex justify-center items-start p-3 pt-[50px]">
        <div className="w-full  flex justify-center items-center flex-col p-2">
          {/* <Debug data={values} /> */}
          <div className="w-full h-full bg-gradient-to-b from-gray-100 to-green-100 flex justify-start items-center flex-col p-2 rounded-md">
            <div className="w-full h-full flex justify-center items-center flex-col p-2 rounded-md border border-slate-500">
              <div className="flex flex-row gap-2 justify-start">
                <Link href={"/dashboard"}>
                  <IoMdArrowRoundBack
                    className="mt-3 fill-gray-700"
                    size={25}
                  />
                </Link>
                <p className="text-2xl p-2 font-bold text-gray-600">
                  Create Investment
                </p>
              </div>
              <form
              // onSubmit={handleSubmit}
              >
                <div className="h-[50px] w-full flex flex-row justify-center items-center gap-3 p-2">
                  <p className=" font-semibold text-gray-600 h-full text-center flex justify-center items-center">
                    Date
                  </p>
                  :
                  <input
                    // value={values.itemCode}
                    type="date"
                    name="itemCode"
                    className="outline-none pl-3 rounded-md w-[200px] h-full"
                    // onChange={handleChange}
                  />
                </div>
                <div className="h-[50px] w-full flex flex-row justify-center items-center gap-3 p-2 mt-4">
                  <p className=" font-semibold text-gray-600 h-full text-center flex justify-center items-center">
                    Trader
                  </p>
                  :
                  <select
                    name="itemGroupId"
                    // value={values.itemGroupId}
                    // onChange={handleChange}
                    className="outline-none pl-3 text-sm rounded-md w-[200px] h-full"
                    required
                  >
                    <option>select Trader 1</option>
                    <option>select Trader 2</option>
                    <option>select Trader 3</option>
                    <option>select Trader </option>
                    {/* {itemGroup?.map((x: any, index: number) => (
                  <option key={index} value={x.id}>
                    {x.itemGroupName}
                  </option>
                ))} */}
                  </select>
                </div>
                <div className="h-[50px] w-full flex flex-row justify-center items-center gap-3 p-2">
                  <p className=" font-semibold text-gray-600 h-full text-center flex justify-center items-center">
                    Amount
                  </p>
                  :
                  <input
                    // value={values.itemCode}
                    type="text"
                    name="itemCode"
                    className="outline-none pl-3 rounded-md w-[200px] h-full"
                    // onChange={handleChange}
                  />
                </div>
                <div className="w-full h-auto flex flex-col justify-center items-start p-2">
                  <p className="text-red-700 font-semibold">Note : starts with 2000/-</p>
                  <p className="text-red-700 font-semibold">Remark : starts with 2000/-</p>
                  
                </div>
                <div className="h-[50px] w-full flex justify-center items-center m-2">
                  <button
                    type="submit"
                    className="w-[80px] h-[30px] rounded-xl font-semibold text-gray-600 bg-cyan-300 text-center flex justify-center items-center"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
