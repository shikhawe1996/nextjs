"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateForm = () => {
    let valid = true;
    setNameError("");
    setEmailError("");
    setPasswordError("");
    if (!name.trim()) {
      setNameError("Name is required");
      valid = false;
    }
    if (!email.trim()) {
      setEmailError("email must not be empty");
      valid = false;
    }
    if (!password.trim()) {
      setPasswordError("password must not be empty");
      valid = false;
    }

    return valid;
  };

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    router.push("/thankyou");
    console.log(handleSubmit);
  };

  return (
    <div className=" bg-white rounded-lg p-4  mx-auto mt-[20px] shadow-lg mb-[20px]">
      <h1 className="text-5xl font-bold text-orange text-center mt-[40px]">
        Sign In
      </h1>
      <form onSubmit={handleSubmit} className="max-w-[500px] mx-auto   ">
        <div className="flex flex-col gap-2">
          <label
            className="text-[20px] font-medium text-orange "
            htmlFor="name"
          >
            Name
          </label>
          <input
          onChange={(e)=>setName(e.target.value)}
            type="name"
            className="rounded-lg p-2 mb-4 text-black bg-transparent border border-orange focus:outline-none focus:ring-2 focus:ring-orange"
          />
          {nameError&& <p className="text-red-500 text-sm">{nameError}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="text-[20px] font-medium text-orange "
            htmlFor="email"
          >
            Email
          </label>
          <input
          onChange={(e)=>setEmail(e.target.value)}
            type="email"
            className="rounded-lg p-2 text-black bg-transparent border border-orange focus:outline-none focus:ring-2 focus:ring-orange"
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label
            className="text-[20px] font-medium text-orange"
            htmlFor="password"
          >
            Password
          </label>
          <input
          onChange={(e)=>setPassword(e.target.value)}
            type="password"
            className="rounded-lg p-2 text-black bg-transparent border border-orange focus:outline-none focus:ring-2 focus:ring-orange"
          />
          {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
        </div>
        <br />
        <div className="flex justify-center mb-[40px]">
          <button
            type="submit"
            className="bg-orange text-white rounded-[25px] px-[70px] py-[10px] font-bold"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
