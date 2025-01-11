import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

type SignOutProps = {
  onSignOut: () => void;
};

const SignOut: React.FC<SignOutProps> = ({ onSignOut }) => {
  useEffect(() => {
    console.log('SignOut useEffect');
    onSignOut();
  }, []);
  console.log('SignOut render');
  return <Navigate to="/" replace />;
};

export default SignOut;
