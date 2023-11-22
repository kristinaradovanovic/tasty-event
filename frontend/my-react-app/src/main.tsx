import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.tsx'
import './index.css'
import Home from './pages/Home.tsx';
import EventCategory from './pages/EventCategory.tsx';
import EventDetailed from './pages/EventDetailed.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route index element={<Home/>}/>
        <Route path="/events/:id" element={<EventDetailed />} />
        <Route path="/category/:category" element={<EventCategory />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>  
      <RouterProvider router={router} />
  </React.StrictMode>,
)
