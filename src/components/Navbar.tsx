import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Code } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Code className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">TechSolutions</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/services"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
              >
                Services
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
              >
                Pricing
              </Link>
              {user ? (
                <Link
                  to="/dashboard"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
                >
                  Dashboard
                </Link>
              ) : null}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {user ? (
              <button
                onClick={logout}
                className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Logout
              </button>
            ) : (
              <div className="flex space-x-4">
                <Link
                  to="/login"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/services"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700"
            >
              Services
            </Link>
            <Link
              to="/pricing"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700"
            >
              Pricing
            </Link>
            {user ? (
              <Link
                to="/dashboard"
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700"
              >
                Dashboard
              </Link>
            ) : null}
            {user ? (
              <button
                onClick={logout}
                className="block w-full text-left pl-3 pr-4 py-2 text-base font-medium text-gray-700"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}