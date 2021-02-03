import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import FindIdPage from './pages/FindIdPage';
import FindPasswordPage from './pages/FindPasswordPage';
import MainContainer from './container/MainContainer';
function App() {
  return (
    <Switch>
      <Route path="/" exact component={MainContainer} />
      <Route path="/shop/account/signin" component={LoginPage} />
      <Route path="/shop/account/find_id" component={FindIdPage} />
      <Route path="/shop/account/find_pwd" component={FindPasswordPage} />
    </Switch>
  );
}

export default App;
