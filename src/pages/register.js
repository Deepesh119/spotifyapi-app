import React from 'react'
import {Link} from 'react-router-dom';
import { Button, CardActions, CardActionArea,CardContent,Card} from '@material-ui/core';



const Register = () => {
    return (
        <div className="cardregister">
             <Card  sx={{ maxWidth:300}}>
                <CardActionArea>
                <img src="https://tse2.mm.bing.net/th?id=OIP.NYf46d8C4pkLk6-5zW0jIwHaHa&pid=Api&P=0&w=300&h=300" alt="piggy wallet"></img>
                  <CardContent
                  margin-left="30%"
                  >
                   <h2 className="bachppan">
                    Relief your Soul 
                   </h2> 
                   <div className="registerdivision">
                   <label>Email</label>
                   <input className="inputspaceregister"type="Email" />
                   </div>
                   <div className="registerdivision">
                   <label>Password</label>   
                   <input  className="inputspaceregistertwo" type="Password" />
                   </div>
                   <div className="registerdivision">
                   <label>Confirm-Email</label>
                   <input className="inputspaceregistertwo" type="Email" />
                   </div>
                   <div className="registerdivision">
                   <label>Confirm-Password</label>   
                   <input className="inputspaceregistertwo"type="Password" />
                    </div>
                    <div className="registerdivision">
                    <label>Contact</label>   
                    <input className="inputspaceregister" type="number" />
                    </div>          
                  </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="Medium" color="primary" Border="2px solid black">
                     <Link to="/login"> Register</Link>
                    </Button>   
                </CardActions>   
                
            </Card>   
               
        </div>
    )
}
export default Register;
