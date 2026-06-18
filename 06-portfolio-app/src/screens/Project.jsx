import React from 'react'

export default function project() {
  return (
    <div>
       <nav className="d-flex justify-content-center gap-5 p-3">
        
        <a href="/Home" className="nav-link">Home</a>
        <a href="/Project" className="nav-link">Project</a>
        <a href="/Contact" className="nav-link">Contact</a>
        <a href="/About" className="nav-link">About</a>
      </nav>
      <div>
        <h2 className="text-center mt-5">My project</h2>
        <div className="d-flex justify-content-center gap-5 mt-3">
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">E-commerce</h5>
              <p className="card-text">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThI6_T9T0ZLCcwG4FVr4DSWT4OlzVUvTqwbw&s" style={{height: '200px', width:'250px'}} className='rounded-3' />
              </p>
              <p>
                Link : <a href="https://github.com/jayesh00-eng/Javascript/tree/main/e-commerce" target="_blank" rel="noopener noreferrer">E-Commerce</a>
              </p>
            </div>
          </div>
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">Quizz App</h5>
              <p className="card-text">
               <img src="https://img.magnific.com/free-vector/modern-stylish-problem-solving-faq-symbol-background-design_1017-58258.jpg?semt=ais_hybrid&w=740&q=80" style={{height: '200px', width:'250px'}}  alt="" />
              </p>
              <p>
                Link : <a href="https://github.com/jayesh00-eng/Javascript/tree/main/quizz-app" target="_blank" rel="noopener noreferrer">Quizz App</a>
              </p>
            </div>  
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body"> 
            <h5 className="card-title">Book Api Store</h5>
            <p className="card-text">
          <img src="https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3N8ZW58MHx8MHx8fDA%3D" style={{height: '200px', width:'250px'}}  alt="" />
            </p>  
            <p>
                Link : <a href="https://github.com/jayesh00-eng/Javascript/tree/main/project-4" target="_blank" rel="noopener noreferrer">Book Api Store</a>
            </p>
          </div>
        </div>             
      </div>
    </div>
    <div>
      
    </div>
    </div>
  )
}

