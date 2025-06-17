/**
 * Google Maps Config
 * Centralized configuration for Google Maps
 */
import { MAP_TYPE, CONTROL_STYLE, CONTROL_POSITION, MAP_STYLES } from './constants';

/**
 * Get default map options
 * @param mapTypeId - The map type to display
 * @returns Google Maps options object
 */
export const getMapOptions = (mapTypeId = MAP_TYPE.ROADMAP) => {
  return {
    disableDefaultUI: false,
    zoomControl: true,
    zoomControlOptions: {
      position: CONTROL_POSITION.RIGHT_BOTTOM
    },
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: CONTROL_STYLE.DEFAULT,
      position: CONTROL_POSITION.LEFT_BOTTOM,
      mapTypeIds: [
        MAP_TYPE.ROADMAP,
        MAP_TYPE.SATELLITE
      ]
    },
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: true,
    fullscreenControlOptions: {
      position: CONTROL_POSITION.TOP_RIGHT
    },
    controlSize: 28,
    clickableIcons: false,
    styles: MAP_STYLES,
    mapTypeId,
  };
};

/**
 * Default center location for maps
 */
export const DEFAULT_CENTER = {
  lat: -7.9288452,
  lng: 110.8288609
};
