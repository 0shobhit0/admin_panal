import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaBell, FaSearch, FaUser, FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '../../utils/themeContext'

function Header({ toggleSidebar }) {
  const [showDropdown, setShowDropdown] = useState(false)
  const { theme, toggleTheme } = useTheme()
  
  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-10">
      <div className="px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            aria-label="Toggle sidebar"
          >
            <FaBars className="h-5 w-5" />
          </button>
          
          {/* Search box */}
          <div className="hidden md:flex ml-4 items-center px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md">
            <FaSearch className="text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 bg-transparent border-none outline-none w-40 lg:w-64 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
          </button>

          {/* Notifications */}
          <button className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none relative">
            <FaBell className="h-5 w-5" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          
          {/* User dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            >
              <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white">
                <FaUser className="h-4 w-4" />
              </div>
              <span className="ml-2 hidden md:block font-medium">Admin User</span>
            </button>
            
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 py-2 bg-white dark:bg-gray-800 rounded-md shadow-dropdown z-20">
                <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Your Profile
                </Link>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Settings
                </a>
                <div className="border-t border-gray-100 dark:border-gray-700 my-1"></div>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Sign out
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header