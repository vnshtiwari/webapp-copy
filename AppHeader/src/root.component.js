import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import Navbar from './components/NavBar'

export default function Root(props) {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />}></Route>
      </Routes>
    </Router>
  )
}
