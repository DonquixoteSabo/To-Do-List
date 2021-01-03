import {Switch, Route, Redirect} from 'react-router-dom';

import Active from './Active';
import All from './All';
import Completed from './Completed';

function Main() {
    return(
        <Switch>
            {/* <Route path='/active' component={Active}/> */}
            <Route path='/active'>{<Active />}</Route>
            {/* <Route path='/completed' component={Completed}/> */}
            <Route path='/completed'>{<Completed />}</Route>
            {/* <Route path='/' component={All}/> */}
            <Route path='/'>{<All />}</Route>
            <Redirect from='*' to='/' />
        </Switch>
    )
}

export default Main;