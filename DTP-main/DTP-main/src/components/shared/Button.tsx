import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  className = '',
  icon
}) => {
  // Button styles based on variant
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300',
    secondary: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-300',
    outline: 'bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-50 focus:ring-blue-300',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-300',
    success: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-300'
  };

  // Button sizes
  const sizeStyles = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${variantStyles[variant]} 
        ${sizeStyles[size]} 
        ${fullWidth ? 'w-full' : ''}
        rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2
        transition duration-200 ease-in-out
        flex items-center justify-center
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;