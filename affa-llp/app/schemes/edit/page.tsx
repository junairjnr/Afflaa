import Link from "next/link";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function CreateScheme() {
  return (
    // <div className="w-full h-screen bg-gradient-to-b from-green-900 to-green-900">
    <div className="w-full h-screen bg-white">
      <Navbar />
      <div className="w-full h-full flex justify-center items-start p-3 pt-[70px]">
        <div className="w-full  flex justify-center items-center flex-col ">
          {/* <Debug data={values} /> */}
          <div className="w-full  bg-gradient-to-b from-gray-100 to-green-100 flex justify-start items-center flex-col p-2 rounded-md">
            <form
            //  onSubmit={handleSubmit}
            >
              <div className="w-full h-[200px] flex justify-center items-center flex-col p-2 rounded-md border  border-slate-500">
                <div className="flex flex-row gap-3 justify-start">
                  <Link href={"/schemes"}>
                    <IoMdArrowRoundBack
                      className="mt-3 fill-gray-700"
                      size={25}
                    />
                  </Link>
                  <p className="text-2xl p-2 font-bold text-gray-600">
                    Edit Scheme
                  </p>
                </div>
                <div className="h-[60px] w-full flex flex-row justify-center items-center gap-3 p-2 mt-5">
                  <p className="w- font-semibold text-gray-600 h-full text-center flex justify-center items-center">
                    Name
                  </p>
                  :
                  <input
                    // value={values.itemCode}
                    type="text"
                    name="itemCode"
                    className="outline-none pl-3 rounded-md w-full h-full"
                    // onChange={handleChange}
                  />
                </div>
                <div className="h-[50px] w-full flex justify-center items-center m-2">
                  <button
                    type="submit"
                    className="w-[80px] h-[30px] rounded-xl font-semibold text-gray-600 bg-cyan-300 text-center flex justify-center items-center"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
