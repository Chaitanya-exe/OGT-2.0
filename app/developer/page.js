import Projects from '@/components/search/Projects'
import Searchcategory from '@/components/search/SearchBar'
import StipendFilter from '@/components/search/StipendFilter'
import React from 'react'

const DeveloperPage = () => {
  return (
    <>

    <div className='flex gap-10 mt-20 justify-center'>
      <Searchcategory className={"searchbar__input"} />
      <StipendFilter/>
    </div>
      <Projects />
    </>
  )
}

export default DeveloperPage
