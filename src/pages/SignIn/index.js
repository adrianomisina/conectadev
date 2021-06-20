/* eslint-disable no-unused-vars */
// @ts-nocheck

import React, {useState} from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { AlignCenter, Columns, FileText } from 'react-feather';
import Typography from '@material-ui/core/Typography';
import { Input } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import LockOutlineIcon from '@material-ui/icons/LockOutlined'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import { useNavigate } from 'react-router-dom';
import FormHelperText from '@material-ui/core/FormHelperText';

import authService from '../../services/authService.js';
const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh'
    },

    gridLeft: {
        backgroundColor:'#6a1b9a'
    },

    avatar: {
        background: '#6a1b9a',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'

    },

    button: {
        marginTop: theme.spacing(1)
    },

    form : {
        margin: theme.spacing(2, 4)
    },

    link: {
        cursor:'pointer'
    }
}));

function Copyright() {
    return (
        <Typography variant="body2" align="center">
            {'Copyright ©'}
        <a color="inherit" href="https://github.com/adrianomisina">
            Adriano Misina
        </a>{' '}
        {new Date().getFullYear()}
        </Typography>
    )
}
function SignIn() {
    const classes = useStyles();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState();
    async function handleSingnIn() {
        //chamada a API da nossa aplicação
        //se retorno retorno oh, direciona para home
        //senao exibi mensagem para o usuario

        try {
            await authService.signIn(email, password)
            navigate('/');
        } catch(error) {
          setErrorMessage(error.response.data.message);
        }


    }


    return (
        <Grid container className={classes.root}>
            <Grid className={classes.gridLeft}
                item
                container
                direction="column"
                justify="center"
                alignItems="center"
                md={7}>
                <Typography style={{color:'#fff', fontSize:35, lineHeight:'45px'}}>
                    <strong>Go Dev :)</strong>
                </Typography>

                <Typography variant="body2" style={{color:'#fff', marginTop:30, fontSize:'22px'}}>
                    Mostre seu "Hello World!"
                </Typography>
            </Grid>

            <Grid item md={5}
                container
                direction="column"
                justify="center"
                alignItems="center">
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Avatar className={classes.avatar}>
                        <LockOutlineIcon />
                    </Avatar>
                    <Typography variant="h5">
                        Acesso
                    </Typography>

                    <form className={classes.form}>
                        <TextField
                         variant="outlined"
                         margin="normal"
                         required
                         fullWidth
                         id="email"
                         label="E-mail"
                         name="email"
                         autoComplete="email"
                         autoFocus
                         value={email}
                         onChange={(event) => setEmail(event.target.value)}
                        />

                        <TextField
                         variant="outlined"
                         margin="normal"
                         required
                         fullWidth
                         name="password"
                         label="Senha"
                         type="password"
                         id="password"
                         autoComplete="current-password"
                         value={password}
                         onChange={(event) => setPassword(event.target.value)}
                        />

                        <Button
                            className={classes.button}
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={handleSingnIn}
                        >
                         Entrar
                        </Button>
                        {
                            errorMessage &&
                            <FormHelperText error>
                                <strong>{errorMessage}</strong>
                            </FormHelperText>
                        }
                        <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center">
                            <Grid item>
                                <Link className={classes.link}>
                                    Esqueceu sua senha ?
                                </Link>
                            </Grid>


                            <Grid item>
                                <Link className={classes.link}>
                                    Não tem uma conta? Registre-se
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                    <Copyright />
                </Box>
            </Grid>
        </Grid>
    )
}

export default SignIn;