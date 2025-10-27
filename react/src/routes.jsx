import Homepage from './pages/Homepage';
import { Routes, Route } from 'react-router-dom';
import Aboutuspage from './pages/Aboutuspage';
import Servicepage from './pages/Servicepage';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Productpage from './pages/Productpage';
import ProductDetails from './pages/ProductDetails';
import Dashboardpage from './pages/Dashboardpage';
import Overviewpage from './pages/Overviewpage';
import Customerspage from './pages/Customerspage';
import ProtectedRoutes from './components/ProtectedRoutes';
import { useState } from 'react';

function App() {
  // const [roles ,setRoles] = useState(['user']) ;

  return (
    <div>
      <Routes>
        {/* this is a open route */}
        <Route path="/login" element={<Login />} />

        {/*
         this all going to  be protected routes */}

        {/* admin */}
        <Route element={<ProtectedRoutes role={['admin']} />}>
          <Route path="/dashboard" element={<Dashboardpage />}></Route>

          {/* protected routes */}
          <Route element={<ProtectedRoutes role={['admin', 'user']} />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/about-us" element={<Aboutuspage />} />
            <Route path="/services" element={<Servicepage />} />
            <Route path="/products" element={<Productpage />} />
            <Route path="/products/:id" element={<ProductDetails />} />

            <Route index element={<Overviewpage />} />
            <Route path="overview" element={<Overviewpage />} />
            <Route path="customers" element={<Customerspage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
