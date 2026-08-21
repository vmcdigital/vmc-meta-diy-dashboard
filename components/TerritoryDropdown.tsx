'use client';

import { useState } from 'react';
import DataboxEmbed from './DataboxEmbed';
import type { TerritoryGroup } from '@/data/dashboards';

export default function TerritoryDropdown({ group }: { group: TerritoryGroup }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="territory-dropdown">
      <button
        type="button"
        className="territory-dropdown-header"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{group.territory}</span>
        <span className={`territory-dropdown-icon${isOpen ? ' open' : ''}`}>&#9660;</span>
      </button>
      {isOpen && (
        <div className="territory-dropdown-content">
          {group.dashboards.map((dashboard) => (
            <DataboxEmbed key={dashboard.embedUrl} src={dashboard.embedUrl} title={dashboard.name} />
          ))}
        </div>
      )}
    </div>
  );
}
