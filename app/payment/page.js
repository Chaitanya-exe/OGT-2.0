"use client"
import React from 'react'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import PaymentButton from '@/components/PaymentButton'


const page = () => {

  const handlePayment = async()=>{
    try {
      const res = await fetch("api/payments/create",{
        method:"POST",
        body: JSON.stringify({amount:100}),
        headers:{
          "Content-Type":"application/json"
        }
      });
      const data = await res.json();
      const approvalUrl = `https://www.sandbox.paypal.com/checkoutnow?token=${data.id}`
      window.location.href = approvalUrl;
    } catch (error) {
      console.error("Payment failed: ",error);
    }
  }
  
  return (
    <div className='flex flex-col items-center justify-between m-3 gap-3'>
      <span><h1>milestone payment of 100$</h1></span>
      <button className='rounded-lg bg-yellow-400 text-black font-bold w-[150px] hover:bg-yellow-600' onClick={handlePayment}>
        Pay with Paypal
      </button>
    </div>    
  )
}

export default page