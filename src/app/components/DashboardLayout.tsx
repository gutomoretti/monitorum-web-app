'use client';

import Sidebar from './Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeMenuItem?: string;
}

export default function DashboardLayout({ children, activeMenuItem }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-white">
      <Sidebar activeItem={activeMenuItem} />
      <main className="flex-1 overflow-auto">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}