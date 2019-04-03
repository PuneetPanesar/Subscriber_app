import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import classes from './AddSubscriber.module.css';

class AddSubscriber extends Component{
    
    render(){
        
        let subscribers=this.props.subscriber;
        
        
         const show= subscribers.map((subscriber,index)=>{ 
        return (
            
            <div key={index}>
            
            <ul>
            <li className={classes.Li}>{subscriber.name} </li> 
            <li className={classes.Li}> {subscriber.mobile}</li>
            <li  className={classes.Li}> <button>Delete</button></li>
           </ul>
           
           </div>
            
            
            );
                
                });    
        return(
        
        <div>
            <ul>
            <li className={classes.Li} ><strong>Name</strong> </li>
            <li className={classes.Li}><strong>Number</strong></li>
            </ul>
       {show}
       </div>
        
        
        );
    }
}

export default AddSubscriber;