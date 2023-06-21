import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Outlet } from 'react-router-dom'
import Home from './pages/home/Home'
import AddUser from './pages/add/AddUser'
import EditUser from './pages/edit/EditUser'
import ViewUser from './pages/view/ViewUser'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/add' element={<AddUser />} />
        <Route path='/edit/:id' element={<EditUser />} />
        <Route path='/view/:id' element={<ViewUser />} />
      </Routes>
    </>
  )
}

export default App