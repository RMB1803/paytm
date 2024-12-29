import React from 'react'
import Inputbox from '../Components/Inputbox'
import Heading from '../Components/Heading'
import SubHeading from '../Components/SubHeading'
import Button from '../Components/Button'
import Bottomwarning from '../Components/Bottomwarning'

function Signup() {
  return (
    <div className="bg-slate-200 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="bg-white rounded-lg text-center h-max w-80 p-2 px-4">
          <Heading title={"Signup"}/>
          <SubHeading subTitle={"Enter your information to create an account"} />
          <Inputbox placeholder={"Firstname"} label={"Firstname"}/>
          <Inputbox placeholder={"Lastname"} label={"Lastname"}/>
          <Inputbox placeholder={"example@gmail.com"} label={"Email"}/>
          <Inputbox placeholder={"123456789"} label={"Password"}/>
          <Button label={"Signup"} />
          <Bottomwarning label={"Already have an account?"} buttonText={"Signin"} to={"/signin"}/>
        </div>
      </div>
    </div>
  )
}

export default Signup

