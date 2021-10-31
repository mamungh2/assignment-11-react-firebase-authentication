import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddService from './components/AddService/AddService';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import MyOrders from './components/MyOrders/MyOrders';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Services from './components/Services/Services';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      {/* use authprovider to get all data from context api */}
      <AuthProvider>
        <Router>
          {/* share component */}
          <Header></Header>

          {/* all switch to route various components */}
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>

            {/* private route */}
            <PrivateRoute path="/placeorder/:serviceId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manageallorders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>

            <Route path="/addservice">
              <AddService></AddService>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

          {/* share commponent */}
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
