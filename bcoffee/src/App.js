import { Switch, Route, Router, useLocation, useHistory } from "react-router-dom";
import Bar from './component/bar'
import Employee from './employee/employee'
import Inventory from './inventory/inventory'
import Order from './order/order'
import Login from './login/login'
import Menu from './menu/menu'
import Branch from './branch/branch'
import MakeOrder from './order/makeOrder'
import Customer from './customer/customer'

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
        {checkPath(location.pathname) ? <Bar /> : null}
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/employee" component={Employee} />
          <Route exact path="/inventory" component={Inventory} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/branch" component={Branch} />
          <Route exact path="/order/make" component={MakeOrder} />
          <Route exact path="/customer" component={Customer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
