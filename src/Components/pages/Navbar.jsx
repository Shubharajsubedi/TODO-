import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200">

      {/* Application Name */}
      <div>
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-600"
        >
          ExpenseTracker
        </Link>
      </div>


      {/* Navigation Links */}
      <div>
        <ul className="flex items-center gap-8">

          <li>
            <Link
              to="/home"
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              to="/contactus"
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </li>

          <li>
            <Link
              to="/feedbacks"
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
            >
              Feedbacks
            </Link>
          </li>

        </ul>
      </div>


      
      <div className="flex items-center gap-3">

        <Link to={"/login"}>
            <button className="px-4 py-2 text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors duration-200">
                Login
            </button>
        </Link>

        <Link to={"/register"}>
            <button className="px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                Register
            </button>
        </Link>
        

      </div>

    </div>
  )
}

export default Navbar