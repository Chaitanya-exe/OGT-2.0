"use client";

import TemporaryDrawer from '@/components/dashBoard/Drawer';
import Button from '@/components/ui/Button';
import { Divider } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const EmployerPage = () => {
  const [active,setActive] = useState("/myProfile")
  const router = useRouter();

  return (
    <div className="flex gap-2 ">
      <TemporaryDrawer active={active} setActive={setActive} />
      <div className="flex-1 p-12 ">
       <div className='w-full bg-l2/5 p-16'>Add section</div>
       <button onClick={()=>{router.push('/client/project/new')}}>

       <Button text="+ New Project" type={"primary"} className={"w-[140px]"}  />
       </button>
      </div>
    </div>
  );
}

export default EmployerPage
