import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from '../src/Components/Home/Home/Home';
import Login from './Components/Login/Login';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Status from './Components/Status/Status';
import Review from './Components/Review/Review';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import AddService from './Components/AddService/AddService';
import AdminService from './Components/Admin/AdminService/AdminService';
import MakeAdmin from './Components/MakeAdmin/MakeAdmin';


export const UserContext = createContext();

function App() {
  const [loggenInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggenInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <PrivateRoute path='/customer/order'>
          <PlaceOrder></PlaceOrder>
        </PrivateRoute>
        <Route path='/customer/status'>
          <Status></Status>
        </Route>
        <Route path='/customer/review'>
          <Review></Review>
        </Route>
        <Route path='/admin/addService'>
          <AddService></AddService>
        </Route>
        <Route path='/admin/allOrders'>
          <AdminService></AdminService>
        </Route>
        <Route path='/admin/makeAdmin'>
          <MakeAdmin></MakeAdmin>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
