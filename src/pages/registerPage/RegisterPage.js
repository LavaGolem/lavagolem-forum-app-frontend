import {makeStyles} from "@material-ui/core/styles";
import {Box, Button, TextField} from "@material-ui/core";
import {useState} from "react";
import {useHistory} from "react-router";
import {requestUserLogin, requestUserRegister} from "../../services/UserService";

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

    const registerUser = () => {
        const user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }
        requestUserRegister(user);
        history.push('/')
    }
    const loginUser = () => {
        const user = {
            email: email,
            password: password
        }
        requestUserLogin(user);
    }

    return <Box className={classes.background} display={'flex'}>
        <Box style={{backgroundColor: 'white'}} padding={2} borderRadius={15} margin={10} display={'flex'}
             flexDirection={'column'}>
            <TextField label={'First name'} value={firstName} onChange={e => setFirstName(e.target.value)}/>
            <TextField label={'Last name'} value={lastName} onChange={e => setLastName(e.target.value)}/>
            <TextField label={'Email'} value={email} onChange={e => setEmail(e.target.value)}/>
            <TextField label={'Password'} type="password" value={password}
                       onChange={e => setPassword(e.target.value)}/>
            <Button onClick={registerUser}>Register</Button>

        </Box>
        <Box style={{backgroundColor: 'white'}} padding={2} borderRadius={15} margin={10} display={'flex'}
             flexDirection={'column'}>

            <TextField label={'Email'} value={email} onChange={e => setEmail(e.target.value)}/>
            <TextField label={'Password'} type="password" value={password}
                       onChange={e => setPassword(e.target.value)}/>
            <Button onClick={loginUser}>Login</Button>

        </Box>
    </Box>
}

export default RegisterPage