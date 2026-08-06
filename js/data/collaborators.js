export const collaboratorLogos = [
  { name: 'Universiti Kebangsaan Malaysia', shortName: 'UKM', note: 'Lead institution', logo: './assets/logos/ukm-placeholder.svg' },
  { name: 'Regional Coastal Institute', shortName: 'RCI', note: 'Research partner', logo: './assets/logos/rci-placeholder.svg' },
  { name: 'Planetary Health Alliance', shortName: 'PHA', note: 'Knowledge partner', logo: './assets/logos/pha-placeholder.svg' },
  { name: 'Community Mangrove Network', shortName: 'CMN', note: 'Community partner', logo: './assets/logos/cmn-placeholder.svg' },
  { name: 'Blue Carbon Lab', shortName: 'BCL', note: 'Technical partner', logo: './assets/logos/bcl-placeholder.svg' },
  { name: 'Policy Innovation Centre', shortName: 'PIC', note: 'Policy partner', logo: './assets/logos/pic-placeholder.svg' },
];

export function splitCollaborators(items) {
  const midpoint = Math.ceil(items.length / 2);
  return [items.slice(0, midpoint), items.slice(midpoint)];
}
