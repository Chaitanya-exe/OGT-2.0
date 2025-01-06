import React from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'

const PaymentButton = ({amount}) => {
    const createOrder = async()=>{
        const res = await fetch("api/create_payment",{
            method:"POST",
            body: JSON.stringify({amount}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        const {id} = await res.json();
        return id;
    }

    const onApprove = async(data)=>{
        const res = await fetch("api/capture_payment",{
            method:"POST",
            body: JSON.stringify({orderID:data.id}),
            headers:{
                "Content-Type":"application/json"
            }
        });

        const result = await res.json();
        if(result === "SUCCESS"){
            alert("payment successful");
        } else {
            alert("payment failed");
        }
    }

    const onError = (err)=>{
        console.error("Paypal error: ",err);
        alert("An error occured");
    }
  return (
    <PayPalButtons
        style={{
            layout:"vertical",
            color:"gold"
        }}
        createOrder={createOrder}
        onApprove={onApprove}
        onError={onError}
    />
  )
}

export default PaymentButton