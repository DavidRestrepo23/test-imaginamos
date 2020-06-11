import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import {
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core';

const useStyles = makeStyles({
    margin: {
        marginTop: '0px'
    },
    table: {
        minWidth: 1000,
    },
    h4: {
        marginTop: '30px'
    }
});

const RequestServicesTable = ({ services }) => {
    const classes = useStyles();

    return (
        <Fragment>
            <Typography variant="h4" className={classes.h4}>
                Servicios
                <hr />
            </Typography>
            <TableContainer className={classes.margin}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Cliente</TableCell>
                            <TableCell align="left">Descripción de servicio</TableCell>
                            <TableCell align="left">Tipo de servicio</TableCell>
                            <TableCell align="left">Técnico encargado</TableCell>
                            <TableCell align="left">Estado del servicio</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {services.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    {item.customer.name}
                                </TableCell>
                                <TableCell align="left">{item.content}</TableCell>
                                <TableCell align="left">{item.type_service === "2" ? "Instalación" : "Mantenimiento"}</TableCell>
                                <TableCell align="left"><b>{item.technical.name}</b></TableCell>
                                <TableCell align="left">
                                    <Alert severity={item.status === 'pending' ? 'warning' : 'success'} className={classes.status}>{item.status}</Alert>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    );
}


export default RequestServicesTable;