import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { updateBlog } from '../redux/Blogslice'

export default function Editblog() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { blogs } = useSelector((state) => state.blog)

  const existingBlog = blogs.find((blog) => blog.id === Number(id))

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  useEffect(() => {
    if (existingBlog) {
      setTitle(existingBlog.title)
      setContent(existingBlog.content)
    }
  }, [existingBlog])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim() || !content.trim()) {
      alert('Please fill in both title and content')
      return
    }
    const updatedBlog = {
      id: Number(id),
      title: title.trim(),
      content: content.trim(),
      date: existingBlog ? existingBlog.date : new Date().toISOString(),
    }
    dispatch(updateBlog(updatedBlog))
    navigate('/')
  }

  if (!existingBlog) {
    return (
      <div className="form-container">
        <h1>Blog Not Found</h1>
        <p>The blog you are trying to edit does not exist.</p>
        <button className="btn btn-primary" onClick={() => navigate('/')}>
          Go Back Home
        </button>
      </div>
    )
  }

  return (
    <div className="form-container">
      <h1>Edit Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter blog title"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter blog content"
            rows="8"
            required
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            Update Blog
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate('/')}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

