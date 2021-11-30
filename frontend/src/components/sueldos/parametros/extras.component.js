import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import clsx from 'clsx';
import InputAdornment from '@material-ui/core/InputAdornment';
import Divider from '@material-ui/core/Divider';

const exposiciones = ['Diferencia', 'Sumar y Restar'];

const criteriosNot = ['Base 25', 'Base 30'];
const criteriost = ['Base 30/25', 'Todo base 25', 'Todo base 30'];

const useStyles = makeStyles({
    option: {
        fontSize: 15,
        '& > span': {
            marginRight: 10,
            fontSize: 18,
        },
    },
});



export default function Adicionales({ onChangeCategoria }) {
    const classes = useStyles();


    const [exposicion, setExposicion] = React.useState('');

    const [criterioNOt, setCriterioNOt] = React.useState('');
    const [criteriot, setCriteriot] = React.useState('');



    const [inputValuePuesto, setInputValuePuesto] = React.useState('');


    const [empresas, setEmpresas] = React.useState([]);
    const [valueEmpresa, setValueEmpresa] = React.useState(empresas[0]);
    const [inputValueEmpresa, setInputValueEmpresa] = React.useState('');


    const [empleados, setEmpleados] = React.useState([]);
    const [valueEmpleado, setValueEmpleado] = React.useState(empleados[0]);
    const [inputValueEmpleado, setInputValueEmpleado] = React.useState('');


    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: false,
        checkedE: false,
        checkedF: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    function onChangeCat(e) {
        onChangeCategoria(e.target.value);
    }


    return (

        <div>

            <Grid container
                direction="row"

                justifyContent="center"
                alignItems="center">












              












                <TextField
                    label="Horas 50%"
                    placeholder='0'
                    style={{ width: 250, margin: 12, marginLeft: 12 }}
                    className={clsx(classes.margin, classes.textField)}
                    type="number"
                    variant="outlined"
                />
                  <TextField
                    label="Horas 100%"
                    placeholder='0'
                    style={{ width: 250, margin: 12, marginLeft: 12 }}
                    className={clsx(classes.margin, classes.textField)}
                    type="number"
                    variant="outlined"
                />
                  <TextField
                    label="Nocturnas 50%"
                    placeholder='0'
                    style={{ width: 250, margin: 12, marginLeft: 12 }}
                    className={clsx(classes.margin, classes.textField)}
                    type="number"
                    variant="outlined"
                />
                  <TextField
                    label="Nocturnas 100%"
                    placeholder='0'
                    style={{ width: 250, margin: 12, marginLeft: 12 }}
                    className={clsx(classes.margin, classes.textField)}
                    type="number"
                    variant="outlined"
                />
                  <TextField
                    label="Horas nocturnas"
                    placeholder='0'
                    style={{ width: 250, margin: 12, marginLeft: 12 }}
                    className={clsx(classes.margin, classes.textField)}
                    type="number"
                    variant="outlined"
                />

              











            </Grid>





        </div>

    );
}