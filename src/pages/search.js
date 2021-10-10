import axios from "axios";
import React, { useState,useEffect } from "react";
 import Left from "../components/left";
 import Right from "../components/right";
 import "../App.css";
// import { getSearch } from "../api/musi.api";
 import { CardActions } from "@material-ui/core";
 import { Card } from "@material-ui/core";
 import { CardContent } from "@material-ui/core";
 import { Button } from "@material-ui/core";

 const Search = () => {
   const [searchTerm, setSearchTerm] = useState("");
   const [items,setItems] = useState([]);
   const [filterItem,setFilterItem] = useState([]);
   
   
   const handleChange = async(event)=>{
     setSearchTerm(event.target.value)
     const _items = await getSearch(event.target.value)
     console.log(_items.data)
     setItems(_items.data)
     if(items.length>0){
     setFilterItem(items.filter(item=>item.name.toLowerCase().includes(searchTerm.toLowerCase())))
     console.log(items.filter(item=>item.name.toLowerCase().includes(searchTerm.toLowerCase())))
   }
  }

   const getSearch = async(query) => {
    const response = await axios.get(`https://api.mixcloud.com/discover/rock/latest/?metadata=1`);
    console.log(response.data);
    return response.data;
   }

   useEffect(() => {
  // setItems(getSearch());
    return () => {
       //cleanup
    }
 }, [])  
   return (
     <>
       <div>
       <Left /> 
         <Right />
         <div className=" Rightbottomone">
          <div className="alignittocenter">
             <input
               type="text"
               placeholder="Search"
               onChange={handleChange}
             />
             
             {items.map((val,key)=>{
               return (
                <div style={{display:"flex", flexDirection:"flex-row", flexWrap:"wrap"}}>
                  <div key={key}>
                     <Card style={{
                  width: '260px',
                  margin: '10px',
                  height:'330px',
                 }}>
                 <CardContent>
                   <h4> {val.name}</h4>
                       <img className="imageofcard"  src={val.pictures && val.pictures.thumbnail} alt="Monty"/>
                 </CardContent>
                 <CardActions style={{
                      marginBottom:'10%',
                      backgroundColor:'black',
                      color:'white'
                    }}>
                       <Button style={{color:'white'}}>
                           Play
                       </Button>   
                    </CardActions> 
              </Card>
                 </div>
               </div>  
               )
             })

             }           
             </div>
        </div>
   </div>
    </>
   );
 };

 export default Search;
