import './App.css';
import { Switch, Route, Router, useLocation, useHistory } from "react-router-dom";
import Bar from './component/bar'
import Employee from './employee/employee'
import Inventory from './inventory/inventory'
import Order from './order/order'
import Login from './login/login'
import Menu from './menu/menu'
import Branch from './branch/branch'

const App = () => {
  const history = useHistory();
  const location = useLocation();

  const checkPath = (path) => {
    if (path === "/") {
      return false;
    }
    console.log("not path /");
    return true;
  };

  return (
    <Router history={history}>
      <div className="flex flex-row">
        {/* {checkPath(location.pathname) ? <Bar /> : null} */}
        <Bar />
        <Switch>
          <Route exact path="/" component={Order} />
          <Route path="/login" component={Login} />
          <Route path="/employee" component={Employee} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/menu" component={Menu} />
          <Route path="/branch" component={Branch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
