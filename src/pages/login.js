import React from 'react';
import { Button, CardActions, CardActionArea,CardContent,Card} from '@material-ui/core';
import './form.css';
import {Link} from 'react-router-dom'



const Login = () => {

    return (
        <div className="cardregister">
            <Card  sx={{ maxWidth:200}}>
                 
                <CardActionArea>
                <img className="photo" src="https://tse2.mm.bing.net/th?id=OIP.NYf46d8C4pkLk6-5zW0jIwHaHa&pid=Api&P=0&w=400&h=300" alt="piggyda"></img>
                  <CardContent
                  margin-left="30%"
                  >
                   <h3 className="bachppan">
                    Play Your Mood
                   </h3> 
                   <div className="registerinput">
                   <label>Email</label>
                   <input id="forspace" type="Email" />
                   </div> 
                   <div className="registerinput">
                   <label>Password</label>   
                   <input id="forspaceone" type="Password" />
                   </div>         
                  </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="Medium" color="primary" Border="2px solid black">
                     <Link to='/Grand'> Sign IN </Link>
                    </Button>   
                </CardActions>   
                
            </Card>   
               
        </div>
    )
}
export default Login ;
