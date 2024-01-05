import Footer from "@/app/Footer";
import Navbar from "@/app/Navbar";

export default function EditAccount() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="w-full h-full p-4 bg-gray-300 pt-[50px] ">
        <div className="flex justify-center items-center flex-col ">
          <p className="text-2xl font-bold pt-2">Edit Account</p>
          <div className="flex justify-center flex-row pt-3">
            <form className="h-full w-full flex justify-start items-start">
              <div className="w-full h-auto flex flex-col">
                <div className="w-[350px] flex flex-col p-2 gap-2">
                  <p className="text-lg">Communication Address :</p>
                  <textarea
                    name="header"
                    id="header"
                    // onChange={handleChange}
                    className="w-full  outline-none p-2 rounded-md"
                  >
                    {/* {values.header} */}
                  </textarea>
                </div>
                <div className="w-[350px] flex flex-col p-2 gap-2">
                  <p className="text-lg">Permanent Address :</p>
                  <textarea
                    name="header"
                    id="header"
                    // onChange={handleChange}
                    className="w-full  outline-none p-2 rounded-md"
                  >
                    {/* {values.header} */}
                  </textarea>
                </div>
                <p className="text-lg font-bold">Bank Account :</p>
                <div className="w-[350px] flex flex-row  items-center p-2 gap-2">
                  <p className="text-center w-[100px]">A/C Holder:</p>
                  <input
                    name="header"
                    id="header"
                    // onChange={handleChange}
                    className=" outline-none p-1 rounded-md pl-2"
                  />
                </div>
                <div className="w-[350px] flex flex-row  items-center p-2 gap-2">
                  <p className="text-center w-[100px]">A/C No:</p>
                  <input
                    name="header"
                    id="header"
                    // onChange={handleChange}
                    className=" outline-none p-1 rounded-md pl-2"
                  />
                </div>
                <div className="w-[350px] flex flex-row  items-center p-2 gap-2">
                  <p className="text-center w-[100px]">Ifsc</p>
                  <input
                    name="header"
                    id="header"
                    // onChange={handleChange}
                    className=" outline-none p-1 rounded-md pl-2"
                  />
                </div>
                <div className="w-[350px] flex flex-row  items-center p-2 gap-2">
                  <p className="text-center w-[100px]">Branch</p>
                  <input
                    name="header"
                    id="header"
                    // onChange={handleChange}
                    className=" outline-none p-1 rounded-md pl-2"
                  />
                </div>
                <div className="w-full h-auto flex justify-center mt-2 items-end">
                  <button className="w-[100px] h-[40px] bg-gray-700 text-white rounded-lg hover:bg-blue-50 cursor-pointer ">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
