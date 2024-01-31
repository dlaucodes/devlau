'use client'
import React, {useState, useEffect} from 'react'
import ThemeToggler from './ThemeToggler'
import Logo from './Logo'



const Header = () => {
  return (
    <header>
        <div className="container mx-auto">
            <div className='flex justify-between items-center'>
            <Logo />
            </div>
            <Nav />
       <ThemeToggler /> 
        </div>
    </header>
  )
}

export default Header