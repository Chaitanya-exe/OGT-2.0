import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { PaginationItem } from '@mui/material';

const PaginationUI = () => {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack spacing={2}>
      <p>Page: {page}</p>
      <Pagination count={10} page={page} onChange={handleChange}
    //    color='secondary' 
       renderItem={(item) =>( <PaginationItem
            {...item}
            sx={{
              color: item.selected ? 'white' : 'blue', // Custom text color
              backgroundColor: item.selected ? 'green' : 'transparent', // Custom background color for selected
              '&:hover': {
                backgroundColor: 'lightgray', // Custom hover color
              },
            }}
          />
        )} />
    </Stack>
  );
}

export default PaginationUI
