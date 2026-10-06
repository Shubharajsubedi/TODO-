import React, { useState } from 'react'
import { getUser } from '../../api/Users'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const [error,setError] = useState("")

  const handleLogin = async (data) => {
    setError("")
    const { email, password } = data

    if (!email || !password) {
      setError('Please enter both email and password.')
      return
    }

    try {
      const res = await getUser()
      const foundUser = res.data.find(
        (usr) => usr.email === email && usr.password === password
      )

      if (!foundUser) {
        setError('Invalid email or password.')
        return
      }

      navigate('/user')
    } catch (error) {
      console.log(error)
    }
  }

  return (
  
<div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

  {/* Login Card */}
  <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-md">

    {/* Heading */}
    <div className="text-center mb-6">
      <h2 className="text-3xl font-bold text-gray-800">
        Welcome Back
      </h2>

      <p className="text-gray-500 mt-2">
        Login to manage your daily tasks
      </p>
    </div>


    {/* Login Form */}
    <form onSubmit={handleSubmit(handleLogin)}>

      {/* Email */}
      <div className="mb-4">

        <label className="block text-gray-700 font-medium mb-2">
          Email
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-lg px-4 py-3
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register('email', {
            required: 'Email is required'
          })}
        />

        {/* Email Error */}
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">
            {errors.email.message}
          </p>
        )}

      </div>


      {/* Password */}
      <div className="mb-4">

        <label className="block text-gray-700 font-medium mb-2">
          Password
        </label>

        <input
          type="password"
          placeholder="Enter your password"
          className="w-full border border-gray-300 rounded-lg px-4 py-3
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 3,
              message: 'Password cannot be less than 3 characters.'
            },
          })}
        />

        {/* Password Error */}
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">
            {errors.password.message}
          </p>
        )}

      </div>


      {/* API/Login Error */}
      {error && (
        <p className="text-red-500 text-sm text-center mb-4">
          {error}
        </p>
      )}


      {/* Login Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg
                   font-medium hover:bg-blue-700 transition duration-200"
      >
        Login
      </button>

    </form>

  </div>

</div>


  )
}

export default Login