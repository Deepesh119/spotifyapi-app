import React,{useEffect, useState} from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { CardActions, CardContent} from '@material-ui/core';
import '../App.css';
import { getArtistsList} from '../api/musi.api';
import {getPopularList} from '../api/musi.api';
import {getMumbai} from '../api/musi.api';



const Rightbottom = () => {

   const [artists, setartists] = useState();
   const [populars, setPopulars] = useState({});
   const [city, setCity] = useState("");
   
   const getcitys = async ()=>{
      const response = await getMumbai("");
      setCity(response.data)
   
   }
   
   useEffect(() => {
      getcitys();
      return () => {
         //cleanup
      }
   }, [])  

   
const getPopular = async ()=>{
   const response = await getPopularList("");
   setPopulars(response.data)

}

useEffect(() => {
   getPopular();
   return () => {
      //cleanup
   }
}, [])


   const getArtist = async () =>{
      const response = await getArtistsList("");
      setartists(response.data.data);
   }

   useEffect(() => {
      getArtist();
      return () => {
         //cleanup
      }
   }, [])

   return (
   <div className=" Rightbottomone">
         
      <h2>Rock Music Latest </h2>
    <div className="Likedsongs">
      <div style={{display:"flex", flexDirection:"flex-row", flexWrap:"wrap"}}>
         {
            artists !=null &&
            artists.map((artist)=>(
               
               <Card style={{
                  
                   width: '260px',
                   margin: '10px',
                   height:'330px',
                  }}>
                  <CardContent>
                  <h4> {artist.name}</h4>
                     <img className="imageofcard"  src={artist.pictures && artist.pictures.thumbnail} alt="Monty"/>
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
            ))
         }       
      </div>
      </div>
     <h2> Popular Song </h2>
      <div className="rightbottomsecond">
    
      <div className="Likedsongs">
        <div className="cardstyling">
        <div style={{display:"flex", flexDirection:"flex-row", flexWrap:"wrap"}}>
         
           
                     <Card style={{
                    justifyContent:'space-evenly',
                    width: '260px',
                    margin: 'auto',
                    height:'280px',
                      }}>
             <CardContent style={{
                  height:'200px',
                  width:'200px',
                  }}>
              <h3>{populars.name}</h3>       
               <img className="imageofcards"   src={populars.pictures && populars.pictures.medium_mobile} alt="Loading...."/>
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
      </div> 
    </div>
    <div className="rightbottomsecond">
    <h2> City : Mumbai </h2>
    <div className="Likedsongs">
      <div className="cardstyling">
      <div style={{display:"flex", flexDirection:"flex-row", flexWrap:"wrap"}}>
       
      <Card style={{
                    justifyContent:'space-evenly',
                    width: '260px',
                    margin: 'auto',
                    height:'280px',
                      }}>
             <CardContent style={{
                  height:'200px',
                  width:'200px',
                  }}>
              <h3>{city.name}</h3>       
               <img className="imageofcards"  src={populars.pictures && populars.pictures.medium_mobile} alt="Loading...."/>
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
    </div>
      </div>  
   </div>   
   )

   //  return (
   //      <div className=" Rightbottomone">

 

   //          <h2>Recently Played</h2>
   //          <div className="Likedsongs">
   //          {
   //             artists !=null &&
   //             artists.map((artist)=>{
   //                <Card>
   //                   <CardContent>
   //                      {artist.name}
   //                   </CardContent>
   //                </Card>
   //             })
   //          }
   //              <div className="cardstyling">
   //          <Card style={{
                  
   //                   width: '260px',
   //                  margin: 'auto',
   //                  height:'250px',
   //                  }}>
   //                 <CardActionArea style={{
   //                    height:'200px',
   //                    width:'200px',
   //                  }}>
   //                  <img className="imageofcard"   src="https://tse1.mm.bing.net/th?id=OIP.itehDbVYBTNfCtWYAJAOlgHaHa&pid=Api&P=0&w=200&h=200" alt="piggyda"></img>
   //                </CardActionArea>
   //                  <CardActions>
   //                     <Button size="Medium" color="primary" Border="2px solid black">
   //                         Play
   //                     </Button>   
   //                  </CardActions>   
   //          </Card>
               
   //      </div>
   //              <div className='marginofsongsweneed'>
                     
   //                   <Card style={{
                       
   //                     width: '260px',
   //                     margin: 'auto',
   //                     height:'250px',
   //                     }}>
   //                    <CardActionArea style={{
   //                        height:'200px',
   //                        width:'200px',
   //                    }}>
   //                    <img className="imageofcard"   src="https://tse2.mm.bing.net/th?id=OIP.nwebHcYCR8sAnle7s9F2KAHaKP&pid=Api&P=0&w=300&h=200" alt="piggyda"></img>
                       
   //                    </CardActionArea>
   //                    <CardActions>
   //                        <Button size="Medium" color="primary" Border="2px solid black">
   //                          Play
   //                        </Button>   
   //                    </CardActions>   
   //                   </Card>
   //                  </div>
   //               <div className="marginofsongsweneed">    
   //              <Card style={{
                  
   //                width: '260px',
   //                margin: 'auto',
   //                height:'250px',
   //                }}>
   //               <CardActionArea style={{
   //                   height:'200px',
   //                   width:'200px',
   //               }}>
   //               <img className="imageofcard"   src="https://tse1.mm.bing.net/th?id=OIP.U8thT7gC3rSwOuCW9sOoIQHaFj&pid=Api&P=0&w=200&h=200" alt="piggyda"></img>
                  
   //               </CardActionArea>
   //               <CardActions>
   //                   <Button size="Medium" color="primary" Border="2px solid black">
   //                     Play
   //                   </Button>   
   //               </CardActions>   
   //              </Card>
   //             </div>
   //             <div className="marginofsongsweneed">    
   //              <Card style={{
                  
   //                width: '260px',
   //                margin: 'auto',
   //                height:'250px',
   //                }}>
   //               <CardActionArea style={{
   //                   height:'200px',
   //                   width:'200px',
   //               }}>
   //               <img className="imageofcard"   src="https://tse2.mm.bing.net/th?id=OIP.WY1UAsMr9VwlCRREplxriwHaHa&pid=Api&P=0&w=200&h=200" alt="piggyda"></img>
                  
   //               </CardActionArea>
   //               <CardActions>
   //                   <Button size="Medium" color="primary" Border="2px solid black">
   //                     Play
   //                   </Button>   
   //               </CardActions>   
   //              </Card>
   //             </div>  
   //      </div>  
   //      <div className="rightbottomsecond">
   //          <h3>Latest Release</h3>
   //          <div className="Likedsongs">
   //               <div className="cardstyling">
   //                   <Card style={{
                  
   //                      width: '260px',
   //                      margin: 'auto',
   //                      height:'250px',
   //                      }}>
   //                   <CardActionArea style={{
   //                    height:'200px',
   //                    width:'200px',
   //                   }}>
   //                   <img className="imageofcard"   src="https://tse1.mm.bing.net/th?id=OIP.HzY-9WM8XO613LocFTZbSgHaHa&pid=Api&P=0&w=200&h=200" alt="piggyda"></img>
   //                   </CardActionArea>
   //                   <CardActions>
   //                      <Button size="Medium" color="primary" Border="2px solid black">
   //                         Play
   //                      </Button>   
   //                    </CardActions>   
   //                   </Card>
   //              </div>
   //              <div className="cardstyling">
   //                   <Card style={{
                  
   //                      width: '260px',
   //                      margin: 'auto',
   //                      height:'250px',
   //                      }}>
   //                   <CardActionArea style={{
   //                    height:'200px',
   //                    width:'200px',
   //                   }}>
   //                   <img className="imageofcard"   src="https://tse2.mm.bing.net/th?id=OIP.2n3FD50t6yjo2K5nZyKbrQAAAA&pid=Api&P=0&w=200&h=200" alt="piggyda"></img>
   //                   </CardActionArea>
   //                   <CardActions>
   //                      <Button size="Medium" color="primary" Border="2px solid black">
   //                         Play
   //                      </Button>   
   //                    </CardActions>   
   //                   </Card>
   //              </div>
   //              <div className="cardstyling">
   //                   <Card style={{
                  
   //                      width: '260px',
   //                      margin: 'auto',
   //                      height:'250px',
   //                      }}>
   //                   <CardActionArea style={{
   //                    height:'200px',
   //                    width:'200px',
   //                   }}>
   //                   <img className="imageofcard"   src="http://cps-static.rovicorp.com/3/JPG_250/MI0002/031/MI0002031409.jpg?partner=allrovi.com" alt="piggyda"></img>
   //                   </CardActionArea>
   //                   <CardActions>
   //                      <Button size="Medium" color="primary" Border="2px solid black">
   //                         Play
   //                      </Button>   
   //                    </CardActions>   
   //                   </Card>
   //              </div>
   //              <div className="cardstyling">
   //                   <Card style={{
                  
   //                      width: '260px',
   //                      margin: 'auto',
   //                      height:'250px',
   //                      }}>
   //                   <CardActionArea style={{
   //                    height:'200px',
   //                    width:'200px',
   //                   }}>
   //                   <img className="imageofcard"   src="https://tse2.mm.bing.net/th?id=OIP.uz2r6Ag2t-3dTqMEDZ3j_QHaHa&pid=Api&P=0&w=200&h=200" alt="piggyda"></img>
   //                   </CardActionArea>
   //                   <CardActions>
   //                      <Button size="Medium" color="primary" Border="2px solid black">
   //                         Play
   //                      </Button>   
   //                    </CardActions>   
   //                   </Card>
   //              </div>
   //              <div className="cardstyling">
   //                   <Card style={{
                  
   //                      width: '260px',
   //                      margin: 'auto',
   //                      height:'250px',
   //                      }}>
   //                   <CardActionArea style={{
   //                    height:'200px',
   //                    width:'200px',
   //                   }}>
   //                   <img className="imageofcard"   src="https://tse1.mm.bing.net/th?id=OIP.itehDbVYBTNfCtWYAJAOlgHaHa&pid=Api&P=0&w=200&h=200" alt="piggyda"></img>
   //                   </CardActionArea>
   //                   <CardActions>
   //                      <Button size="Medium" color="primary" Border="2px solid black">
   //                         Play
   //                      </Button>   
   //                    </CardActions>   
   //                   </Card>
   //              </div>
   //          </div>
   //          <div classname="rightbottomsecond">
   //              <h3> You Must Listen</h3>
   //          <div className="Likedsongs">
   //              <div className="cardstyling">
   //                <Card style={{
                  
   //                    width: '260px',
   //                    margin: 'auto',
   //                    height:'250px',
   //                   }}>
   //                  <CardActionArea style={{
   //                    height:'200px',
   //                    width:'200px',
   //                  }}>
   //                  <img className="imageofcard"   src="https://tse3.mm.bing.net/th?id=OIP.H9k6ZYjYdDxpB2OWxW4KIAHaHa&pid=Api&P=0&w=200&h=200" alt="piggyda"></img>
   //                  </CardActionArea>
   //                   <CardActions>
   //                     <Button size="Medium" color="primary" Border="2px solid black">
   //                         Play
   //                     </Button>   
   //                  </CardActions>   
   //                </Card>
   //             </div>
   //             <div className="cardstyling">
   //                <Card style={{
                  
   //                    width: '260px',
   //                    margin: 'auto',
   //                    height:'250px',
   //                   }}>
   //                  <CardActionArea style={{
   //                    height:'200px',
   //                    width:'200px',
   //                  }}>
   //                  <img className="imageofcard"   src="https://www.audiophileusa.com/covers400water/132186.jpg" alt="piggyda"></img>
   //                  </CardActionArea>
   //                   <CardActions>
   //                     <Button size="Medium" color="primary" Border="2px solid black">
   //                         Play
   //                     </Button>   
   //                  </CardActions>   
   //                </Card>
   //             </div>
   //             <div className="cardstyling">
   //                <Card style={{
                  
   //                    width: '260px',
   //                    margin: 'auto',
   //                    height:'250px',
   //                   }}>
   //                  <CardActionArea style={{
   //                    height:'200px',
   //                    width:'200px',
   //                  }}>
   //                  <img className="imageofcard"   src="https://tse2.mm.bing.net/th?id=OIP.5aJiFfLOOzyM6r6hdq2mIwHaHO&pid=Api&P=0&w=200&h=200" alt="piggyda"></img>
   //                  </CardActionArea>
   //                   <CardActions>
   //                     <Button size="Medium" color="primary" Border="2px solid black">
   //                         Play
   //                     </Button>   
   //                  </CardActions>   
   //                </Card>
   //             </div>
   //             <div className="cardstyling">
   //                <Card style={{
                  
   //                    width: '260px',
   //                    margin: 'auto',
   //                    height:'250px',
   //                   }}>
   //                  <CardActionArea style={{
   //                    height:'200px',
   //                    width:'200px',
   //                  }}>
   //                  <img className="imageofcard"   src="https://tse3.mm.bing.net/th?id=OIP.-6K8s8CnbrmYnV_PpWDglgHaHa&pid=Api&P=0&w=200&h=200" alt="piggyda"></img>
   //                  </CardActionArea>
   //                   <CardActions>
   //                     <Button size="Medium" color="primary" Border="2px solid black">
   //                         Play
   //                     </Button>   
   //                  </CardActions>   
   //                </Card>
   //             </div>
   //             <div className="cardstyling">
   //                <Card style={{
                  
   //                    width: '260px',
   //                    margin: 'auto',
   //                    height:'250px',
   //                   }}>
   //                  <CardActionArea style={{
   //                    height:'200px',
   //                    width:'200px',
   //                  }}>
   //                  <img className="imageofcard"   src="https://tse4.mm.bing.net/th?id=OIP.jHSQAtGAdM4CHpfrqr9QLwHaHa&pid=Api&P=0&w=200&h=200" alt="piggyda"></img>
   //                  </CardActionArea>
   //                   <CardActions>
   //                     <Button size="Medium" color="primary" Border="2px solid black">
   //                         Play
   //                     </Button>   
   //                  </CardActions>   
   //                </Card>
   //             </div>
   //             <div className="cardstyling">
   //                <Card style={{
                  
   //                    width: '260px',
   //                    margin: 'auto',
   //                    height:'250px',
   //                   }}>
   //                  <CardActionArea style={{
   //                    height:'200px',
   //                    width:'200px',
   //                  }}>
   //                  <img className="imageofcard"   src="https://tse4.mm.bing.net/th?id=OIP.BKYNqeeRqk4EE15JlzMbPAHaHa&pid=Api&P=0&w=200&h=200" alt="piggyda"></img>
   //                  </CardActionArea>
   //                   <CardActions>
   //                     <Button size="Medium" color="primary" Border="2px solid black">
   //                         Play
   //                     </Button>   
   //                  </CardActions>   
   //                </Card>
   //             </div>
   //          </div>          
   //         </div>
   //       </div>     
   // </div>   
        
   //  )
}
export default Rightbottom;