
import { Route, Routes } from 'react-router-dom'
import StaticLayout from './layouts/StaticLayout'
import Home from './pages/Home'
import Login from './components/Login'
import AboutUs from './pages/AboutUs'

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<StaticLayout />}>
        <Route path="/login" element={<Login />} />
          <Route path="" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />

        </Route>
      </Routes>

    </>
  )
}

export default App
