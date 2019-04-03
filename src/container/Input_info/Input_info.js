import React,{Component} from 'react';
import AddSubscriber from '../AddSubscriber/AddSubscriber';
import {Route,Link} from 'react-router';
import classes from './Input_info.module.css';

class Input_info extends Component{
    state={
    name:null,
    mobile:null,
    subscriber:[]
    
}
    
     nameHandler=(event)=>{
        this.setState({name:event.target.value})
         
       
    }
    
    mobileHandler=(event)=>{
        this.setState({mobile:event.target.value})
    }
    
    addSubscriber=( )=>{
        let updatedSubscriber=[...this.state.subscriber];
         let info={
             name:this.state.name,
             mobile:this.state.mobile
         }
        updatedSubscriber.push(info);
        

        this.setState({subscriber:updatedSubscriber});
    }
    
    render(){
      console.log(this.state.subscriber);
    
    return(
        
        <div>
        
    <div className={classes.Header}>ADD SUBSCRIBER</div>
    <div className={classes.Input}> 
    
        Name : <input type="text" placeholder="Enter your Name" onChange={this.nameHandler.bind()} /><br/>
        <br/>
        Mobile : <input type="text" placeholder="Your Mobile Number" onChange={this.mobileHandler.bind()}/>
         <br/>
        <h3>Subscriber to be added:</h3>
    
        <div>
        <p>Name: {this.state.name}</p>
        <p>Mobile No: {this.state.mobile}</p>
        </div>
        <button className={classes.Add} onClick={this.addSubscriber.bind( )}>Add</button>
        
        <AddSubscriber subscriber={this.state.subscriber} />
            
        
        
        
    
    </div>
        </div>
    
           
    );  
    }
   
}
export default Input_info;