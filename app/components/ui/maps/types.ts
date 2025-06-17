/**
 * Map Interface Definitions
 * Provides TypeScript interfaces for map components
 */

/**
 * Google Map Component Props
 */
export interface GoogleMapComponentProps {
  /**
   * Center coordinates for the map
   */
  center: {
    lat: number
    lng: number
  }
  
  /**
   * Zoom level (1-20)
   * @default 14
   */
  zoom?: number
  
  /**
   * Position for the marker
   */
  markerPosition?: {
    lat: number
    lng: number
  }
  
  /**
   * Title for the marker (shown on hover)
   */
  markerTitle?: string
  
  /**
   * Description shown in the InfoWindow when marker is clicked
   */
  markerDescription?: string
  
  
  /**
   * Map type to display initially (roadmap, satellite, hybrid)
   * @default 'roadmap'
   */
  mapTypeId?: string
}

/**
 * Map Marker Props
 */
export interface MapMarkerProps {
  position: {
    lat: number
    lng: number
  }
  title: string
  description?: string
  onClick?: () => void
  isInfoWindowOpen?: boolean
  onInfoWindowClose?: () => void
}
