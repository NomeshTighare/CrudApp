import { TableBody, TableCell,Table, TableHead, TableRow,makeStyles,Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getuser , deleteuser } from "../Service/api";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
    table:{
        width : "80%",
        margin : "100px 0 0 100px"
    },
    thead:{ 
        '& > *':{
            background : "#000000",
            color : "#FFF",
             fontSize:"20px",
               }
    },
    row:{
        '& > *':{
             fontSize:"18px"     
    }
}
})


const Allusers = () => {

    const [user , setusers] = useState([]);
    const classes = useStyle();
    useEffect(()=>{
        getalluser();
    },[])

    const deleteUserData = async (id) => {
        await deleteuser(id);
        getalluser();
    }

    const getalluser = async () => {
    let response = await getuser();
    setusers(response.data)
  };
  return (
      <Table className={classes.table}>
          <TableHead>
              <TableRow className={classes.thead}>
                  <TableCell>Id</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Username</TableCell>
                  <TableCell>Email Id</TableCell>
                  <TableCell>Phone Number</TableCell>
                  <TableCell></TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
              {user.map((user) =>(
                      <TableRow className={classes.row} key={user._id}>
                          <TableCell>{user._id}</TableCell>
                          <TableCell>{user.name}</TableCell>
                          <TableCell>{user.username}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.phone}</TableCell>
                          <TableCell>
                            <Button  variant="contained" color="primary" style={{marginRight:"20px "}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                            <Button variant="contained" color="secondary" onClick={() => deleteUserData(user._id)}>Delete</Button>
                            </TableCell>
                          </TableRow>
                  ))
              }
          </TableBody>
      </Table>
  );
};

export default Allusers;
