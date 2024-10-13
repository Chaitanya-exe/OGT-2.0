import Image from 'next/image';
import React from 'react'
import Steps from './Steps';
import { StepsData } from '@/config/constants';

const Index = () => {
  return (
    <div className="mx-8">
      <div className="flex justify-between items-center">
        <h1 className='h1Video'>O G T, where finding Developers is a real Breeze</h1>
        <Image src={"/Layer 2.png"} width={415} height={355} alt='Illus'/>
      </div>
      <Steps data={StepsData[0]} />
    </div>
  );
}

export default Index
