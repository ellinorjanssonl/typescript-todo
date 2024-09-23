import React from 'react';
import NavLinks from '../components/NavLinks';

const Home: React.FC = () => {
  const links = [
    { href: '/todo', label: 'Todo List' },
  ];

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl font-light mb-4">What TO-DO today?</h1>
      <img
        src="/todopic.webp"
        alt="Welcome Image"
        className="w-1/2 mb-6"
      />
      <NavLinks links={links} />
    </div>
  );
};

export default Home;
