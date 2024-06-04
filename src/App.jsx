import React,{Suspense} from 'react'
// import Home from './Home'
const Home = React.lazy(() => import('./Home'));
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Mysignature from './components/Backendcomp/Mysignature'
import Login from './components/login/Login'
import Singup from './components/login/Singup'

function App() {
  return (
    <Router>

      <Routes>

        <Route path="/" element={<Suspense fallback = { <div> Please Wait... </div> } >
            <Home /></Suspense>} />
        <Route path="/users/:userid/emailuserdetails" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/mysignature" element={<Mysignature />} />
        <Route path="/mysignature/users/:userid/emailuserdetails" element={<Mysignature />} />


      </Routes>
    </Router>



  )
}

export default App