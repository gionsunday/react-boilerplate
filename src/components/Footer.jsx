import React from 'react';
import { useContext } from 'react';
import { userNameContext } from '../App';

function Footer() {
  const contextValue = useContext(userNameContext);
  console.log(contextValue.userName)
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
      <p>&copy; 2023 My Simple React App</p>
    </footer>
  );
}

export default Footer;