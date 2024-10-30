import Razorpay from "razorpay";
import { createError } from "@/utils";
async function handler(req){
    try {
        const {amount, currency, receipt} = await req.json();
        const razor = new Razorpay({
            key_id: process.env.KEY_ID,
            key_secret: process.env.KEY_SECRET
        });

        const paymentOptions = {
            amount: amount * 100,
            currency,
            receipt,
            payment_capture: 1,
        }


        const response = await razor.orders.create(paymentOptions);
        return Response.json({response},{status:201});
    } catch (error) {
        console.log(error);
        const message = await error.message;
        createError(message);
        return Response.json({error: message},{status:500});
    }
}

export {handler as POST}