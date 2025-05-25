import React from 'react'
import Inputbox from '../Components/Inputbox'
import Heading from '../Components/Heading'
import SubHeading from '../Components/SubHeading'
import Button from '../Components/Button'
import Bottomwarning from '../Components/Bottomwarning'

function Signin() {
  return (
    <div className="bg-slate-200 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="bg-white rounded-lg text-center h-max w-80 p-4 px-4">
          <Heading title={"Signin"}/>
          <SubHeading subTitle={"Enter your credentials to access your account"} />
          <Inputbox placeholder={"example@gmail.com"} label={"Email"}/>
          <Inputbox placeholder={"123456789"} label={"Password"}/>
          <Button label={"Signin"} />
          <Bottomwarning label={"Don't have an account?"} buttonText={"Signup"} to={"/signup"} />
        </div>
      </div>
    </div>
  )
}

export default Signin
