import React, { useState } from 'react'
import Inputbox from '../Components/Inputbox'
import Heading from '../Components/Heading'
import SubHeading from '../Components/SubHeading'
import Button from '../Components/Button'
import Bottomwarning from '../Components/Bottomwarning'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Signup() {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  return (
    <div className="bg-slate-200 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="bg-white rounded-lg text-center h-max w-80 p-2 px-4">
          <Heading title={"Signup"}/>
          <SubHeading subTitle={"Enter your information to create an account"} />
          <Inputbox onChange={(e) => {setFirstName(e.target.value)}} placeholder={"Firstname"} label={"Firstname"}/>
          <Inputbox onChange={(e) => {setLastName(e.target.value)}} placeholder={"Lastname"} label={"Lastname"}/>
          <Inputbox onChange={(e) => {setUsername(e.target.value)}} placeholder={"example@gmail.com"} label={"Email"}/>
          <Inputbox onChange={(e) => {setPassword(e.target.value)}} placeholder={"123456789"} label={"Password"}/>
          <Button label={"Signup"} 
          onClick={async () => {
            const response = await axios.post("http://localhost:3000/api/v1/signup", {
              username,
              password,
              firstName,
              lastName
            })

            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")
          }}
          />
          <Bottomwarning label={"Already have an account?"} buttonText={"Signin"} to={"/signin"}/>
        </div>
      </div>
    </div>
  )
}

export default Signup

