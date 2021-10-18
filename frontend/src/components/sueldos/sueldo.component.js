import React from 'react';
import Grid from '@material-ui/core/Grid';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TabsUtilities from './utilidades.component'
import SelectMain from './seleccion.component'
import Table from './tabla.component'
import background from "../../img/wood.png";
import Button from '@material-ui/core/Button';


const theme = createTheme();

theme.typography.h3 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
};



export default function Sueldos(props) {


    return (
        <div style={{height:'100vh', 
            backgroundImage: `url(${background})`, backgroundSize: 'cover',
            overflow: 'hidden' 
          }}>
            
            <br></br>

            <Grid
                container
                xs={12}
                direction="column"
                alignItems="center"
            >

                <Grid

                    xs={8}
                    direction="column"
                    alignItems="flex-start"
                >
                    <Typography variant="h5" >
                        Liquidacion mensual de Sueldos
                    </Typography>
                    <br></br>

                    <Grid>

                        <SelectMain/>
                    </Grid>
                    <br></br>
                    <TabsUtilities />
                    <br></br>
                    <Grid>

                        <Table/>
                    </Grid>
                    <Button variant="contained"   style={{ marginBottom: '20px', marginTop: '20px', backgroundColor:'#95f5aabf' }} >
                            GENERAR REPORTE
                        </Button>
                    




                </Grid>
            </Grid>

        </div>
    );

}
