
import './App.css';
import Home from './Pages/Home/Home/Home';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ManageOrder from './Pages/ManageOrder/ManageOrder/ManageOrder';
import About from './Pages/ManageOrder/About/About';
import DeliveryDetails from './Pages/ManageOrder/ManageOrder/DeliveryDetails/DeliveryDetails';
import Navigation from './Shared/Navigation/Navigation';
import Navbar from './Pages/ManageOrder/ManageOrder/Navbar/Navbar';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path='/home'>
        <Home></Home>
        </Route>
        <Route path='/delivery/:deliveryId'>
          <DeliveryDetails></DeliveryDetails>
        </Route>
        <Route path='/manageOrder'>
       <ManageOrder></ManageOrder>
        </Route>
        <Route path='/about'>
       <About></About>
        </Route>
        <Route exact path='/'>
        <Home></Home>
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
