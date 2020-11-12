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
import OrderLine from './order/orderLine'

const App = () => {
  const history = useHistory();
  const location = useLocation();

  const checkPath = (path) => {
    if (path === "/") {
      return false;
    }
    return true;
  };

  return (
    <Router history={history}>
      <div className="flex flex-row">
        {checkPath(location.pathname) ? <Bar /> : null}
        <Switch>
          <Route exact key="login" path="/" component={Login} />
          <Route exact key="order" path="/order" component={Order} />
          <Route exact key="employee" path="/employee" component={Employee} />
          <Route exact key="employee-add" path="/employee/add" component={Employee} />
          <Route exact key="inventory" path="/inventory" component={Inventory} />
          <Route exact key="menu" path="/menu" component={Menu} />
          <Route exact key="branch" path="/branch" component={Branch} />
          <Route exact key="order-make" path="/order/make" component={MakeOrder} />
          <Route exact key="order-line" path={`/order/:orderId`} component={OrderLine} />
          <Route exact key="customer" path="/customer" component={Customer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
