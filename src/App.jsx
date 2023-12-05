import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import TentangKami from './pages/TentangKami'
import Informasi from './pages/Informasi'
import Konsultasi from './pages/Konsultasi'

import Login from './pages/Login'
// import RegisterPage from './pages/RegisterPage'
// import UserProfile from './pages/UserProfile'


import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'


function App() {
  // Membuat array untuk menyimpan path halaman yang tidak memerlukan Navbar dan Footer
  const excludePaths = ['/Login', '/Register'];

  return (
    <div>
      {/* Menampilkan Navbar hanya jika path tidak termasuk dalam excludePaths */}
      {!excludePaths.includes(window.location.pathname) && <NavbarComponent />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="tentangkami" element={<TentangKami />} />
        <Route path="Informasi" element={<Informasi />} />
        <Route path='Konsultasi' element={<Konsultasi/>}/>

        <Route path="Login" element={<Login />} />
      </Routes>

      {/* Menampilkan Footer hanya jika path tidak termasuk dalam excludePaths */}
      {!excludePaths.includes(window.location.pathname) && <FooterComponent />}
    </div>
  )
}

export default App
