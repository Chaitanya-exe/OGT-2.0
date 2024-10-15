import Button from '@/components/ui/Button'
import Image from 'next/image'
import React from 'react'

const notFound = () => {
  return (
  <div className='flex gap-3 flex-col items-center justify-center min-h-[500px] text-center'>
      <Image src={"/NotFound.png"} alt="nan" width={400} height={300} />
      <div className=' *:p-3'>
        <p>Error: 404 , Not Found</p>
        <button className='bg-BO text-bgColor px-5 py-1 rounded'>Go Back</button>
      </div>
    </div>
  )
}

export default notFound
