import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import TablePagination from '@material-ui/core/TablePagination';
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';

import LiquidacionReporte from '../reporte/pdf.component'

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 540,
    },
});


export default function Liquidaciones(props) {

    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [rows, setRows] = React.useState([]);

    const [datosCarga, setDatosCarga] = React.useState({
        
        nombreEmpresa: 'La ventanita',
        calleNumero: 'Av. Leandro N. Alem 1589',
        codigoPostal: '5869',
        provincia: 'Ciudad Autónoma de Buenos Aires',
        cuit: '23-58659965-9',

        apellidoNombre: 'Gonzales Esteban',
        legajo: '35696',
        cuil: '20-54676667-3',

        departamento: 'PRODUCTO Y CONTENIDO',
        division: 'ESMG -ADVERTISING',
        categoria: 'Subeditor Canal Tecnología',

        fechaIngreso: '11/05/2021',
        sueldo: '2400,57',
        liquidacionTipoMesAño: 'MES 06 2020',

        jubilacionPeriodo: 'MAYO 2021',
        jubilacionFecha: '07/10/2021',
        jubilacionBanco: 'GALICIA',

        conceptos: [
            {
                codigo: '998',
                detalle: 'SUELDAZO',
                cantidad: '78',
                haber: '2,400.85',
                deduccion: '-256.00'
            },
            {
                codigo: '998',
                detalle: 'SUELDAZO',
                cantidad: '78',
                haber: '2,400.85',
                deduccion: '-256.00'
            },
        ],
        lugarFechaPago: 'BS.AS. 29/06/2001',
        totalRemunerado: '5.587,50',
        totalNoRemunerado: '-0,09',
        totalDeduccion: '-554,75',

        bancoAcreditacion: 'BANCO RIO',
        bancoCuenta: '600512559955',
        totalNeto: '1900,75',
        totalNetoEscrito: 'un mil novecientos',
    });



    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    function verReporte() {

    }



    return (

        <div>



            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Identificador</TableCell>
                                <TableCell align="center">Fecha de emision</TableCell>

                                <TableCell align="center">Empresa</TableCell>

                                <TableCell align="right">Opciones</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="center">{row.vigente_desde}</TableCell>
                                        <TableCell align="center">{row.vigente_desde}</TableCell>
                                        <TableCell align="right">

                                            <Grid
                                                container
                                                direction="row"
                                                justifyContent="flex-end"
                                                alignItems="center"
                                            >


                                                <Grid>
                                                    <IconButton color="secondary" onClick={() => verReporte(row._id)}>
                                                        <VisibilityIcon />
                                                    </IconButton>
                                                </Grid>
                                            </Grid>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>



            <LiquidacionReporte
             datosCarga={[datosCarga]}
            />





        </div>

    );

}