import React from 'react'

export default function About() {
  return (
    
    <div>
       <nav className="d-flex justify-content-center gap-5 p-3">
        
        <a href="/Home" className="nav-link">Home</a>
        <a href="/Project" className="nav-link">Project</a>
        <a href="/Contact" className="nav-link">Contact</a>
        <a href="/About" className="nav-link">About</a>
      </nav>
     <section className="container-fluid py-5 ">
      <div className="container d-flex justify-content-center ">
        <div
          className="card mb-3 p-4 shadow-lg border-0"
          style={{ maxWidth: 980 }}
        >
          <div className="row g-0 align-items-center justify-content-center d-flex">

            <div className="col-md-8 ">
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h2 className="card-title fw-bold mb-3">About Me</h2>

                <p className="card-text">
                  <span className="fs-3 fw-bold">
                    Hi, I'm Patil Jayesh!
                  </span>
                  <br />I am a passionate <strong>Full Stack Developer</strong>{" "}
                  and an enthusiastic <strong>MongoDB Learner</strong> who
                  enjoys building modern, responsive, and user-friendly web
                  applications. I love transforming ideas into real-world
                  digital solutions using technologies like React.js, Node.js,
                  Express.js, and MongoDB.
                </p>

                <p className="card-text">
                  🚀 My focus is on creating clean, scalable, and efficient
                  applications while continuously improving my development
                  skills. I enjoy learning new technologies, solving challenging
                  problems, and writing maintainable code that delivers great
                  user experiences.
                </p>

                <p className="card-text">
                  💡 I believe in continuous learning, teamwork, and innovation.
                  Whether it's developing a full-stack project, optimizing
                  performance, or exploring new backend concepts, I'm always
                  eager to grow as a developer and contribute to impactful
                  projects.
                </p>

                <p className="card-text">
                  🎯 Currently, I'm expanding my expertise in MongoDB, backend
                  architecture, and modern web technologies while building
                  projects that strengthen my problem-solving and development
                  skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

