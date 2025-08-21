import React from 'react';
import { useTable } from 'react-table'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.common.white,
      fontSize: '16px',
      
      },
  [`&.${tableCellClasses.body}`]: {
    color: theme.palette.common.white,
      fontSize: '14px',
      padding: theme.spacing(1),
      },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.grey[800],
      },
        // hide last border
    '&:last-child td, &:last-child th': {
        order: 0,
  },
  }));


export function TableStandard({ columns, data }) {
 
  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, } = useTable({ columns, data, })

return(

  // TableContainer to position the table into the center.
  <TableContainer component={Paper} sx={{bgcolor: 'primary.dark', mt: 4, ml:2, p:2, width: '100%', borderRadius: '16px',  }}>

  <Table stickyHeader="true" {...getTableProps()} sx={{ minWidth: 400, bgcolor:'text.brown', }} >
  
  <TableHead>
    {headerGroups.map(headerGroup => (
      <StyledTableRow {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map(column => (
          <StyledTableCell {...column.getHeaderProps({ style: { minWidth: column.minWidth, width: column.width }, })}>
            {column.render('Header')}
          </StyledTableCell>
        ))}
      </StyledTableRow>
    ))}
  </TableHead>
  <TableBody {...getTableBodyProps()}>
    {rows.map((row, i) => {
      prepareRow(row)
      return (
        <StyledTableRow {...row.getRowProps()}>
          {row.cells.map(cell => {
            return (
              <StyledTableCell {...cell.getCellProps({ style: { minWidth: cell.column.minWidth, width: cell.column.width, }, })}>
                {cell.render('Cell')}
              </StyledTableCell>
            )
          })}
        </StyledTableRow>
      )
    })}
  </TableBody>
</Table>


</TableContainer>

)}
