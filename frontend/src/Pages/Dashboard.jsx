import React from 'react'
import AppBar from '../Components/AppBar'
import Balance from '../Components/Balance'
import Users from '../Components/Users'

function Dashboard() {
  return (
    <div>
      <AppBar />
      <Balance value={"10000"}/>
      <Users />
    </div>
  )
}

export default Dashboard
