'use client'

const page = () => {
  const handlePayout = async ()=>{
    const response = await fetch("api/payments/payout",{
      method:"POST",
      body:JSON.stringify({
        amount:100,
        email:"sb-5xohw34197840@personal.example.com",
        itemId:"2345678"
      })
    });
    const data = await response.json();
    if(data.success){
      alert("Payout successfully completed");
    } else{
      alert("Payout failed due to error.");
    }
  }

  return (
    <div className='flex flex-col items-center justify-between gap-3'>
      <h1 className='text-lg font-bold'>Payment is successful</h1>
      <button className='rounded-lg bg-blue-400 text-black font-bold w-[150px] hover:bg-blue-600 hover:text-white' onClick={handlePayout}>Request Payout</button>
    </div>
  )
}

export default page