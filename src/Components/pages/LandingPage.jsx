import React from 'react'
import Navbar from './Navbar'


const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">

  <Navbar />

  <div className="text-center py-20">

    <h2 className="text-4xl font-bold text-gray-800">
      Want to organize your day?
    </h2>

    <p className="mt-4 text-gray-600">
      Complete your daily tasks and stay productive.
    </p>

    <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg">
      View Tasks
    </button>

  </div>

</div>
  )
}

export default LandingPage