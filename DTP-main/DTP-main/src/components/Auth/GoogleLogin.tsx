import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from '../../hooks/useNavigate';
import Button from '../shared/Button';

const GoogleLogin: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleDemoLogin = () => {
    const demoUser = {
      id: '1',
      name: 'Demo User',
      email: 'demo@example.com',
      photoURL: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    };
    
    login(demoUser);
    navigate('/symptom-checker');
  };

  return (
    <div className="flex flex-col items-center">
      <Button 
        onClick={handleDemoLogin}
        className="bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 transition-all duration-300"
      >
        Continue as Demo User
      </Button>
      <p className="mt-4 text-sm text-gray-600">
        This is a demo version. No real authentication is required.
      </p>
    </div>
  );
};

export default GoogleLogin;