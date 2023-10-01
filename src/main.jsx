import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import JobDetails from './components/jobdetails/JobDetails';
import './index.css';
import AppliedJobs from './pages/applied-job/AppliedJobs';
import Blog from './pages/blog/Blog';
import Home from './pages/home/Home';
import Root from './pages/root/Root.jsx';
import Statistics from './pages/statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:'/',
        element: <Home/>,
        loader: ()=>fetch('../data/categories.json')
      },
      {
        path: '/statistics',
        element: <Statistics/>
      },
      {
        path: '/applied-jobs',
        element: <AppliedJobs/>,
        loader: ()=>fetch('../data/jobs.json')
      },
      {
        path: '/blog',
        element:<Blog/>
      },
      {
        path: '/job/:id',
        element: <JobDetails/>,
        loader: ()=>fetch('../data/jobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
