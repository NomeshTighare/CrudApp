import { Button, FormControl, FormGroup, FormLabel, Input ,makeStyles, Typography} from "@material-ui/core";
import { useEffect, useState } from "react";
import { edituser, getuser} from '../Service/api';
import { useHistory , useParams } from "react-router-dom";
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
    id:'',
    name: '',
    username: '',
    email:'',
    phone:''
}
const Edituser = () => {
    const [user , setuser] = useState(initialvalues);
    const{ name, username, email, phone} =  user;
    const history = useHistory();
    const { id } = useParams();
    const classes = useStyle();

    const editUserDetails = async() =>{
        await edituser(id, user);
        history.push('/all');
    }

    useEffect (() =>
    {
        loadUserData();
    },[]);
    const loadUserData =async () =>{
       const response = await getuser(id);
       setuser(response.data);
    }
    const onValueChange = (e) =>{
      
        setuser({ ...user,[e.target.name]: e.target.value})
    } 
    
 
    return (
    <FormGroup className={classes.container}>
        <Typography variant="h4">Edit User</Typography>
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
        <Button variant="contained" onClick={ () => editUserDetails()} color="primary">Edit User</Button>
    </FormGroup>
    );
  };
  
  export default Edituser;
  