// @ts-nocheck
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) =>({
    root: {
        padding: theme.spacing(2), // espaçamento padrão do tema 8px - logo 8 * 2
        width:275,
        marginRight: theme.spacing(2)
    },

    button: {
        width: '100%',
        color: '#481963'
    },

    subHeader: {
        color: '#481963'
    }
}));

//hard code tags
const tags = [
 {id: 1, name: 'javascript'},
 {id: 2, name: 'reactjs'},
 {id: 3, name: 'vuejs'},
 {id: 4, name: 'html5'},
 {id: 5, name: 'css3'},
 {id: 6, name: 'ux'}
]

function NavBar() {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Button variant="outlined" className={classes.button}><strong>Registrar Grátis</strong></Button>
            <ListSubheader className={classes.subHeader}><strong>{`Tags em Alta`}</strong></ListSubheader>
            {
                tags.map((item) =>(
                    <ListItem dense button key={`item-${item.id}-${item.name}`}>
                        <ListItemText primary={`#${item.name}`} />
                    </ListItem>
                ))
            }
            <ListItem button className={classes.button}>
                Exibir mais Tags#
            </ListItem>
        </Paper>
    )
}

export default NavBar;