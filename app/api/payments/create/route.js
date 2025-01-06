import { payPalaccessToken } from "@/utils";

async function handler(req){
    try {
        const {amount} = await req.json();
        const clientId = process.env.PAYPAL_ID;
        const clientSecret = process.env.PAYPAL_SECRET;

        const basicAuth = await payPalaccessToken();

        const res = await fetch(`${process.env.BASE_URL}/v2/checkout/orders`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${basicAuth}`
            },
            body: JSON.stringify({
                intent:"CAPTURE",
                purchase_units:[
                    {
                        amount: {
                            value:amount,
                            currency_code:"USD"
                        },
                        description:"Mileston Payment"
                    }
                ],
                payment_source:{
                    paypal:{
                        experience_context:{
                            return_url:"http://localhost:3000/api/payments/capture",
                            cancel_url:"http://localhost:3000"
                        }
                    }
                }
            })
        });
        const data = await res.json();
        
        const id = data.id;
        return Response.json({id},{status:201});
    } catch (err) {
        console.error("Error occured: ",err);
        return Response.json({success: false, data:"Failed to create order"});
    }
}

export {handler as POST};