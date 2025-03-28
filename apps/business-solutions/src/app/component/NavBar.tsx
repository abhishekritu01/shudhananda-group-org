import React from 'react'

const NavBar = () => {
  return (
    <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
    <h1 className="text-xl font-bold">Sudhanand Business Solutions</h1>
    <nav>
      <ul className="flex space-x-4">
        <li><a href="#about" className="hover:underline">About</a></li>
        <li><a href="#services" className="hover:underline">Services</a></li>
        <li><a href="#industries" className="hover:underline">Industries</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  </header>
  )
}

export default NavBar