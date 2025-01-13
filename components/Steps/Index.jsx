import Image from 'next/image';
import React from 'react'
import Steps from './Steps';
import { StepsData } from '@/config/constants';

const Index = () => {
  return (
    <div className="mx-8">
      <div className="flex gap-36 justify-between items-center">
        <h1 className='h1Video'>O G T, where finding Developers is a real Breeze</h1>
        <Image src={"/images/Layer 2.png"} width={300} height={350} alt='Illus'/>
      </div>
      <Steps data={StepsData[0]} />
    </div>
  );
}

export default Index
