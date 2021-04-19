import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home.jsx';
import Features from './Features.jsx';
import Pricing from './Pricing.jsx';
import Login from './Login.jsx';
import Signupforlogin from './Signupforlogin.jsx';


class App extends React.Component {
   render() {
      return (
         <Switch>                
             <Route path='/home' component={Home}/>  
             <Route path='/features' component={Features}/>               
             <Route path='/pricing' component={Pricing}/>
             <Route path='/login' component={Login}/> 
             <Route path='/signup' component={Signupforlogin}/>    
             <Route path='/' component={Home}/>       
          </Switch>
      );
   }
}
export default App;