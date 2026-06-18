import React from 'react'

export default function Skills() {
  const skillCards = [
    {
      title: 'HTML',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s',
    },
    {
      title: 'CSS',
      img: 'https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo-2011.png',
    },
    {
      title: 'JavaScript',
      img: 'https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png',
    },
    {
      title: 'React JS',
      img: 'https://miro.medium.com/1*NJSv6DGoKTloI8d8im98zg.png',
    },
  ]

  return (
    <div className="container my-3 d-flex flex-column align-items-center">
      <nav className="d-flex justify-content-center gap-5 p-3">
        <a href="/Home" className="nav-link">Home</a>
        <a href="/Project" className="nav-link">Project</a>
        <a href="/Contact" className="nav-link">Contact</a>
        <a href="/About" className="nav-link">About</a>
      </nav>

      <div className="container my-3 d-flex flex-column align-items-center justify-content-center">
        <h2 className="text-center mt-5">Skills</h2>

        {/* 3-column layout (responsive) */}
        <div className="row justify-content-center mt-3" style={{ rowGap: '1.5rem' }}>
          {skillCards.map((skill) => (
            <div key={skill.title} className="col-12 col-md-4 d-flex justify-content-center">
              <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                  <h5 className="card-title text-center" style={{ marginBottom: '20px' }}>{skill.title}</h5>
                  <p className="card-text">
                    <img
                      src={skill.img}
                      style={{ height: '180px', width: '250px' }}
                      className="rounded-3"
                    />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

