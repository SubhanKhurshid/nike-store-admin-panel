"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import nike from "../../public/usama-akram-kP6knT7tjn4-unsplash.jpg";
import { toast } from "react-hot-toast";
import Image from "next/image";

function Login() {
  const userEmail = "abc@abc.com";
  const userPassword = "abc";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  function emailHandler(event: { target: { value: any } }) {
    setEmail(event.target.value);
  }
  function passwordHandler(event: { target: { value: any } }) {
    setPassword(event.target.value);
  }

  function handleClick(event: { preventDefault: () => void }) {
    event.preventDefault();
    if (userEmail === email) {
      if (userPassword === password) {
        router.push("/add-products");
        toast.success("Logged In");
      } else {
        toast.error("Incorrect details");
      }
    } else {
      toast.error("User Not Found");
    }
    setEmail("");
    setPassword("");
  }

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ transform: "scale(0.7)" }}
    >
      <div className="flex items-start justify-start rounded-xl bg-zinc-800 w-[950px] h-[650px] ">
        <div className="flex items-start justify-start rounded-xl shadow-2xl shadow-lime-600">
          <Image src={nike} alt={""} className="w-[560px] h-[650px]"></Image>
        </div>
        <div className="flex flex-col mt-28 px-10 py-10 min-h-screen space-y-3">
          <div>
            <h2 className="text-center italic mb-2 text-3xl font-bold text-[#cccccc] font-Montserrat ">
              SIGN IN
            </h2>
          </div>

          <div>
            <p className="mb-3 font-medium text-[#cccccc]">Email</p>
            <div className="mb-4 flex flex-col">
              <div className=" relative flex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
                <input
                  type="email"
                  id="signup-email"
                  className="w-full px-10 py-2 text-left bg-transparent text-[#cccccc] placeholder-gray-600 focus:outline-none"
                  placeholder="Enter your email"
                  onChange={emailHandler}
                />
              </div>
            </div>
          </div>
          <div>
            <p className="mb-3 font-medium text-[#cccccc]">Password</p>
            <div className="mb-5 flex flex-col">
              <div className=" relative flex overflow-hidden rounded-md border-2 transition">
                <input
                  type="password"
                  id="signup-password"
                  className="w-full px-10 py-2 text-left bg-transparent text-[#cccccc] placeholder-gray-600 focus:outline-none"
                  placeholder="Enter your Password"
                  onChange={passwordHandler}
                />
              </div>
            </div>
          </div>
          <div className="hover:shadow-blue-600/40 rounded-xl text-center  bg-gradient-to-r   from-[#6c72cb] to-[#cb69c1] px-9 py-3 font-bold text-white transition-all hover:opacity-90 hover:shadow-lg">
            <button onClick={handleClick}>Login In</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
