import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Packages from './pages/Packages'
import Contact from './pages/Contact'
import BookingForm from './pages/BookingForm'
import ErrorBoundary from './components/ErrorBoundary'

export default function App(){
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Header />
      <main className="container my-4 flex-grow-1">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<BookingForm />} />
          </Routes>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  )
}
