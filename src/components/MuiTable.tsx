import React from "react";
import {
  TableContainer,
  TableRow,
  TableCell,
  Paper,
  TableBody,
  TableHead,
  Table
} from "@mui/material";

const tableData = [
  {
    id: 1,
    first_name: "Beale",
    last_name: "Figure",
    email: "bfigure0@narod.ru",
    gender: "Male",
    ip_address: "88.158.127.146"
  },
  {
    id: 2,
    first_name: "Teodoro",
    last_name: "Douce",
    email: "tdouce1@forbes.com",
    gender: "Polygender",
    ip_address: "99.198.65.74"
  },
  {
    id: 3,
    first_name: "Bengt",
    last_name: "Beaston",
    email: "bbeaston2@lycos.com",
    gender: "Male",
    ip_address: "224.252.30.0"
  },
  {
    id: 4,
    first_name: "Geri",
    last_name: "Vines",
    email: "gvines3@cpanel.net",
    gender: "Male",
    ip_address: "185.175.7.5"
  },
  {
    id: 5,
    first_name: "Moshe",
    last_name: "Mougenel",
    email: "mmougenel4@archive.org",
    gender: "Male",
    ip_address: "233.162.62.190"
  },
  {
    id: 6,
    first_name: "Zachery",
    last_name: "Loomes",
    email: "zloomes5@is.gd",
    gender: "Male",
    ip_address: "236.250.43.225"
  },
  {
    id: 7,
    first_name: "Carter",
    last_name: "Clemenceau",
    email: "cclemenceau6@google.co.jp",
    gender: "Male",
    ip_address: "127.38.45.139"
  },
  {
    id: 8,
    first_name: "Alix",
    last_name: "Franzini",
    email: "afranzini7@sciencedaily.com",
    gender: "Male",
    ip_address: "155.59.150.71"
  },
  {
    id: 9,
    first_name: "Desirae",
    last_name: "Pembridge",
    email: "dpembridge8@mit.edu",
    gender: "Female",
    ip_address: "210.235.50.142"
  },
  {
    id: 10,
    first_name: "Dani",
    last_name: "Constantinou",
    email: "dconstantinou9@patch.com",
    gender: "Male",
    ip_address: "146.44.157.147"
  }
];

function MuiTable() {
  return (
    <>
      <TableContainer component={Paper} sx={{maxHeight: "300px"}}>
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>First name</TableCell>
              <TableCell>Last name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

	  <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">First name</TableCell>
            <TableCell align="center">Last name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.first_name}</TableCell>
              <TableCell align="center">{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export default MuiTable;
