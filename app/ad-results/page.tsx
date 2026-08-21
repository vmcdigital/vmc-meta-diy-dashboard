import DataboxEmbed from '@/components/DataboxEmbed';

export const metadata = {
  title: 'Ad Results | The Ads Kitchen',
};

export default function AdResultsPage() {
  return (
    <section className="page-section">
      <h2 className="page-title">2. Ad Results (DIY and National)</h2>
      <DataboxEmbed />
    </section>
  );
}
