import React from 'react';
import "../App.css";
import { FaSpotify} from "react-icons/fa";
import { BiHome,BiSearch,BiBookOpen,BiPlusMedical } from "react-icons/bi";
import { BsFillHeartFill } from "react-icons/bs";
import {Link} from 'react-router-dom';


const Left = () => {
    return (
        <div className="ParentLeft">
            <h1><FaSpotify id="icon"/>Spotify</h1>
            
            
            <ul>
               <h3><Link to='/Home'><li> <BiHome/>Home</li></Link></h3>
               <h3><Link to='/Search'><li><BiSearch/>Search</li></Link></h3>
               <h3><Link to='/Library'><li><BiBookOpen/>Library</li></Link></h3>
               <h3><Link to='/Createplaylist'><li className="marginoftheicon"><BiPlusMedical/>Create-Playlist</li></Link></h3>
               <h3><Link to='/Liked'><li><BsFillHeartFill/>Liked Song </li></Link></h3> 
            </ul>
        
            
            <h6 className="privacyone"> Privacy Policies </h6>
            <h6 className="cookies">Cookies...</h6>
        </div>
    )
}
export default Left;