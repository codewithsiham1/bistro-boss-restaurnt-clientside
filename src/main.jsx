import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Router';
import { HelmetProvider } from 'react-helmet-async';
import Authprovider from './Providers/Authprovider';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Authprovider>
  <QueryClientProvider client={queryClient}>
  <div className='max-w-screen-xl mx-auto'>
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>
  </div>
    </QueryClientProvider>
  </Authprovider>
  </StrictMode>,
)
