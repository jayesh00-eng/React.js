"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Products() {

  const [products, setProducts] = useState([]);

  const [page, setPage] = useState(1);

  const [editId, setEditId] = useState(null);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");

  const limit = 5;



  const getProducts = async () => {

    try {

      const response = await axios.get(
        `http://localhost:3001/products?_page=${page}&_per_page=${limit}`
      );

      setProducts(response.data.data);

    } catch (error) {

      console.log(error);

    }

  };


  useEffect(() => {

    getProducts();

  }, [page]);


  

  const handleDelete = async (id) => {

    const confirmDelete = confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) {
      return;
    }

    try {

      await axios.delete(
        `http://localhost:3001/products/${id}`
      );

      alert("Product Deleted Successfully");

      getProducts();

    } catch (error) {

      console.log(error);

    }

  };


  // EDIT

  const handleEdit = (product) => {

    setEditId(product.id);

    setTitle(product.title);
    setPrice(product.price);
    setDescription(product.description);
    setCategory(product.category);
    setBrand(product.brand);

  };


  // UPDATE

  const handleUpdate = async (e) => {

    e.preventDefault();

    try {

      await axios.put(
        `http://localhost:3001/products/${editId}`,
        {
          title,
          price,
          description,
          category,
          brand
        }
      );

      alert("Product Updated Successfully");

      setEditId(null);

      setTitle("");
      setPrice("");
      setDescription("");
      setCategory("");
      setBrand("");

      getProducts();

    } catch (error) {

      console.log(error);

    }

  };


  return (

    <div className="page">

      <div className="product-container">


        {/* HEADER */}

        <div className="top">

          <div>

            <h1>Products</h1>

          </div>

        </div>


        

        {editId && (

          <div className="form-card">

            <h2>Edit Product</h2>

            <form onSubmit={handleUpdate}>

              <label>Product Name</label>

              <input
                type="text"
                value={title}
                onChange={(e) =>
                  setTitle(e.target.value)
                }
              />


              <label>Price</label>

              <input
                type="number"
                value={price}
                onChange={(e) =>
                  setPrice(e.target.value)
                }
              />


              <label>Description</label>

              <textarea
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
              />


              <label>Category</label>

              <input
                type="text"
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value)
                }
              />


              <label>Brand</label>

              <input
                type="text"
                value={brand}
                onChange={(e) =>
                  setBrand(e.target.value)
                }
              />


              <button type="submit">
                Update Product
              </button>


              <button
                type="button"
                onClick={() => setEditId(null)}
                style={{
                  marginTop: "10px",
                  background: "gray"
                }}
              >
                Cancel
              </button>

            </form>

          </div>

        )}


    

        <div className="table-box">

          <table>

            <thead>

              <tr>

                <th>ID</th>
                <th>Product</th>
                <th>Price</th>
                <th>Description</th>
                <th>Category</th>
                <th>Brand</th>
                <th>Action</th>

              </tr>

            </thead>


            <tbody>

              {products.length > 0 ? (

                products.map((product) => (

                  <tr key={product.id}>

                    <td>
                      {product.id}
                    </td>

                    <td>
                      <strong>
                        {product.title}
                      </strong>
                    </td>

                    <td>
                      ₹{product.price}
                    </td>

                    <td>
                      {product.description}
                    </td>

                    <td>
                      {product.category}
                    </td>

                    <td>
                      {product.brand}
                    </td>

                    <td>

                      <button
                        onClick={() =>
                          handleEdit(product)
                        }
                      >
                        Edit
                      </button>


                      <button
                        className="delete-btn"
                        onClick={() =>
                          handleDelete(product.id)
                        }
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td colSpan="7">
                    No Products Found
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>


        {/* PAGINATION */}

        <div className="pagination">

          <button
            disabled={page === 1}
            onClick={() =>
              setPage(page - 1)
            }
          >
            ← Previous
          </button>


          <span>
            Page {page}
          </span>


          <button
            disabled={products.length < limit}
            onClick={() =>
              setPage(page + 1)
            }
          >
            Next →
          </button>

        </div>


      </div>

    </div>

  );
}