import React from 'react'
import CustomPaginationActionsTable from './PaginatedTable'


  const exampleRows = [
    {
      Date: "20/7/24",
      Role: "Full-Stack",
      Company: "Google",
      Status: "Active",
    },
    {
      Date: "20/7/24",
      Role: "Full-Stack",
      Company: "Google",
      Status: "Active",
    },
    {
      Date: "20/7/24",
      Role: "Full-Stack",
      Company: "Google",
      Status: "Active",
    },
    {
      Date: "20/7/24",
      Role: "Full-Stack",
      Company: "Google",
      Status: "Active",
    },
    {
      Date: "20/7/24",
      Role: "Full-Stack",
      Company: "Google",
      Status: "Active",
    },
    {
      Date: "20/7/24",
      Role: "Full-Stack",
      Company: "Google",
      Status: "Active",
    },
    {
      Date: "20/7/24",
      Role: "Full-Stack",
      Company: "Google",
      Status: "Active",
    },
    {
      Date: "20/7/24",
      Role: "Full-Stack",
      Company: "Google",
      Status: "Active",
    },
  ];
const AppliedProjects = () => {
  return (
    <div className='p-12'>
    <CustomPaginationActionsTable rows={exampleRows} />
    </div>
  )
}

export default AppliedProjects
