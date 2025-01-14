"use client";

import Projects from '@/components/search/Projects'
import Searchcategory from '@/components/search/SearchBar'
import StipendFilter from '@/components/search/StipendFilter'
import React, { useState, Suspense } from 'react';

const DeveloperPage = () => {
  // const [projects, setProjects] = useState([]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className='flex gap-10 mt-20 justify-center'>
          <Searchcategory className={"searchbar__input"} />
          <StipendFilter />
        </div>
        <Projects />
      </Suspense>
    </>
  )
}

export default DeveloperPage
