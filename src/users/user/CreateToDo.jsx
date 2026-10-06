import React, { useState } from 'react'
import {useForm} from "react-hook-form"
import { createTodo } from '../../api/Todo'

const CreateToDo = () => {

  const {handleSubmit, register} = useForm()
  const [todo, setTodo] = useState([])

  const onsubmit = async(data) => {
    try {
      const res = await createTodo(data)
      setTodo((prev) => [...prev,res.data])

    } catch (error) {
      console.log(error)
    }
  }

  return (
   
  <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

    <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-md">

      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Create Your Daily Goal
      </h2>

      <form onSubmit={handleSubmit(onsubmit)}>

        <label className="block text-gray-700 font-medium mb-2">
          Task
        </label>

        <input
          type="text"
          placeholder="Enter your daily task"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("task")}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Add Goal
        </button>

      </form>

    </div>

  </div>


  )
}

export default CreateToDo