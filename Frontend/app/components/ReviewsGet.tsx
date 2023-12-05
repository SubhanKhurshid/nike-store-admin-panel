"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

interface Reviews {
  review_id: number;
  product_id: number;
  rating: string;
  user_review: string;
  sentiment: string;
}

function ReviewsGet() {
  const [review, setReview] = useState<Reviews[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/data/reviews");
        setReview(res.data);
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
              Review ID
            </th>
            <th scope="col" className="px-6 py-3">
              Product ID
            </th>
            <th scope="col" className="px-6 py-3">
              User Review
            </th>
            <th scope="col" className="px-6 py-3">
              Sentiment
            </th>
          </tr>
        </thead>
        <tbody>
          {review &&
            review.map((item) => (
              <tr
                key={item.review_id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <td className="px-6 py-4">{item.review_id}</td>
                <td className="px-6 py-4">{item.product_id}</td>
                <td className="px-6 py-4">{item.user_review}</td>
                <td className="px-6 py-4">{item.sentiment}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReviewsGet;
