import React from 'react'
import NavbarUsers from '../../Components/pages/NavbarUsers'
import { useNavigate } from 'react-router-dom'

const UserDashboard = () => {
    const navigate = useNavigate();
  return (
    <div>
        <NavbarUsers/>

        <div>
            <h1>Your Daily Logs</h1>
            <div>
                <h3>Create your Logs</h3>
                <p>Dont wait for motivation.</p>
                <p> Just maintain your discipline.</p>
                <button onClick={() => navigate("/createtodo")}>Create Todo</button>
            </div>


            <div>View your logs</div>
            <p>View your progess.</p>
            <button onClick={() =>  navigate("/viewtodo")}>View Todo</button>
        </div>
    </div>
  )
}

export default UserDashboard