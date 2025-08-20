import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Suspense, lazy } from 'react'
import { queryClient } from './utils/queryClient'
import { CartProvider } from './contexts/CartContextProvider'
import { Layout } from './components/Layout'
import 'react-toastify/dist/ReactToastify.css'
import { Loader } from './components/Loader'

const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })))
const Cart = lazy(() => import('./pages/Cart').then(module => ({ default: module.Cart })))
const Checkout = lazy(() => import('./pages/Checkout').then(module => ({ default: module.Checkout })))

function App() {
  return (
    <QueryClientProvider client={ queryClient }>
      <CartProvider>
        <Router>
          <div style={{ position: 'relative', minHeight: '100vh' }}>
            <ToastContainer 
              position="top-right" 
              autoClose={3000} 
              hideProgressBar={false} 
              newestOnTop={false} 
              closeOnClick 
              rtl={false} 
              pauseOnFocusLoss 
              draggable 
              pauseOnHover 
              theme="light"
              style={{ zIndex: 9999 }}
            />
            
            <Routes>
              <Route path="/" element={
                <Layout>
                  <Suspense fallback={<Loader />}>
                    <Home />
                  </Suspense>
                </Layout>
              } />
              <Route path="/cart" element={
                <Layout>
                  <Suspense fallback={<Loader />}>
                    <Cart />
                  </Suspense>
                </Layout>
              } />
              <Route path="/checkout" element={
                <Layout>
                  <Suspense fallback={<Loader />}>
                    <Checkout />
                  </Suspense>
                </Layout>
              } />
            </Routes>
          </div>
          <ReactQueryDevtools initialIsOpen={false} />
        </Router>
      </CartProvider>
    </QueryClientProvider>
  )
}

export default App
