import React from 'react';
import Layout from './component/layout/Layout';
import AppRoutes from "./router/AppRoutes";

const App = () => {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
};

export default App;
