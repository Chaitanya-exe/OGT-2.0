import React, { useState } from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { PaginationItem } from '@mui/material';

const PaginationUI = () => {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack spacing={2} className='flex items-center'>
      <p>Page: {page}</p>
      <Pagination count={10} page={page} onChange={handleChange}
       renderItem={(item) =>( <PaginationItem
            {...item}
          className={`${item.selected ? 'bg-red-400 text-white hover:text-white' : 'text-white/50'} hover:bg-gray-200 hover:text-bgColor rounded-full`}
          />
        )} />
    </Stack>
  );
}

export default PaginationUI
