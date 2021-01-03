import {Switch, Route, Redirect} from 'react-router-dom';

import Active from './Active';
import All from './All';
import Completed from './Completed';

function Main() {
    return(
        <Switch>
            <Route path='/active' component={Active}/>
            <Route path='/completed' component={Completed}/>
            <Route path='/' component={All}/>
            <Redirect from='*' to='/' />
        </Switch>
    )
}

export default Main;