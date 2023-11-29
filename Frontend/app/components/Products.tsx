"use client";
import axios from "axios";
import { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Product {
  productID: number;
  productDes: string;
  productName: string;
  productPrice: number;
  productImage: StaticImageData;
  categoryName: string;
  colorName: string;
  sizeName: number;
}

function Products() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  console.log(products);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8800/api/data/view-products"
        );
        setProducts(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (productId: number) => {
    console.log(productId);

    try {
      await axios.delete(
        `http://localhost:8800/api/data/view-products/${productId}`
      );
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product ID
            </th>
            <th scope="col" className="px-6 py-3">
              Product Image
            </th>
            <th scope="col" className="px-6 py-3">
              Product Name
            </th>
            <th scope="col" className="px-6 py-3">
              Product Description
            </th>
            <th scope="col" className="px-6 py-3">
              Product Price
            </th>
            <th scope="col" className="px-6 py-3">
              Category Name
            </th>
            <th scope="col" className="px-6 py-3">
              Color Name
            </th>
            <th scope="col" className="px-6 py-3">
              Size Name
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product) => (
              <tr
                key={product.productID}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {product.productID}
                </td>
                <td className="px-6 py-4">
                  <div className="w-10 h-10 relative overflow-hidden rounded-full transition-transform transform hover:scale-125 duration-300">
                    <Image
                      className="object-cover w-full h-full"
                      src={product.productImage}
                      alt="Rounded avatar"
                      layout="fill"
                    />
                  </div>
                </td>
                <td className="px-6 py-4">{product.productName}</td>
                <td className="px-6 py-4">{product.productDes}</td>
                <td className="px-6 py-4">${product.productPrice}</td>
                <td className="px-6 py-4">{product.categoryName}</td>
                <td className="px-6 py-4">{product.colorName}</td>
                <td className="px-6 py-4">{product.sizeName}</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline pr-4"
                  >
                    Edit
                  </a>
                  <button
                    onClick={() => handleDelete(product.productID)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
