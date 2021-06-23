import {Grid, Paper, Typography, TextField, Button} from "@material-ui/core"
import {loginStyles} from "../styles/loginStyles"

export default function Login(){
    const classes = loginStyles();
    return (
        <Grid container justify='center' className={classes.root}>
            <Grid item xs={12} md={4}>
                <Grid container className={classes.mainContainer}>
                    <Grid item xs= {12}> 
                        <Paper elevation={12} className={classes.Paper}>
                            <Grid container className={classes.mainContainer}>
                                <Grid item md={12} className={classes.title}>
                                    <Typography variant= 'h4' color='secondary'>
                                        Login
                                    </Typography>
                                    <Grid container className={classes.inputContainer} spacing={3}>
                                        <Grid item md={12}>
                                        <TextField color="prymary" label='E-mail' type="email" variant='outlined' size='small' fullwidth/>
                                        </Grid>
                                        <Grid item md={12}>
                                        <TextField color="prymary" label='Password' type="password" variant='outlined' size='small' fullwidth/>
                                        </Grid>
                                        <Grid item md={12} className={classes.paddingButton}>
                                            <Button fullwidth variant='contained' color='secondary' className={classes.button}>Submit</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper> 
                    </Grid> 
                </Grid>
            </Grid>
        </Grid>
    )
}