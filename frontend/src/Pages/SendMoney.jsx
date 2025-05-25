import React, { useState } from 'react'
import Heading from '../Components/Heading'
import Inputbox from '../Components/Inputbox'
import Button from '../Components/Button'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'

function SendMoney() {

  const [searchParams] = useSearchParams()
  const id = searchParams.get("id")
  const name = searchParams.get("name")
  const [amount, setAmount] =useState(0)

  return (
    <div className="bg-slate-200 h-screen flex justify-center">
      <div className='flex flex-col justify-center'>
        <div className='bg-white rounded-lg text-center h-max w-80 p-4 px-4'>

          <div>

            <div className='font-bold text-2xl'>
              Send Money
            </div>

            <div className='flex mt-10'>
              <div className='flex bg-[#22c362] rounded-full w-12 h-12 mt-1 mr-3 justify-center'>
                <div className='flex justify-center flex-col text-2xl font-medium text-white'>
                  {name[0].toUpperCase()}
                </div>
              </div>

              <div className='flex justify-center flex-col font-semibold text-xl'>
                {name}
              </div>
            </div>

            <Inputbox placeholder={"Enter Amount"} label={"Amount (in Rs)"} onChange={(e) => {setAmount(e.target.value)}}/>

            <Button label={"Initiate Transfer"} onClick={() => {
              axios.post("http://localhost:3000/api/v1/account/transfer", {
                to: id,
                amount
              }, {
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("token")
                }
              })
            }}/>

          </div>

        </div>

      </div>
    </div>
  )
}

export default SendMoney
