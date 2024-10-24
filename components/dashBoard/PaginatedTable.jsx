import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className="flex items-center mr-2.5">
      <button
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
        className="p-2 hover:bg-BO/10 rounded-full disabled:opacity-50"
      >
        {theme.direction === "rtl" ? <BiRightArrow /> : <BiLeftArrow />}
      </button>
      <button
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
        className="p-2  hover:bg-BO/10 rounded-full disabled:opacity-50"
      >
        {theme.direction === "rtl" ? (
          <RxDoubleArrowLeft />
        ) : (
          <RxDoubleArrowLeft />
        )}
      </button>
      <button
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
        className="p-2  hover:bg-BO/10 rounded-full disabled:opacity-50"
      >
        {theme.direction === "rtl" ? (
          <RxDoubleArrowRight />
        ) : (
          <RxDoubleArrowRight />
        )}
      </button>
      <button
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
        className="p-2  hover:bg-BO/10 rounded-full disabled:opacity-50"
      >
        {theme.direction === "rtl" ? <BiLeftArrow /> : <BiRightArrow />}
      </button>
    </div>
  );
}


export default function CustomPaginationActionsTable({ rows }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="overflow-x-auto border px-3 border-white/20  bg-bgColor rounded shadow">
      <table className="min-w-full  bg-bgColor border-collapse">
        <thead>
          <tr className="w-full *:mx-2 *:text-start *:py-3 border-b-2 border-white/20 ">
            <th >Date</th>
            <th >Role</th>
            <th >Company</th>
            <th >Status</th>
          </tr>
        </thead>
        <tbody >
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <tr key={row.name} className="hover:bg-BO/5 *:py-4  *:text-sm *:text-BO *:border-b *:border-white/20">
              <td >{row.Date}</td>
              <td  >{row.Role}</td>
              <td  >{row.Company}</td>
              <td  >{row.Status}</td>
            </tr>
          ))}
          {emptyRows > 0 && (
            <tr style={{ height: 53 * emptyRows }}>
              <td colSpan={4} className="py-2 px-4 border-" />
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4} className="py-2 ">
              <div className="flex px-4  justify-end">
                <TablePaginationActions
                  count={rows.length}
                  page={page}
                  rowsPerPage={rowsPerPage}
                  onPageChange={handleChangePage}
                />
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
