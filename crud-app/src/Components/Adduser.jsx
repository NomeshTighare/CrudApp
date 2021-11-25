import { Button, FormControl, FormGroup, FormLabel, Input ,makeStyles, Typography} from "@material-ui/core";
import { useState } from "react";
import { adduser} from '../Service/api';
import { useHistory } from "react-router-dom";

const useStyle = makeStyles({
    container : {
    width:'50%',
    margin : '5% 0 0 25%',
    '& > *' :{
        marginTop : 20 
    }
}
})
const initialvalues = {
    name: '',
    username: '',
    email:'',
    phone:''
}
const Adduser = () => {
    const [user , setuser] = useState(initialvalues);
    const{  name, username, email, phone} =  user;
    const history = useHistory();
    const classes = useStyle();
    const onValueChange = (e) =>{
      
        setuser({ ...user,[e.target.name]: e.target.value})
    } 
    const addUserDetails = async() =>{
        await adduser(user);
        history.push('./all');
    }
  
    return (
    <FormGroup className={classes.container}>
        <Typography variant="h4">Add User</Typography>
        <FormControl>
            <FormLabel>Name</FormLabel>
            <Input onChange={(e)=> onValueChange(e)} name = 'name' value={name} />
        </FormControl>
        <FormControl>
            <FormLabel>Username</FormLabel>
            <Input onChange={(e)=> onValueChange(e)} name = 'username' value={username}/>
        </FormControl>
        <FormControl>
            <FormLabel>Email</FormLabel>
            <Input onChange={(e)=> onValueChange(e)} name = 'email' value={email} />
        </FormControl>
        <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <Input onChange={(e)=> onValueChange(e)} name = 'phone' value={phone} />
        </FormControl>
        <Button variant="contained" onClick={ () => addUserDetails()} color="primary">Add User</Button>
    </FormGroup>
    );
  };
  
  export default Adduser;
  