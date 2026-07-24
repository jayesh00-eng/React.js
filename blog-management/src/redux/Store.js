import { configureStore } from '@reduxjs/toolkit'
import blogReducer from './Blogslice'

export const store = configureStore({
  reducer: {
    blog: blogReducer,
  },
})

