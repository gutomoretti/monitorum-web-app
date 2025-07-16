'use client';

import { useState } from 'react';
import Link from 'next/link';

interface SidebarProps {
  activeItem?: string;
}

const menuItems = [
  { name: 'Dashboard', href: '/', icon: '📊' },
  { name: 'Mosaico', href: '/mosaico', icon: '🔲' },
  { name: 'Empresas', href: '/empresas', icon: '🏢' },
  { name: 'Usuários', href: '/usuarios', icon: '👥' },
  { name: 'Grupos', href: '/grupos', icon: '👨‍👩‍👧‍👦' },
  { name: 'Equipamentos', href: '/equipamentos', icon: '⚙️' },
  { name: 'Sensores', href: '/sensores', icon: '📡' },
  { name: 'Logs', href: '/logs', icon: '📋' },
  { name: 'Minha Conta', href: '/conta', icon: '👤' },
];

export default function Sidebar({ activeItem = 'Dashboard' }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`bg-white border-r border-gray-200 transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    } h-screen flex flex-col shadow-lg`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <h1 className="text-xl font-bold text-black">Monitorum</h1>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 text-black transition-colors"
          >
            {isCollapsed ? '→' : '←'}
          </button>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex items-center p-3 rounded-lg transition-colors ${
                  activeItem === item.name
                    ? 'bg-black text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                {!isCollapsed && (
                  <span className="ml-3 font-medium">{item.name}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        {!isCollapsed && (
          <div className="text-xs text-gray-500 text-center">
            © 2024 Monitorum
          </div>
        )}
      </div>
    </div>
  );
}