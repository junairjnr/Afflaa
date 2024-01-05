import Image from "next/image";
import logo from "../assets/affalogo.png";
import secure from "../assets/affasecure.png";
import { CiLock } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoMdArrowRoundForward } from "react-icons/io";
import main from "../assets/bghome.png";
import Link from "next/link";

export default function Logion() {
  return (
    <div className="w-full h-screen overflow-hidden">
      {/* <div className="w-full h-screen fy-center  bg-[url('assets/bghome.png')] bg-no-repeat flex justify-center items-center  flex-col "> */}
      <div className="w-full h-screen fy-center  bg-white bg-no-repeat flex justify-center items-center  flex-col ">
        {/* <div className="w-full h-screen bg-gradient-to-b from-green-900 to-green-900  flex justify-center items-center  flex-col "> */}
        <div className="w-full h-screen flex flex-col justify-center items-center ">
          {/* {showLoader && <Loader />} */}
          <div className="w-[300px] h-[300px] flex flex-row justify-between items-center gap-3">
            <div className="w-[50%] flex justify-center items-center">
              <Image
                alt=""
                src={logo}
                width={100}
                height={100}
                className="cursor-pointer"
              />
            </div>
            <div className="w-[50%] flex justify-between items-center flex-col">
              <p className="text-cyan-700 text-center text-3xl font-bold ">
                Dr.Investor{" "}
              </p>
              <p className="text-gray-800 text-center text-sm font-semibold ml-16">
                by Affa Llp{" "}
              </p>
            </div>
          </div>
          <div className="w-[400px] h-[400px] flex flex-col justify-center items-center mb-[90px]">
            <form className="flex flex-col ">
              <div className="w-[250px] h-[40px] bg-gray-50 flex flex-row justify-center items-center rounded-lg ring-1 ring-black">
                <div className="">
                  {/* <FaUser className="w-[49px] h-[49px] p-3 fill-[#9c0c89] " /> */}
                  <AiOutlineDollarCircle className="w-[49px] h-[49px] p-3 fill-[#034209] cursor-pointer" />
                </div>
                <div className="">
                  <input
                    // value={values.username}
                    name="username"
                    type="text"
                    placeholder="Trade Code"
                    className=" w-[200px] outline-none rounded-r-lg bg-gray-50"
                    // onChange={handleChange}
                  />
                </div>
              </div>
              {/* {touched.username && errors.username && (
                <FieldError text={errors.username} />
              )} */}
              <div className="w-[250px] h-[40px] bg-gray-50 flex flex-row justify-center items-center ring-1 ring-black rounded-lg mt-4">
                <div className="">
                  <CiLock className="w-[49px] h-[49px] p-3 fill-[#034209] cursor-pointer" />
                </div>
                <div className="">
                  <input
                    // value={values.password}
                    name="password"
                    type="password"
                    placeholder="Password"
                    className=" w-[200px] outline-none rounded-r-lg bg-gray-50"
                    // onChange={handleChange}
                  />
                </div>
              </div>
              {/* {touched.password && errors.password && (
                <FieldError text={errors.password} />
              )} */}

              <div className="flex justify-center">
                <Link href={"/dashboard"}>
                  <button
                    //   disabled={isLoading}
                    type="submit"
                    className="bg-gradient-to-r from-green-500 to-cyan-300 hover:bg-green-600 w-[250px] text-base cursor-pointer font-semibold  mt-5  rounded-lg ring-white ring-1 text-white flex justify-between p-2 items-center text-center "
                  >
                    {" "}
                    Secure Sign In
                    <IoMdArrowRoundForward size={20} />
                  </button>
                </Link>
              </div>
            </form>
          </div>
          <div className="w-full h-auto flex justify-center items-center mb-[100px]">
            {/* <Image alt="" src={secure} height={80} width={80} /> */}
            <p className="text-sm">Version 1.04</p>
          </div>
          <div className="w-full h-[100px] flex justify-center items-center text-white">
            {/* <p className="mb-[40px] text-center text-sm">
              <a
                className="text-sm font-bold pl-2 text-gray-700"
                target="_blank"
                // href="https://datastoneglobal.com/"
              >
                Affa International Llp
              </a>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
