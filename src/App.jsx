import { Routes, Route, BrowserRouter, useParams } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import FourZeroFour from './pages/404'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
