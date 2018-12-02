import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './home';
import About from './about';
import Support from './support';
import Services from  './services';
import Contact from './contact';
import Signup from './signup';
import Details from './details';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/support" component={Support}/>
        <Route path="/services" component={Services}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/details/:id" component={Details}/>
    </Switch>

)
export default Main ;