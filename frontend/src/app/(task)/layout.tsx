'use client';

// import type { Metadata } from 'next';
import Link from 'next/link';
import { useState } from 'react';

// export const metadata: Metadata = {
//   title: 'Task Page',
//   description: 'Task Pape examples',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [navbarState, setNavbarState] = useState(false);
  const isActive = navbarState ? 'is-active' : '';
  return (
    <>
      <nav className="navbar is-black">
        <div className="navbar-brand">
          <a
            role="button"
            className={`navbar-burger ${isActive}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navMenu"
            onClick={() => setNavbarState(!navbarState)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={`navbar-menu ${isActive}`} id="navMenu">
          <div className="navbar-start">
            <Link href="/add-task" className="navbar-item">
              Add Task
            </Link>

            <Link href="/tasks-list" className="navbar-item">
              Tasks List
            </Link>
          </div>
        </div>
      </nav>
      <div>{children}</div>
    </>
  );
}
