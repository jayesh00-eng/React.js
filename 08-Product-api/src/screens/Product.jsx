import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [store, setStore] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch Products
  const handleFetchProducts = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    setProducts(res.data.products);
    setStore(res.data.products);
  };

  // Input Change
  const getSearch = (e) => {
    setSearch(e.target.value);
  };

  // Search Products
  const handleSearch = () => {
    if (search.trim() === "") {
      setProducts(store);
      return;
    }

    const filteredProducts = store.filter(
      (product) =>
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase())
    );

    setProducts(filteredProducts);
  };


  const handleCategoryFilter = (e) => {
    if (e.target.value === "all") {
      setProducts(store);
    } else {
      setProducts(
        store.filter(
          (product) => product.category === e.target.value
        )
      );
    }
  };

  const handlePriceRangeFilter = (e) => {
    setProducts(
      store.filter(
        (product) => product.price >= Number(e.target.value)
      )
    );
  };

  useEffect(() => {
    handleFetchProducts();
  }, []);

  return (
    <div className="container">
      {}
      <div className="d-flex align-items-center flex-wrap gap-3 mt-5 mb-4">
        <input
          type="search"
          className="form-control"
          style={{ width: "800px" }}
          placeholder="Search Product"
          value={search}
          onChange={getSearch}
        />

        <select
          onChange={handleCategoryFilter}
          className="form-select border border-success"
          style={{ width: "180px" }}
        >
          <option value="all">All</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Fragrances</option>
          <option value="furniture">Furniture</option>
          <option value="groceries">Groceries</option>
        </select>

        <input
          onChange={handlePriceRangeFilter}
          type="range"
          className="form-range"
          style={{ width: "180px" }}
          min="0"
          max="2499.99"
        />

        <button
          className="btn btn-outline-success"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {}
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-3" key={product.id}>
            <div className="card h-100">
              <img
                src={product.thumbnail}
                className="card-img-top"
                alt={product.title}
              />

              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>

                <p className="card-text">
                  <strong>Category:</strong> {product.category}
                </p>

                <p className="card-text">
                  <strong>Price:</strong> ${product.price}
                </p>

                <button className="btn btn-primary">
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}