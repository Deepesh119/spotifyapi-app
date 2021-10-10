import React from 'react';
import "../App.css";
import { AiOutlineRight,AiOutlineLeft } from "react-icons/ai";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';

const Right = () => {
    return (
        <div className="ParentRight">
            <h1> <Link to='/backsign'><AiOutlineLeft className="ico\nlarge"/></Link><Link to='/frontsign'><AiOutlineRight className="iconlargeone"/></Link>
            <ButtonGroup variant="contained" aria-label="outlined primary button group" id="Buttonmargin">
               <Button><Link to='/Login'>LogIN</Link></Button>
               <Button><Link to='/Register'>Register</Link></Button>
            </ButtonGroup>
           </h1>
        </div>
    )
}
export default Right;
