import {useState} from 'react';
import { useReactTable, flexRender, getCoreRowModel, getPaginationRowModel, } from "@tanstack/react-table";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableContainer from '@mui/material/TableContainer';
import { styled } from '@mui/material/styles';
import { useTheme } from "@mui/material";



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.grey.C050,
      color: theme.palette.common.black,
      fontSize: '18px',
      fontWeight: '400',
      paddingBottom:'1rem',
      border: '1px solid',
      
      },
  [`&.${tableCellClasses.body}`]: {
    color: theme.palette.common.black,
      fontSize: '12px',
      padding: theme.spacing(1),
      fontWeight: '400',
      border: '1px solid',
      },
  }));

  const StyledTableCellDark = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.grey.C050,
        color: theme.palette.common.white,
        fontSize: '18px',
        fontWeight: '400',
        paddingBottom:'1rem',
        border: '1px solid',
        
        },
    [`&.${tableCellClasses.body}`]: {
        color: theme.palette.common.white,
        fontSize: '12px',
        padding: theme.spacing(1),
        fontWeight: '400',
        border: '1px solid',
        },
    }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.grey.C050,
        
      },
        // hide last border
    '&:last-child td, &:last-child th': {
        order: 0,
  },
  }));

  const StyledTableRowDark = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.grey.C050,
        color: theme.palette.common.white,
      },
        // hide last border
    '&:last-child td, &:last-child th': {
        order: 0,
  },
  }));


export default function TableCard({ columns, data }) {

  const theme = useTheme();
 
  const [isLoading, setIsLoading] = useState(false);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10, autoResetPageIndex: true, })

  const [columnResizeMode, setColumnResizeMode] = useState('onChange')
  const [columnResizeDirection, setColumnResizeDirection] = useState('ltr')
  
  const table = useReactTable({ data, columns, 
                                state: {pagination, },
                                columnResizeMode,
                                columnResizeDirection,
                                onPaginationChange: setPagination, 
                                getCoreRowModel: getCoreRowModel(), 
                                getPaginationRowModel: getPaginationRowModel(), 
                                })

return(
<>
{theme.palette.mode === "light" ? (

    <TableContainer sx={{bgcolor: 'grey.C050', mt: '1rem', p: '2rem'}}>
    <Table size="small">
    <TableHead >
      {table?.getHeaderGroups()?.map((headerGroup) => {
        return (
          
          <StyledTableRow key={headerGroup?.id}>
            
            {headerGroup?.headers?.map((header) => {
              return (
            
                <StyledTableCell colSpan={header?.colSpan} key={header?.id} align="center">
            
                  {header?.isPlaceholder
                    ? null
                    : flexRender(
                        header?.column?.columnDef?.header,
                        header?.getContext()
                      )}
            
                </StyledTableCell>
              );
            })}
          </StyledTableRow>
        );
      })}
    </TableHead>
    
    {isLoading ? (
      <p>Loading ...</p>
    ) : (
      <TableBody >
        {table?.getCoreRowModel()?.rows.map((row) => (


          <StyledTableRow key={row.id} >
            {row.getVisibleCells().map((cell) => {
    
              return <StyledTableCell key={cell.id} align="center">
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </StyledTableCell>;
            })}
          </StyledTableRow>
    
    
        ))}
      </TableBody>
    )}
</Table>
</TableContainer>

) : (

  <TableContainer sx={{bgcolor: 'secondary.C800', mt: '1rem', p: '2rem'}}>
    <Table size="small">
    <TableHead >
      {table?.getHeaderGroups()?.map((headerGroup) => {
        return (
          
          <StyledTableRowDark key={headerGroup?.id}>
            
            {headerGroup?.headers?.map((header) => {
              return (
            
                <StyledTableCellDark colSpan={header?.colSpan} key={header?.id} align="center" >
            
                  {header?.isPlaceholder
                    ? null
                    : flexRender(
                        header?.column?.columnDef?.header,
                        header?.getContext()
                      )}
            
                </StyledTableCellDark>
              );
            })}
          </StyledTableRowDark>
        );
      })}
    </TableHead>
    
    {isLoading ? (
      <p>Loading ...</p>
    ) : (
      <TableBody >
        {table?.getCoreRowModel()?.rows.map((row) => (


          <StyledTableRowDark key={row.id}>
            {row.getVisibleCells().map((cell) => {
    
              return <StyledTableCellDark key={cell.id} align="center">
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </StyledTableCellDark>;
            })}
          </StyledTableRowDark>
    
    
        ))}
      </TableBody>
    )}
</Table>
</TableContainer>
)}
</>
)}


{/*

 <Stack direction="row" alignItems="center" spacing={1} sx={{mt: '1rem'}}>
      
      <IconButton size="large" onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>
        <FastRewindIcon fontSize="inherit" />
      </IconButton>

      <IconButton size="large" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
        <ArrowLeftIcon fontSize="inherit" />
      </IconButton>

      <IconButton size="large" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
        <ArrowRightIcon fontSize="inherit" />
      </IconButton>

      <IconButton size="large" onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()}>
        <FastForwardIcon fontSize="inherit" />
      </IconButton>

      <Typography> Page {table.getState().pagination.pageIndex + 1} of{' '} {table.getPageCount()} </Typography>

      <Typography> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Go to page: &nbsp;&nbsp;&nbsp;
            
            <input
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                table.setPageIndex(page)
              }}
            /> 
          &nbsp;&nbsp;&nbsp;
      </Typography>

      <select
            value={table.getState().pagination.pageSize}
            onChange={e => { table.setPageSize(Number(e.target.value)) }}
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>

          <Typography> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        Showing {table.getRowModel().rows.length.toLocaleString()} of{' '}
        {table.getRowCount().toLocaleString()} Rows
        </Typography>    

</Stack>
*/}
