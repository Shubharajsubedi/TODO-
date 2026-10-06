import React, { useEffect, useState } from 'react'
import { getTodo } from '../../api/Todo'

const ViewTodo = () => {

    const [todo,setTodo] = useState([])
    

    useEffect(() => {
        const fetchData = async() => {
            try {
            const res = await getTodo()
                setTodo(res.data)
            } catch (error) {
            console.log(error)  
            }
        }
    fetchData()   
    },[])
    
  return (
            
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

        <div className="bg-white w-full max-w-2xl p-8 rounded-xl shadow-md">

            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Your Goals for Today
            </h2>

            <table className="w-full border-collapse">

            <thead>
                <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-gray-700">
                    Task Completion
                </th>

                <th className="text-left py-3 px-4 text-gray-700">
                    Your Tasks
                </th>
                </tr>
            </thead>

            <tbody>
                {todo && todo.map((tod) => (
                <tr
                    key={tod.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                >
                    <td className="py-4 px-4">
                    <input
                        type="checkbox"
                        className="w-5 h-5 accent-blue-600 cursor-pointer"
                    />
                    </td>

                    <td className="py-4 px-4 text-gray-800">
                    {tod.task}
                    </td>
                </tr>
                ))}
            </tbody>

            </table>

        </div>

    </div>


  )
}

export default ViewTodo