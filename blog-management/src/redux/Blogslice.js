import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  blogs: [],
  loading: false,
  error: null,
}

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.blogs.push(action.payload)
    },
    deleteBlog: (state, action) => {
      state.blogs = state.blogs.filter(blog => blog.id !== action.payload)
    },
    updateBlog: (state, action) => {
      const index = state.blogs.findIndex(blog => blog.id === action.payload.id)
      if (index !== -1) {
        state.blogs[index] = action.payload
      }
    },
    setBlogs: (state, action) => {
      state.blogs = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
  },
})

export const { addBlog, deleteBlog, updateBlog, setBlogs, setLoading, setError } = blogSlice.actions
export default blogSlice.reducer

