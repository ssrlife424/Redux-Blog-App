import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counter';
import blogReducer from './slices/blogSlice'

const store = configureStore({
reducer: {
    counter : counterReducer,
    blog: blogReducer, 
}
})

export default store ;
