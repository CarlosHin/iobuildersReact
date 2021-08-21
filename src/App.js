import {BrowserRouter,Switch,  Route} from 'react-router-dom';

import './App.css';
import Header from './components/Header'
import Home from './views/Home/Home';
import SignIn from './views/SignIn/SignIn';
import Login from './views/Login/Login';
import Balance from './views/Balance/Balance';
import Deposit from './views/Deposit/Deposit';
import Send from './views/Send/Send';

function App() {
  return (
    <>
    <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/logIn" component={Login} />
          <Route exact path="/balance" component={Balance} />
          <Route exact path="/deposit" component={Deposit} />
          <Route exact path="/send" component={Send} />
          <Route component={Home} />
        </Switch>
    </BrowserRouter>
    </>

  );
}

export default App;
