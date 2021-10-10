import React from 'react';
import Right from '../components/right';
import Left from '../components/left';

import { useEffect,useState} from 'react';

const Createplaylist = () => {
    const[playlist,setPlaylist] = useState("");
    
    useEffect(() => {
        
        const fetchApi= async()=>{
            const url = `https://api.spotify.com/v1/search`
            const response = await fetch(url);
            const resJson = await response.json();
            setPlaylist(resJson.playlist);
        } 
        fetchApi();
     },[playlist])
  
    return (
        <div>
            
            <Left/>
            <Right/>
            <div className=" Rightbottomone">
                <div className="playlistdivcontent">
             <label><h1>Create Playlist</h1></label>   
             <h1>{setPlaylist}</h1>
                </div>
            </div>
        </div>
    )
}
export default Createplaylist ;