import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage';
import DetailPage from './pages/DetailPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <div className="App">
  
      <Router>
        
        <Route path="/" exact>
          <HomePage></HomePage>
        </Route>

        <Route path="/login">
          <LoginPage></LoginPage>
        </Route>

        <Route path="/register">
          <SignupPage></SignupPage>
        </Route>

        <Route path="/detail/:id">
          <DetailPage></DetailPage>
        </Route>

        <Route path='/cart'>
          <CartPage></CartPage>
        </Route>

        <Route path="/product">
          <ProductPage></ProductPage>
        </Route>

        <Route path='/admin'>
          <AdminPage></AdminPage>
        </Route>

      </Router>
    </div>
  );
}

export default App;
