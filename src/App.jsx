import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import TentangKami from './pages/TentangKami'

import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'


function App() {


  return (
    <div>
      <NavbarComponent/>

      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='TentangKami' Component={TentangKami}/>
      </Routes>

      <FooterComponent/>
    </div>
  )
}

export default App
