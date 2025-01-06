import { createError, payPalaccessToken } from "@/utils"

async function handler(req){
    try {
        const {amount, email, itemId} = await req.json(); 
        const accessToken = await payPalaccessToken();
        
        const res = await fetch(`${process.env.BASE_URL}/v1/payments/payouts`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${accessToken}`
            },
            body:JSON.stringify({
                sender_batch_header:{
                    sender_batch_id:`batch-${Date.now()}`,
                    email_subject:"You have a payout",
                    email_message:`Here is your ${amount}$ payout.\nThank you for your services`
                },
                items:[
                    {
                        recipient_type:"EMAIL",
                        amount: { value: amount, currency:"USD"},
                        receiver:email,
                        note:"Payment for your service",
                        sender_item_id:itemId
                    }
                ]
            })
        });
        const data = await res.text();
        console.log(data)
        return Response.json({success:true, data},{status:200});
    } catch (error) {
        createError(error);
        console.error("Error occured: ", error);
        return Response.json({success:false, msg: "Some error occured"});
    }
}

export {handler as POST}