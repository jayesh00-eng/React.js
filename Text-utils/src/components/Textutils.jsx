import React, { useState } from "react";

const TextUtils = () => {
  const [text, setText] = useState("");

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const readingTime = (wordCount / 200).toFixed(2);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Text Utils</h1>

      <textarea
        className="form-control mb-3"
        rows="6"
        placeholder="Enter your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <div className="mb-3">
        <button
          className="btn btn-primary me-2"
          onClick={() => setText(text.toUpperCase())}
        >
          Uppercase
        </button>

        <button
          className="btn btn-warning me-2"
          onClick={() => setText(text.toLowerCase())}
        >
          Lowercase
        </button>
        <button
            onClick={() => {
           
            }}
            type="button"
            className="btn btn-success m-1"
          >
            Reading Speed <i className="ri-dashboard-3-fill"></i>
          </button>

        <button
          className="btn btn-danger"
          onClick={() => setText("")}
        >
          Clear
        </button>
      </div>

      <div className="card p-3">
        <h4>Preview</h4>
        <p>{text || "Nothing to preview..."}</p>

        <hr />

        <p>
          <strong>Characters:</strong> {text.length}
        </p>

        <p>
          <strong>Words:</strong> {wordCount}
        </p>

      </div>
    </div>
  );
};

export default TextUtils;