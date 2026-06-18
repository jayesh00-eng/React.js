import React from 'react'

export default function Contact() {
  return (
    <div>
      <nav className="d-flex justify-content-center gap-5 p-3">
        
        <a href="/Home" className="nav-link">Home</a>
        <a href="/Project" className="nav-link">Project</a>
        <a href="/Contact" className="nav-link">Contact</a>
        <a href="/About" className="nav-link">About</a>
      </nav>
      <section className="container my-3">
  <h1 className='text-center fs-1 text-black fw-bold'>Contact</h1>

      <div className="container col-6">

          <div className="mb-3 text-start fw-bold">
            <label htmlFor="exampleFormControlInput1" className="form-label ">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your name here..."
            />
          </div>
          <div className="mb-3 text-start fw-bold">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3 text-start fw-bold">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              defaultValue={""}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-outline-primary w-100">
              Submit
            </button>
          </div>

      </div>
    </section>
    </div>
  )
}
