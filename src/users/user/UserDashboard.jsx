import React from 'react'
import NavbarUsers from '../../Components/pages/NavbarUsers'
import { useNavigate } from 'react-router-dom'

const UserDashboard = () => {
    const navigate = useNavigate();
  return (
  
    <div className="min-h-screen bg-gray-100">

        <NavbarUsers />

        <div className="max-w-5xl mx-auto px-6 py-12">

            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-800">
                    Your Daily Logs
                </h1>

                <p className="text-gray-500 mt-2">
                    Stay consistent. Stay productive.
                </p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="bg-white p-8 rounded-xl shadow-md text-center">

                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    Create your Logs
                    </h3>

                    <p className="text-gray-500">
                    Don't wait for motivation.
                    </p>

                    <p className="text-gray-500 mb-6">
                    Just maintain your discipline.
                    </p>

                    <button
                    onClick={() => navigate("/createtodo")}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                    Create Todo
                    </button>

                </div>


                <div className="bg-white p-8 rounded-xl shadow-md text-center">

                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    View your Logs
                    </h3>

                    <p className="text-gray-500 mb-6">
                    View your progress.
                    </p>

                    <button
                    onClick={() => navigate("/viewtodo")}
                    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
                    >
                    View Todo
                    </button>

                </div>

            </div>

        </div>

    </div>


  )
}

export default UserDashboard