import React from "react";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Carts from "./components/Carts/Carts";
import New from "./components/NewProduct/NewProduct";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { AuthContextProvider } from "./context/AuthContext";
import AllProducts from "./components/AllProducts/AllProducts";
import Main from "./components/Main/Main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./components/Footer/Footer";
import "./css/app.scss";
import BrandIssue from "./components/BrandIssue/BrandIssue";
import Sunglasses from "./Pages/Sunglasses";
import Glasses from "./Pages/Glasses";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/sunglasses" element={<Sunglasses />} />
          <Route path="/glasses" element={<Glasses />} />
          <Route path="/carts" element={<Carts />} />
          <Route path="/brandIssue" element={<BrandIssue />} />
          <Route
            path="/products/new"
            element={
              <ProtectedRoute requireAdmin>
                <New />
              </ProtectedRoute>
            }
          />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </QueryClientProvider>
  );
};

export default App;
