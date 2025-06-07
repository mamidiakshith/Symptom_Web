import React, { useState, useEffect } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { SymptomProvider } from './contexts/SymptomContext';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import SymptomChecker from './pages/SymptomChecker';
import Results from './pages/Results';
import { FullPageLoader } from './components/shared/Loaders';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleLocationChange = () => {
      setIsLoading(true);
      setCurrentPath(window.location.pathname);
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '/login':
        return <Login />;
      case '/symptom-checker':
        return <SymptomChecker />;
      case '/results':
        return <Results />;
      default:
        return <Home />;
    }
  };

  return (
    <AuthProvider>
      <SymptomProvider>
        <MainLayout>
          {isLoading ? <FullPageLoader /> : renderPage()}
        </MainLayout>
      </SymptomProvider>
    </AuthProvider>
  );
}

export default App;