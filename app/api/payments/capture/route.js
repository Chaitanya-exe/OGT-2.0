import { payPalaccessToken } from "@/utils";

async function handler(req){
    try {

        const basicAuth = await payPalaccessToken();

        const url = new URL(req.url);
        const token = url.searchParams.get("token");

        if(!token){
            return Response.json({error:"Invalid token"},{status:400});
        }

        const res = await fetch(`${process.env.BASE_URL}/v2/checkout/orders/${token}/capture`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${basicAuth}`
            }
        });
        
        const data = await res.json();

        if(data.status === "COMPLETED"){
            return Response.redirect("http://localhost:3000/successful");
        } else{
            return new Error("Unable to capture payment");
        }

    } catch (err) {
        console.error("Error occured: ",err)
        return Response.json({success:false,msg:"Some error occured"});
    }
}

export {handler as GET}