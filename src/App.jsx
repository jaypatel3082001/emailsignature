import React from 'react'
import Home from './Home'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import Mysignature from './components/Backendcomp/Mysignature'

function App() {
  return (
    <Router>
    {/* <Home /> */}
    
    <Routes>
    {/* <Route path="/create" element={<Create />} /> */}
    <Route path="/" element={<Home />} />
    <Route path="/mysignature" element={<Mysignature />} />
    <Route path="/mysignature/:id" element={<Mysignature />} />
    {/* <Route path="/:id" element={<Home />} /> */}
    {/* <Route path="/update/:id" element={<Update />} /> */}
    {/* <Route path="/read/:id" element={<Read />} /> */}

  </Routes>
    </Router>
  )
}

export default App