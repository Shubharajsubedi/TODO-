import React, { useState } from 'react'
import { postUser } from '../../api/Users'
import {useForm} from "react-hook-form"

const Register = () => {
    const [user,setUser] = useState([])


    const onsubmit =  async(data) => {
        try {
          const res = await postUser(data);
          setUser([...user,res.data])
          
        } catch (error) {
         console.log(error)   
        }
    }

    const {register,handleSubmit,watch,formState:{errors},} =useForm();

  return (
   
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

        <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-md">

            <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Create Account
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Register to start managing your daily tasks
                    </p>
                </div>

                <form onSubmit={handleSubmit(onsubmit)}>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">
                    Username
                    </label>

                    <input
                    type="text"
                    placeholder="Enter your username"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...register("username", {
                        required: "Username is required",
                        minLength: {
                        value: 3,
                        message: "Username must be at least 3 characters"
                        },
                        maxLength: {
                        value: 20,
                        message: "Username cannot exceed 20 characters"
                        }
                    })}
                    />

                    {errors.username && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.username.message}
                    </p>
                    )}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">
                    Email
                    </label>

                    <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...register("email", {
                        required: "Email is required"
                    })}
                    />

                    {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                    </p>
                    )}
            </div>

            <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                Password
                </label>

                <input
                type="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("password", {
                    required: "Password is required",
                    minLength: {
                    value: 8,
                    message: "Password cannot be less than 8 characters"
                    }
                })}
                />

                {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                </p>
                )}
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
            >
                Register
            </button>

            </form>

        </div>

    </div>


  )
}

export default Register