"use client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddProduct from "./add-product/page";
import Products from "./products/page";

function Home() {

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <h1>Data Tables</h1>

      <div style={{ display: "flex", gap: "15px" }}>

        <a href="/add-product">
          <button>Add Product</button>
        </a>

        <a href="/products">
          <button>View Products</button>
        </a>

      </div>

    </div>
  );
}


export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/add-product"
          element={<AddProduct />}
        />

        <Route
          path="/products"
          element={<Products />}
        />

      </Routes>

    </BrowserRouter>

  );
}