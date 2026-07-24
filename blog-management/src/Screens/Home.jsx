import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { deleteBlog } from '../redux/Blogslice'

export default function Home() {
  const { blogs, loading, error } = useSelector((state) => state.blog)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleDelete = (id) => {
    if (window.confirm) {
      dispatch(deleteBlog(id))
    }
  }

  const formatDate = (dateString) => {
    if (!dateString) return ''
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Blog Management</h1>
        <button className="btn btn-primary" onClick={() => navigate('/add')}>
          Add New Blog
        </button>
      </header>

      {loading && <div className="loading">Loading blogs...</div>}

      {error && <div className="error">Error: {error}</div>}

     

      {!loading && !error && blogs.length > 0 && (
        <div className="blog-grid">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <div className="blog-card-header">
                <h2 className="blog-title">{blog.title}</h2>
                <span className="blog-date">{formatDate(blog.date)}</span>
              </div>
              <p className="blog-content">
                {blog.content && blog.content.length > 150
                  ? blog.content.substring(0, 150) + '...'
                  : blog.content}
              </p>
              <div className="blog-card-actions">
                <button
                  className="btn btn-edit"
                  onClick={() => navigate(`/edit/${blog.id}`)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-delete"
                  onClick={() => handleDelete(blog.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

