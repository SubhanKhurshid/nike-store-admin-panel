"use client";
import React, { useEffect, useState } from "react";
import nike from "../../public/shubham-mittal-sCXmwaVrBio-unsplash.jpg";
import Image from "next/image";
import axios from "axios";
import { useParams } from "next/navigation";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

interface Categories {
  categoryId: number;
  name: string;
}

interface Sizes {
  size_id: number;
  size_name: string;
}

interface Colors {
  color_id: number;
  color_name: string;
}

function EditCard() {
  const router = useRouter();
  const { id } = useParams();
  const [product, setProduct] = useState({
    productID: id,
    productName: "",
    productDes: "",
    productPrice: "",
  });

  const [category, setCategory] = useState<Categories[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [colors, setColors] = useState<Colors[]>([]);
  const [selectedColor, setSelectedColor] = useState("");
  const [sizes, setSizes] = useState<Sizes[]>([]);
  const [selectedSize, setSelectedSizes] = useState("");
  const [file, setFile] = useState("");

  const uploadImage = async () => {
    try {
      const formData = new FormData();
      console.log(file);
      formData.append("file", file);
      console.log(file);
      const res = await axios.post(
        "http://localhost:5000/api/upload",
        formData
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/data/sizes");
        setSizes(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/data/colors");
        setColors(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/data/categories"
        );
        setCategory(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e: any) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const imageUrl = await uploadImage();
    try {
      const response = await axios.put(
        `http://localhost:5000/api/data/edit-product/${id}`,
        {
          productID: id,
          productName: product.productName,
          productDes: product.productDes,
          productPrice: product.productPrice,
          // categoryId: selectedCategory,
          // colorId: selectedColor,
          // sizeId: selectedSize,
          productImg: file ? imageUrl : "",
        }
      );
      toast.success("Updated");
      router.push("/view-products");
      setProduct({
        productID: id,
        productName: "",
        productDes: "",
        productPrice: "",
      });

      setSelectedCategory("");
      setSelectedColor("");
      setSelectedSizes("");
      router.push("view-products");
    } catch (e) {
      console.log(e);
    }
  };

  const handleClear = (e: any) => {
    e.preventDefault();
    setProduct({
      productID: id,
      productName: "",
      productDes: "",
      productPrice: "",
    });
    setSelectedCategory("");
    setSelectedColor("");
    setSelectedSizes("");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <div>
          <h1 className="text-white font-bold text-[30px] pl-10">
            Edit Product Here
          </h1>
        </div>
        <div
          className="bg-black rounded-md shadow-2xl shadow-pink-900 -mt-24"
          style={{ transform: "scale(0.7)" }}
        >
          <div className="flex space-x-5">
            <div>
              <Image
                src={nike}
                alt="nike"
                className="w-[850px] h-[850px] rounded-sm"
              />
            </div>
            <div className="flex flex-col items-center justify-center space-y-5 px-10 py-6">
              <label className="font-bold italic">Product Name</label>
              <input
                type="text"
                className="outline-none px-5 py-2 rounded-lg border-4 duration-150 border-pink-900 text-black"
                name="productName"
                value={product.productName}
                onChange={(e) => handleChange(e)}
              />
              <label className="font-bold italic">Product Description</label>
              <input
                type="text"
                className="outline-none px-5 py-2 rounded-lg border-4 duration-150 border-pink-900 text-black"
                name="productDes"
                value={product.productDes}
                onChange={(e) => handleChange(e)}
              />
              <label className="font-bold italic">Product Price</label>
              <input
                type="number"
                className="outline-none px-5 py-2 rounded-lg border-4 duration-150 border-pink-900 text-black"
                name="productPrice"
                value={product.productPrice}
                onChange={(e) => handleChange(e)}
              />
              {/* <label className="font-bold italic">Select Category</label>
              <select
                className="text-black border-4 border-pink-900 rounded-md py-2 px-4 focus:outline-none focus:border-pink-900"
                name="categoryId"
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option className="text-black font-bold italic">
                  Select a category
                </option>
                {category.map((item) => (
                  <option
                    className="text-black"
                    key={item.categoryId}
                    value={item.categoryId}
                  >
                    {item.categoryId}
                  </option>
                ))}
              </select> */}
              {/* 
              <label className="font-bold italic">Select Colors</label>
              <select
                className="text-black border-4 border-pink-900 rounded-md py-2 px-4 focus:outline-none focus:border-pink-900"
                name="colorId"
                id="color"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
              >
                <option className="text-black font-bold italic">
                  Select a color
                </option>
                {colors.map((item) => (
                  <option
                    className="text-black"
                    key={item.color_id}
                    value={item.color_id}
                  >
                    {item.color_id}
                  </option>
                ))}
              </select> */}
              {/* <label className="font-bold italic">Select Sizes</label>
              <select
                className="text-black  border-4 border-pink-900 rounded-md py-2 px-4 focus:outline-none focus:border-pink-900"
                name="sizeId"
                id="sizes"
                value={selectedSize}
                onChange={(e) => setSelectedSizes(e.target.value)}
              >
                <option className="text-black  font-bold italic">
                  Select Size
                </option>
                {sizes.map((item) => (
                  <option
                    className="text-black"
                    key={item.size_id}
                    value={item.size_id}
                  >
                    {item.size_id}
                  </option>
                ))}
              </select> */}
              <div className="flex flex-col space-y-4 pl-20">
                <label className="text-white font-bold pl-12">
                  Product Image
                </label>
                <label>
                  <input
                    type="file"
                    id="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="text-sm text-white file:py-2 file:px-6 file:border-0 file:text-sm file:font-medium file:bg-pink-900 file:text-white hover:file:cursor-pointer hover:file:opacity-80 italic"
                  />
                </label>

                <div className="flex space-x-4">
                  <button
                    onClick={handleSubmit}
                    className="bg-pink-900 text-white font-bold px-4 py-2 hover:opacity-80"
                  >
                    <a href="">Submit</a>
                  </button>
                  <button
                    onClick={handleClear}
                    className="bg-pink-900 text-white font-bold px-4 py-2 hover:opacity-80"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditCard;
