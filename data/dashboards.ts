export interface Dashboard {
  name: string;
  embedUrl: string;
}

export interface TerritoryGroup {
  territory: string;
  dashboards: Dashboard[];
}

export const NATIONAL_DASHBOARD: Dashboard = {
  name: 'National',
  embedUrl: 'https://app.databox.com/datawall/f690169e32a1b9aaf8dd120e3a95a95a4980acc69e90bb5',
};

// Add new territory dashboards here as they become available, grouped by territory name.
// Each territory will show up as its own dropdown on the Ad Results page.
// Example:
// {
//   territory: 'Northeast',
//   dashboards: [{ name: 'Northeast Region', embedUrl: 'https://app.databox.com/datawall/xxxxxxxx' }],
// },
export const TERRITORY_DASHBOARDS: TerritoryGroup[] = [
  {
    territory: 'Northwoods (Jason Heinritz)',
    dashboards: [
      {
        name: 'Northwoods (Jason Heinritz)',
        embedUrl: 'https://app.databox.com/datawall/4cacd18c80bf074573fe726196826683527886a8c8198?i',
      },
    ],
  },
  {
    territory: 'San Marcos (Demian Scopp)',
    dashboards: [
      {
        name: 'San Marcos (Demian Scopp)',
        embedUrl: 'https://app.databox.com/datawall/883da487f25dac0f254ce0cd6575cc3b244eb3c6a8f1ecf?i',
      },
    ],
  },
  {
    territory: 'Naperville (Tariq Sikander)',
    dashboards: [
      {
        name: 'Naperville (Tariq Sikander)',
        embedUrl: 'https://app.databox.com/datawall/a71571ff8af2738bfa328de0e491dc3adf5a846a9995fb?i',
      },
      ],
  },
  {
    territory: 'Farmington Hills (Logan Franke)',
    dashboards: [
      {
        name: 'Farmington Hills (Logan Franke)',
        embedUrl: 'https://app.databox.com/datawall/4148b2ebb0179e08fad27cd719e8c9d53efa9546a9996c2?i',
      },
      ],
  },
  {
    territory: 'Virginia Beach (Mikail Bonett)',
    dashboards: [
      {
        name: 'Virginia Beach (Mikail Bonett)',
        embedUrl: 'https://app.databox.com/datawall/57f1a812ad5d0001549d8a2f50b551b44d2fb146a9996f2?i',
      },
      ],
  },
];
