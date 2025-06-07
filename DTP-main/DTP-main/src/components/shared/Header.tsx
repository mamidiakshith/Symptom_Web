import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from '../../hooks/useNavigate';
import Button from './Button';

const Header: React.FC = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button 
              onClick={() => navigate('/')}
              className="flex-shrink-0 flex items-center hover:opacity-80 transition-opacity"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </svg>
              <span className="ml-2 text-xl font-semibold text-gray-900">HealthCare</span>
            </button>
          </div>
          
          <div className="flex items-center">
            {isAuthenticated && user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <img 
                    src={user.photoURL} 
                    alt={user.name}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium text-gray-700">{user.name}</span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={logout}
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => navigate('/login')}
              >
                Sign In
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;