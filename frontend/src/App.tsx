import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/users/login';
import { Toaster } from 'react-hot-toast';
import DashboardPage from './pages/dashboard/dashboard-page';
import ProductTable from './pages/dashboard/products/product-table';

import Test from "./utils/test";

const App = () => {
    return (
    <Router>
      <Routes>
        <Route path='/' element={<ProductTable />} />
          <Route
              path='/map-test'
              element={
                  <Test />
              }
          />
        <Route
          path='/dashboard'
          element={
              <DashboardPage />
          }
        />
        <Route
          path='/dashboard/product-list'
          element={
              <ProductTable />
          }
        />
      </Routes>
      <Toaster position='top-center' reverseOrder={false} />
    </Router>
  );
};

export default App;
