import DataboxEmbed from '@/components/DataboxEmbed';
import TerritoryDropdown from '@/components/TerritoryDropdown';
import { NATIONAL_DASHBOARD, TERRITORY_DASHBOARDS } from '@/data/dashboards';

export const metadata = {
  title: 'Ad Results | The Ads Kitchen',
};

export default function AdResultsPage() {
  return (
    <section className="page-section">
      <h2 className="page-title">2. Ad Results (DIY and National)</h2>

      <div className="embeds-section">
        <h3 className="embed-title">National</h3>
        <DataboxEmbed
          src={NATIONAL_DASHBOARD.embedUrl}
          title="Vector META Ads Performance Dashboard - National"
        />
      </div>

      <div className="embeds-section">
        <h3 className="embed-title">Territory Dashboards</h3>
        {TERRITORY_DASHBOARDS.length === 0 ? (
          <p className="territory-empty-note">
            Territory-specific dashboards will show up here as they&apos;re added.
          </p>
        ) : (
          <div className="territory-dropdown-list">
            {TERRITORY_DASHBOARDS.map((group) => (
              <TerritoryDropdown key={group.territory} group={group} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
