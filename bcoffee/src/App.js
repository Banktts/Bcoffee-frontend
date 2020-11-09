import './App.css';
import { Switch, Route, Router, useLocation, useHistory } from "react-router-dom";
import Bar from './component/bar'
import Employee from './employee/employee'
import EmployeeAdd from './employee/employeeAdd/employeeAdd'
import Inventory from './inventory/inventory'
import Order from './order/order'
import Login from './login/login'

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
          <Route path="/employee" component={Employee} />
          <Route path="/employeeAdd" component={EmployeeAdd} />
          <Route path="/order" component={Order} />
          <Route path="/inventory" component={Inventory} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
