import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UsersListScreen';
import AdminCreateProducts from './screens/AdminScreens/AdminCreateProducts';
import AdminFetchProducts from './screens/AdminScreens/AdminFetchProducts';
import Switch from 'react-bootstrap/esm/Switch';
import MakePayment from './components/MakePayment';
import AdminAllOrdersScreen from './screens/AdminScreens/AdminAllOrdersScreen';
import AdminUpdateOrderToDeliverScreen from './screens/AdminScreens/AdminUpdateOrderToDeliverScreen';
import AdminAllPayments from './screens/AdminScreens/AdminAllPayments';
import AdminEditProduct from './screens/AdminScreens/AdminEditProduct';
import AdminDasboard from './screens/AdminScreens/AdminDasboard';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          {/* /cart/:id? means the id is optional */}
          <Route exact path='/cart/:id?' component={CartScreen} />
          <Route exact path='/product/:id' component={ProductScreen} />
          <Route exact path='/order/:id' component={OrderScreen} />
          <Route exact path='/login' component={LoginScreen} />
          <Route exact path='/placeorder' component={PlaceOrderScreen} />
          <Route exact path='/payment' component={PaymentScreen} />
          <Route exact path='/shipping' component={ShippingScreen} />
          <Route exact path='/profile' component={ProfileScreen} />
          <Route exact path='/register' component={RegisterScreen} />
          <Route exact path='/pay' component={MakePayment} />
          {/* Admin Routes */}
          <Route exact path='/admin/users' component={UserListScreen} />
          <Route
            exact
            path='/admin/createproducts'
            component={AdminCreateProducts}
          />
          <Route
            exact
            path='/admin/fetchproducts'
            component={AdminFetchProducts}
          />

          <Route
            exact
            path='/admin/allorders'
            component={AdminAllOrdersScreen}
          />

          <Route
            exact
            path='/admin/edit/product/:id'
            component={AdminEditProduct}
          />
          <Route
            exact
            path='/admin/updatetoorder/:id'
            component={AdminUpdateOrderToDeliverScreen}
          />
          <Route exact path='/admin/allpayments' component={AdminAllPayments} />
          <Route exact path='/admin/dashboard' component={AdminDasboard} />
        </Switch>

        <Footer />
      </Router>
    </>
  );
};

export default App;
