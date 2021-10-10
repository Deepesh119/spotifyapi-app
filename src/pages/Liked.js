import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { CardActionArea,CardActions} from '@material-ui/core';
import '../App.css';
import Left from '../components/left';
import Right from '../components/right';

const Liked = () => {
    return (
    <>
     <Left/>
     <Right/>
        <div className=" Rightbottomone">
            <h2>Recently Played</h2>
            <div className="Likedsongs">
                <div className="cardstyling">
            <Card style={{
                  
                     width: '260px',
                    margin: 'auto',
                    height:'250px',
                    }}>
                   <CardActionArea style={{
                      height:'200px',
                      width:'200px',
                    }}>
                    <img className="imageofcard"   src="https://tse1.mm.bing.net/th?id=OIP.itehDbVYBTNfCtWYAJAOlgHaHa&pid=Api&P=0&w=200&h=200" alt="piggyda"></img>
                  </CardActionArea>
                    <CardActions
                    style={{
                      marginBottom:'10%',
                      backgroundColor:'black',
                      color:'white'}}>
                       <Button size="Medium" color="primary" Border="2px solid black">
                           Play
                       </Button>   
                    </CardActions>   
            </Card>
               
        </div>
                <div className='marginofsongsweneed'>
                     
                     <Card style={{
                       
                       width: '260px',
                       margin: 'auto',
                       height:'250px',
                       }}>
                      <CardActionArea style={{
                          height:'200px',
                          width:'200px',
                      }}>
                      <img className="imageofcard"   src="https://tse2.mm.bing.net/th?id=OIP.nwebHcYCR8sAnle7s9F2KAHaKP&pid=Api&P=0&w=300&h=200" alt="piggyda"></img>
                       
                      </CardActionArea>
                      <CardActions   style={{
                      marginBottom:'10%',
                      backgroundColor:'black',
                      color:'white'}}>
                          <Button size="Medium" color="primary" Border="2px solid black">
                            Play
                          </Button>   
                      </CardActions>   
                     </Card>
                    </div>
                 <div className="marginofsongsweneed">    
                <Card style={{
                  
                  width: '260px',
                  margin: 'auto',
                  height:'250px',
                  }}>
                 <CardActionArea style={{
                     height:'200px',
                     width:'200px',
                 }}>
                 <img className="imageofcard"   src="https://tse1.mm.bing.net/th?id=OIP.U8thT7gC3rSwOuCW9sOoIQHaFj&pid=Api&P=0&w=200&h=200" alt="piggyda"></img>
                  
                 </CardActionArea>
                 <CardActions   style={{
                      marginBottom:'10%',
                      backgroundColor:'black',
                      color:'white'}}>
                     <Button size="Medium" color="primary" Border="2px solid black">
                       Play
                     </Button>   
                 </CardActions>   
                </Card>
               </div>
               <div className="marginofsongsweneed">    
                <Card style={{
                  
                  width: '260px',
                  margin: 'auto',
                  height:'250px',
                  }}>
                 <CardActionArea style={{
                     height:'200px',
                     width:'200px',
                 }}>
                 <img className="imageofcard"   src="https://tse2.mm.bing.net/th?id=OIP.WY1UAsMr9VwlCRREplxriwHaHa&pid=Api&P=0&w=200&h=200" alt="piggyda"></img>
                  
                 </CardActionArea>
                 <CardActions   style={{
                      marginBottom:'10%',
                      backgroundColor:'black',
                      color:'white'}}>
                     <Button size="Medium" color="primary" Border="2px solid black">
                       Play
                     </Button>   
                 </CardActions>   
                </Card>
               </div>  
        </div>
</div>   
 </>       
    )
}
export default Liked;