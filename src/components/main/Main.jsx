import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import All from './pages/All';
import Completed from './pages/Completed';
import Active from './pages/Active';


function Main({todos, handleCheckboxChange, handleDeleteTask, handleDeleteAll}) {
    return(
             <Switch> 
                <Route path='/active'>{
                    <Active 
                    todos={todos}
                    handleCheckboxChange={handleCheckboxChange}
                    handleDeleteTask={handleDeleteTask} />}
                 </Route>
                <Route path='/completed'>{
                    <Completed 
                    todos={todos}
                    handleCheckboxChange={handleCheckboxChange}
                    handleDeleteTask={handleDeleteTask} 
                    handleDeleteAll={handleDeleteAll}/>}
                </Route>
                <Route path='/'>{
                    <All 
                    todos={todos}
                    handleCheckboxChange={handleCheckboxChange}
                    handleDeleteTask={handleDeleteTask} />}
                </Route>
                <Redirect from='*' to='/' />
             </Switch> 
  
    )
}

export default Main;