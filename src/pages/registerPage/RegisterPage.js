import {makeStyles} from "@material-ui/core/styles";
import {Box, Button, TextField} from "@material-ui/core";
import {useState} from "react";
import {useHistory} from "react-router";
import {requestUserLogin, requestUserRegister} from "../../services/UserService";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: '#e8e7e7',
        paddingLeft: theme.spacing(25),
        paddingRight: theme.spacing(25),
    },
}));

const RegisterPage = () => {
    const classes = useStyles();
    const history = useHistory();

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    const registerUser = () => {
        const user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }
        const response = requestUserRegister(user);
        if (response) {
            history.push('/')
        }
    }
    const loginUser = () => {
        const user = {
            email: loginEmail,
            password: loginPassword
        }
        const response = requestUserLogin(user);
        if (response) {
            history.push('/')
        }
    }

    return <Box className={classes.background} display={'flex'}>
        <Box style={{backgroundColor: 'white', width: '100%'}} padding={2} margin={5} borderRadius={15} display={'flex'}
             flexDirection={'column'}>
            <Typography variant={'h5'}>Register</Typography>
            <TextField label={'First name'} onChange={e => setFirstName(e.target.value)}/>
            <TextField label={'Last name'} onChange={e => setLastName(e.target.value)}/>
            <TextField label={'Email'} onChange={e => setEmail(e.target.value)}/>
            <TextField label={'Password'} type="password"
                       onChange={e => setPassword(e.target.value)}/>
            <Button onClick={registerUser}>Register</Button>

        </Box>
        <Box style={{backgroundColor: 'white', width: '100%'}} padding={2} margin={5} borderRadius={15} display={'flex'}
             flexDirection={'column'}>
            <Typography variant={'h5'}>Login</Typography>

            <TextField label={'Email'} onChange={e => setLoginEmail(e.target.value)}/>
            <TextField label={'Password'} type="password"
                       onChange={e => setLoginPassword(e.target.value)}/>
            <Button onClick={loginUser}>Login</Button>

        </Box>
    </Box>
}

export default RegisterPage