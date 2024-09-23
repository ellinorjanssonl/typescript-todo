import Link from 'next/link';
import React from 'react';

interface NavLinksProps {
  links: { href: string; label: string }[];
}

const NavLinks: React.FC<NavLinksProps> = ({ links }) => {
  return (
    <nav className="mb-4">
      <ul className="flex space-x-4">
        {links.map((link, index) => (
          <li className="bg-yellow-200 text-black p-2 rounded" key={index}>
            <Link href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;

