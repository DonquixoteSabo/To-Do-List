import React, {useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import All from './pages/All';
import Completed from './pages/Completed';
import Active from './pages/Active';


function Main({todos, handleCheckboxChange}) {
    useEffect(()=>{
        console.log('komponent zamontowany');
    })
    return(
             <Switch> 
                <Route path='/active'>{
                    <Active 
                    todos={todos}
                    handleCheckboxChange={handleCheckboxChange} />}
                 </Route>
                <Route path='/completed'>{
                    <Completed 
                    todos={todos}
                    handleCheckboxChange={handleCheckboxChange} />}
                </Route>
                <Route path='/'>{
                    <All 
                    todos={todos}
                    handleCheckboxChange={handleCheckboxChange} />}
                </Route>
                <Redirect from='*' to='/' />
             </Switch> 
  
    )
}

export default Main;