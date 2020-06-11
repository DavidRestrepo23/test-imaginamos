import React from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    FormControl,
    RadioGroup,
    FormLabel,
    Radio,
    Grid,
    Typography,
    Container,
    MenuItem
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(5),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Form = (props) => {

    const classes = useStyles();

    console.log(props);

    return (
        <Container component="main" maxWidth="sm">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="body1">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </Typography>
                <form className={classes.form} autoComplete="off" onSubmit={props.handleSubmitForm}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="fname"
                                name="name"
                                variant="outlined"
                                required
                                fullWidth
                                id="name"
                                label="Nombre completo"
                                autoFocus
                                onChange={props.handleChangeForm}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="off"
                                autoComplete="email"
                                onChange={props.handleChangeForm}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="phone"
                                label="Celular"
                                name="phone"
                                autoComplete="phone"
                                autoComplete="off"
                                onChange={props.handleChangeForm}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="content"
                                label="Describe el problema"
                                multiline
                                rows={6}
                                rowsMax={4}
                                onChange={props.handleChangeForm}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl component="fieldset" fullWidth>
                                <FormLabel component="legend" >Tipo de servicio </FormLabel>
                                <RadioGroup aria-label="gender" name="type_service" onChange={props.handleChangeForm}>
                                    <FormControlLabel value="1" control={<Radio />} label="Instalación" />
                                    <FormControlLabel value="2" control={<Radio />} label="Mantenimiento" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        disabled={props.status !== "complete" ? true : false}
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Enviar solicitud
                    </Button>

                    <Link to="/service"> Seguimiento del servicio </Link>

                </form>
            </div>
        </Container>
    );
}

export default Form;