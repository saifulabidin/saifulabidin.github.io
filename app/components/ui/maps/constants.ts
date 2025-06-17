/**
 * Google Maps Constants
 * Centralized constants used in Google Maps implementation
 */

// Map type constants
export const MAP_TYPE = {
  ROADMAP: 'roadmap',
  SATELLITE: 'satellite',
  HYBRID: 'hybrid',
  TERRAIN: 'terrain'
};

// Control style constants
export const CONTROL_STYLE = {
  HORIZONTAL_BAR: 2,
  DROPDOWN_MENU: 1,
  DEFAULT: 0
};

// Control position constants
export const CONTROL_POSITION = {
  TOP_RIGHT: 3,
  TOP_CENTER: 2, 
  TOP_LEFT: 1,
  LEFT_CENTER: 4,
  LEFT_TOP: 5,
  LEFT_BOTTOM: 6,
  RIGHT_TOP: 7,
  RIGHT_CENTER: 8,
  RIGHT_BOTTOM: 12,
  BOTTOM_CENTER: 11,
  BOTTOM_LEFT: 10,
  BOTTOM_RIGHT: 9
};

// Map default styles (customized look and feel)
export const MAP_STYLES = [
  {
    featureType: 'all',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#7c93a3' }, { lightness: '-10' }],
  },
  {
    featureType: 'administrative.country',
    elementType: 'geometry',
    stylers: [{ visibility: 'on' }],
  },
  {
    featureType: 'administrative.province',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#a5b1bf' }, { visibility: 'on' }, { weight: '1.00' }],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#3a4c6e' }],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry.fill',
    stylers: [{ color: '#f3f3f7' }],
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'geometry.fill',
    stylers: [{ color: '#f3f3f7' }],
  },
  {
    featureType: 'poi',
    elementType: 'all',
    stylers: [{ visibility: 'simplified' }],
  },
  {
    featureType: 'poi.attraction',
    elementType: 'all',
    stylers: [{ visibility: 'on' }],
  },
  {
    featureType: 'poi.business',
    elementType: 'all',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'poi.government',
    elementType: 'all',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'all',
    stylers: [{ visibility: 'on' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [{ color: '#cfe5a4' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [{ color: '#ffffff' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#d7dde8' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [{ color: '#ffd552' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#ffc600' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [{ color: '#a3ccef' }],
  },
];