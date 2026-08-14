"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProduct() {

  const router = useRouter();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");

  const addProduct = async (e) => {

    e.preventDefault();

    const product = {
      title,
      price,
      description,
      category,
      brand
    };

    await axios.post(
      "http://localhost:3001/products",
      product
    );

    alert("Product Added");

    router.push("/products");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">

      <form
        onSubmit={addProduct}
        className="flex items-center gap-3"
      >

        <input
          className="border p-2"
          type="text"
          placeholder="Product Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="border p-2"
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          className="border p-2"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          className="border p-2"
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          className="border p-2"
          type="text"
          placeholder="Brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>

      </form>

    </div>
  );
}