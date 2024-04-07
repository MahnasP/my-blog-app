import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store/store.js'
import { Provider } from 'react-redux'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home.jsx'

import AddPost from "./pages/AddPost";
import Signup from './pages/Signup'
import EditPost from "./pages/EditPost";
import Post from "./pages/Post";
import AllPosts from "./pages/AllPosts";
import Login from './pages/Login.jsx'
import { AuthLaout } from './components/index.js'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<AuthLaout authentication={false}><Login /></AuthLaout>} />
      <Route path='/signup' element={<AuthLaout authentication={false}><Signup /></AuthLaout>} />
      <Route path='/all-posts' element={<AuthLaout authentication>{" "}<AllPosts /></AuthLaout>} />
      <Route path='/add-post' element={<AuthLaout authentication>{" "}<AddPost /></AuthLaout>} />
      <Route path='/edit-post/:slug' element={<AuthLaout authentication>{" "}<EditPost /></AuthLaout>} />
      <Route path='/post/:slug' element={<Post />} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
      </Provider>
  </React.StrictMode>,
)
