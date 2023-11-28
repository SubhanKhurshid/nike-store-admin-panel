import React from "react";
import nike from "../../public/shubham-mittal-sCXmwaVrBio-unsplash.jpg";
import Image from "next/image";

function EditCard() {
  return (
    <div>
      <div className="flex flex-col space-y-4 items-center justify-center min-h-screen ">
        <div>
          <h1 className="text-white font-bold text-[30px] pl-10">
            Edit Product Here
          </h1>
        </div>
        <div
          className="bg-black rounded-md shadow-2xl shadow-pink-900"
          style={{ transform: "scale(0.8)" }} // Adjust the scale factor as needed
        >
          <div className="flex space-x-5">
            <div>
              <Image
                src={nike}
                alt="nike"
                className="w-[500px] h-[550px] rounded-sm"
              />
            </div>
            <div className="flex flex-col items-center justify-center space-y-5 px-10 py-6">
              <label htmlFor="productName" className="font-bold">
                Product Name
              </label>
              <input
                type="text"
                className="outline-none px-5 py-2 rounded-lg hover:border-4 duration-150 hover:border-pink-900 text-black"
              />
              <label htmlFor="productCategory" className="font-bold">
                Product Category
              </label>
              <input
                type="text"
                className="outline-none px-5 py-2 rounded-lg hover:border-4 duration-150 hover:border-pink-900 text-black"
              />
              <label htmlFor="productPrice" className="font-bold">
                Product Price
              </label>
              <input
                type="text"
                className="outline-none px-5 py-2 rounded-lg hover:border-4 duration-150 hover:border-pink-900 text-black"
              />
              <label htmlFor="productPrice" className="font-bold">
                Product Image
              </label>
              <input
                type="text"
                className="outline-none px-5 py-2 rounded-lg hover:border-4 duration-150 hover:border-pink-900 text-black"
              />
              <label htmlFor="productPrice" className="font-bold">
                Product Price
              </label>
              <input
                type="text"
                className="outline-none px-5 py-2 rounded-lg hover:border-4 duration-150 hover:border-pink-900 text-black"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCard;
