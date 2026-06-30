import { useState } from 'react'
import Navbar from './components/Navbar';
import Login from './pages/Login/Login';
function App() {
  return (
    <>
      <Navbar title="Employee Management System" company="ABC Technologies" year="2026"/>
      <Login></Login>
    </>
  );
}
export default App
