
import * as React from 'react';
import {Paper,Table ,TableBody ,TableCell ,TableContainer ,TableHead ,TablePagination,TableRow } from '@mui/material';
import { Stack } from '@mui/material';


const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'dob', label: 'DOB', minWidth: 100 },
    {
      id: 'age',
      label: 'Age',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'gender',
      label: 'Gender',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'college',
      label: 'College',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
  ];
  
  //  function createData(name, dob, age, gender,college) {
  //    return { name,dob, age, gender,college };
  // }
  
  // const rows = [
  //   createData('India', 'IN', 1324171354, 3287263),
  //   createData('China', 'CN', 1403500365, 9596961),
  //   createData('Italy', 'IT', 60483973, 301340),
  //   createData('United States', 'US', 327167434, 9833520),
  //   createData('Canada', 'CA', 37602103, 9984670),
  //   createData('Australia', 'AU', 25475400, 7692024),
  //   createData('Germany', 'DE', 83019200, 357578),
  //   createData('Ireland', 'IE', 4857000, 70273),
  //   createData('Mexico', 'MX', 126577691, 1972550),
  //   createData('Japan', 'JP', 126317000, 377973),
  //   createData('France', 'FR', 67022000, 640679),
  //   createData('United Kingdom', 'GB', 67545757, 242495),
  //   createData('Russia', 'RU', 146793744, 17098246),
  //   createData('Nigeria', 'NG', 200962417, 923768),
  //   createData('Brazil', 'BR', 210147125, 8515767),
  // ];
  
  export default function UserTable(props) {
    const{userData} =props;
    // console.log('table UserData',userData )
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
    return (
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {userData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((userData) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={userData.code}>
                      {columns.map((column) => {
                        const value = userData[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={userData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    );
  }