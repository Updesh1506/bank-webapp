import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Import the components
import IndexPage from './routes';

import SignInPage from './routes/sign-in';
import SignUpPage from './routes/sign-up';
import  Home  from './routes/home';

// Import the Layouts

import SidebarLayout from './layouts/sidebar-layout';


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key");
}

// Define the router
const router = createBrowserRouter([
{
  element:<SidebarLayout/>,
  children: [
    {path: '/home/*' , element:<Home/>}
  ]
},
  { path: '/', element: <IndexPage /> },
  { path: '/sign-in/*', element: <SignInPage /> },
  { path: '/sign-up/*', element: <SignUpPage /> },
 
]);

// Render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>
);


