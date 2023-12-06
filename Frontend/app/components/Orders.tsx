"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
interface Orders {
  order_id: number;
  order_date: string;
  address: string;
  total_amount: number;
  quantity: number;
  productDes: string;
  productName: string;
  productPrice: number;
  productImage: string;
  categoryName: string;
  color_name: string;
  size_name: number;
}

function Orders() {
  const [orders, setOrders] = useState<Orders[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/data/check-orders"
        );
        setOrders(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Order ID
            </th>
            <th scope="col" className="px-6 py-3">
              Order Date
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
              Color Name
            </th>
            <th scope="col" className="px-6 py-3">
              Size Name
            </th>
            <th scope="col" className="px-6 py-3">
              Category Name
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              Address
            </th>
            <th scope="col" className="px-6 py-3">
              Total Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => (
              <tr
                key={order.order_id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {order.order_id}
                </td>
                <td className="px-6 py-4">{order.order_date}</td>
                <td className="px-6 py-4">
                  <div className="w-10 h-10 relative overflow-hidden rounded-full transition-transform transform hover:scale-125 duration-300">
                    <Image
                      className="object-cover w-full h-full"
                      src={order.productImage}
                      alt="Rounded avatar"
                      layout="fill"
                    />
                  </div>
                </td>

                <td className="px-6 py-4">{order.productName}</td>
                <td className="px-6 py-4">{order.productDes}</td>
                <td className="px-6 py-4">${order.productPrice}</td>
                <td className="px-6 py-4">{order.color_name}</td>
                <td className="px-6 py-4">{order.size_name}</td>
                <td className="px-6 py-4">{order.categoryName}</td>
                <td className="px-6 py-4">{order.quantity}</td>
                <td className="px-6 py-4">{order.address}</td>
                <td className="px-6 py-4">
                  ${order.productPrice * order.quantity}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
