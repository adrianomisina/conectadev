import React from 'react';
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
const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
        // flexDirection: 'row',
        height: '100vh'
    },

    gridLeft: {
        backgroundColor:'#6a1b9a'
    },

    avatar: {
        background: '#6a1b9a',
        marginTop: theme.spacing(10),
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
        margin: theme.spacing(0, 4)
    }

    // left: {
    //     background: 'purple',
    //     // flexGrow:0, por default é zero
    //     flexBasis:'58%',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     alignItems:'center',
    //     color:'#fff'

    // },

    // right: {
    //     background: 'yellow',
    //     // flexGrow:0, por default é zero
    //     flexBasis:'42%'
    // },

    // form: {
    //     display: 'flex',
    //     flexDirection: 'column',
    //     margin:'64px 32px',
    //     alignItems: 'center'
    // }
}))
function SignIn() {
    const classes = useStyles();
    //Flex Container
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

            <Grid item md={5}>
                <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
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
                        />

                        <Button
                            className={classes.button}
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                         Entrar
                        </Button>

                        <Grid container>
                            <Grid item>
                                <Link>
                                    Esqueceu sua senha ?
                                </Link>
                            </Grid>


                            <Grid item>
                                <Link>
                                    Não tem uma conta? Registre-se
                                </Link>
                            </Grid>
                        </Grid>


                    </form>
                </Box>
            </Grid>
        </Grid>
    )
        // <div className={classes.root}>

        //     <div className={classes.left}>
        //         <Typography style={{color:'#fff', fontSize:35, lineHeight:'45px'}}>
        //             <strong>Conecta Dev :)</strong>
        //         </Typography>

        //         <Typography variant="body2" style={{color:'rgb(255, 255, 255 0.7)', marginTop:30, fontSize:'15'}}>
        //          Compartilhe seus Conhecimentos com toda nossa rede de Desenvolvedores
        //         </Typography>
        //     </div>

        //     <div className={classes.right}>
        //         <form className={classes.form}>
        //             <h4>Acesso</h4>
        //             <input type="text"></input>
        //             <input type="text"></input>
        //         </form>
        //     </div>
        // </div>

}

export default SignIn;