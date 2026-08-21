'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { href: '/', label: 'Getting Started' },
  { href: '/ad-results', label: 'Ad Results (DIY and National)' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="dashboard-header">
      <div className="header-content">
        <div className="header-left">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3h6v6H3z" fill="white" opacity="0.8" />
              <path d="M9 3h6v6H9z" fill="white" />
              <path d="M15 3h6v6h-6z" fill="white" opacity="0.6" />
            </svg>
            <span style={{ fontSize: '0.75rem', fontWeight: '600', opacity: 0.9 }}>VECTOR MARKETING</span>
          </div>
          <h1 className="header-title">The Ads Kitchen</h1>
          <p className="header-subtitle">DIY Manager Dashboard - Fall 2026</p>
        </div>

        <div className="header-right">
          <div className="header-badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12L9 18L21 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>DIY Enabled</span>
          </div>

          <button
            type="button"
            className="hamburger-btn"
            aria-label="Open page menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>

          {isOpen && (
            <>
              <div className="nav-overlay" onClick={() => setIsOpen(false)} />
              <nav className="nav-menu">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`nav-link${pathname === item.href ? ' active' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
