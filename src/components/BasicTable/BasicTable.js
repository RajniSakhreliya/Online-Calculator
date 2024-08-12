import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable({ datas, titles }) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    {titles.map((row) => (
                        <TableRow style={{ backgroundColor: "#D0E4FE" }}>
                            <TableCell component="th" scope="row" style={{ fontWeight: "bold" }}>
                                {row.title1}
                            </TableCell>
                            <TableCell align="right" style={{ fontWeight: "bold" }}>{row.title2}</TableCell>
                            <TableCell align="right" style={{ fontWeight: "bold" }}>{row.title3}</TableCell>
                        </TableRow>
                    ))}
                </TableHead>

                <TableBody>
                    {datas.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.valueMonthly}</TableCell>
                            <TableCell align="right">{row.valueYearly}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}