import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import All from './pages/All';
import Completed from './pages/Completed';
import Active from './pages/Active';


function Main({todos}) {
  
    return(
             <Switch> 
                <Route path='/active'>{
                    <Active 
                    todos={todos} />}
                 </Route>
                <Route path='/completed'>{
                    <Completed 
                    todos={todos} />}
                </Route>
                <Route path='/'>{
                    <All 
                    todos={todos} />}
                </Route>
                <Redirect from='*' to='/' />
             </Switch> 
  
    )
}

export default Main;