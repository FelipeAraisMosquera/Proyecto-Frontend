import {Grid, Paper, Typography, TextField, Button} from "@material-ui/core"
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {loginStyles} from "../styles/loginStyles"
import { GoogleLogin } from 'react-google-login';


export default function Login({users, setCheckLogin, setGoogleUserData, googleUserData}){


    const history = useHistory();
    const classes = loginStyles();
    console.log(users)
    /* const users_db = [
            {email: 'diarpa2026@hotmail.com', password: 'dicardi'},//Shift+ Alt + ↓ 
            {email: 'felipe-chaac@hotmail.com', password: '123456'}
    
        ] */
    const [validation, setValidation] = useState({
        email: true, 
        password : false
    });
    const [errors, seterrors] = useState({
        email: true,
        password: true
    })
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const {email, password} = user; //estructuramos 
    useEffect(() => {//escucha cada vez que cambie le usuario y compara ese usuario con los que estan en el Json
    let object = users.filter(item => item.email === email);
    let emailValidation = object[0];
    console.log(emailValidation)
        if(emailValidation?.length !== 0){
            //setValidation({...validation, email: true});
            if(emailValidation?.username === password)
            {
                console.log('Si es el password del usuario')
                setValidation({...validation, password: true});
            }else{
                console.log('No es el password')
                setValidation({...validation, password: false});
            }
            
        }
        /* else{
            setValidation({...validation, email: false});
        } */
    }, [users, email, password, validation]);

 /*   useEffect(() => {//escucha cada vez que cambie le usuario y compara ese usuario con los que estan en el Json
        let passwordValidation = users_db.filter(item => item.password === password);
          if(passwordValidation.length !== 0){
              setValidation({...validation, password: true});
          }else{
              setValidation({...validation, password: false});
          }
      }, [password]); */
  
    const handleChange =(e)=>{// e parametro que trae 
        setUser({
            ...user,//pasamos una copia de user para que no nos borre los demas campos
            [e.target.name]: e.target.value//capturamos el email y el password
        });//actualiza
        };//una funcion que escuche ese cambio
//-------------------------------------
        useEffect(() => {
            if(email.trim().length !== 0){
                seterrors({...errors, email: false});

                /* if(password.trim().length !== 0){  ::::: no se por que no funciona === Shift + Alt + A 
                    seterrors({...errors, password: false});
                    }else{
                    seterrors({...errors, password: true});
                 } */

            }else{
                seterrors({...errors, email: true});
        }

        },[user, email, errors]);
        
        

    const handleClick = ()=>{
            if(validation.email && validation.password){//realiza una validacion que los caracteres no esten vacio
                
                alert('Sesion iniciada')
            } else{
                alert('Correo o contraseña invalidos')
            }
    }

    const responseGoogle = (data) => {
        if(data.profileObj?.length !== 0){
            console.log(data.profileObj)
            return saveData(data.profileObj);//ejecutar una funcion
        }
        else {
            return saveData('error');
        }
    }

    const saveData = (data) => {
        if(data){//valida los datos
            setCheckLogin(true);
            setGoogleUserData(data)
            history.push('/')//push a la pagina principal
    
            
            
        }
    }

    return (
        <Grid container justify='center' className={classes.root}>
            <Grid item xs={12} md={4}>
                <Grid container className={classes.mainContainer}>
                    <Grid item xs= {12}> 
                        <Paper elevation={12} className={classes.Paper}>
                            <Grid container className={classes.mainContainer}>
                                <Grid item md={12} sm={12} xs={12} className={classes.title}>
                                    <Typography variant= 'h4' color='secondary'>
                                        Login
                                    </Typography>
                                    <Grid container justify='center' className={classes.inputContainer} spacing={2}>
                                    <Grid item md={12} sm={12} xs={12}>
                                        {errors.email ?(
                                            <Typography style={{color: 'red'}}>
                                                No ha llenado el campo E-mail
                                            </Typography>
                                        ):null}
                                        </Grid>
                                        <Grid item md={12} sm={12} xs={12} spacing={2}>
                                        <TextField  name='email' value={user.email} onChange={handleChange} error={errors.email} color="prymary" label='E-mail' type="email" variant='outlined' size='small' fullWidth />
                                        </Grid>                                 
                                        <Grid item md={12} sm={12} xs={12} spacing={2}>
                                        <TextField name='password' value={user.password} onChange={handleChange} /* error={errors.password} */ color="prymary" label='Password' type="password" variant='outlined' size='small' fullWidth />
                                        </Grid>
                                        <Grid item md={12} sm={12} xs={12} className={classes.paddingButton} spacing={2}>
                                            <Button fullWidth variant='contained' onClick={handleClick} color='secondary' className={classes.button}>Submit</Button>
                                        </Grid>
                                        <Grid>
                                        <Typography color= 'primary'>
                                                Iniciar sesion con Google o Facebook
                                            </Typography>
                                        </Grid>
                                        <Grid item md={12} sm={12} xs={12} className={classes.paddingButton} spacing={2}>
                                        <GoogleLogin
                                            clientId="855682097035-s7929me1hjdbijitqbtqspv59jvfrpml.apps.googleusercontent.com"
                                            buttonText="Iniciar sesion"
                                            onSuccess={responseGoogle}
                                            onFailure={responseGoogle}
                                            cookiePolicy={'single_host_origin'}
                                        />
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