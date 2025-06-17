'use client'

import { useState, useEffect, useRef } from 'react'
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { MAP_TYPE } from './maps/constants'
import { DEFAULT_CENTER, getMapOptions } from './maps/config'
import { MapTypeToggle } from './maps/MapControls'
import { GoogleMapComponentProps } from './maps/types'
import Script from 'next/script'

// Consistent container style
const containerStyle = {
  width: '100%',
  height: '100%',
};

/**
 * Google Map Component
 * Responsive map component with custom controls and styling
 */
const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({
  center = DEFAULT_CENTER,
  zoom = 14,
  markerPosition = DEFAULT_CENTER,
  markerTitle = 'Sabidz',
  markerDescription = 'Home of Sabidz',
  mapTypeId = MAP_TYPE.ROADMAP
}) => {
  // Component state
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false)
  const [isMapLoaded, setIsMapLoaded] = useState(false)
  const [isMapVisible, setIsMapVisible] = useState(false)
  const [currentMapType, setCurrentMapType] = useState(mapTypeId || MAP_TYPE.ROADMAP)
  
  // Refs
  const mapRef = useRef<HTMLDivElement>(null)
  const googleMapRef = useRef<google.maps.Map | null>(null)
  
  // Intersection observer to load map only when visible
  const isIntersecting = useIntersectionObserver(mapRef, { threshold: 0.1 })

  // Load map when visible in viewport
  useEffect(() => {
    if (isIntersecting) {
      setIsMapVisible(true)
    }
  }, [isIntersecting])
  
  // Map options from centralized config
  const mapOptions = getMapOptions(currentMapType);

  // Event handlers
  const handleMarkerClick = () => setIsInfoWindowOpen(true)
  const handleInfoWindowClose = () => setIsInfoWindowOpen(false)
  
  // Toggle map type (roadmap/satellite)
  const toggleMapType = (newMapType: string) => {
    setCurrentMapType(newMapType);
    if (googleMapRef.current) {
      googleMapRef.current.setMapTypeId(newMapType);
    }
  };

  // Loading skeleton while map is not visible
  if (!isMapVisible) {
    return (
      <div 
        ref={mapRef}
        className="relative aspect-video bg-gray-100 rounded-xl animate-pulse flex items-center justify-center"
      >
        <div className="text-gray-400 text-sm">Map loading...</div>
      </div>
    )
  }
  
  return (
    <div ref={mapRef} className="relative aspect-video rounded-xl overflow-hidden gm-improved-ui">
      {/* Gunakan Script component untuk memuat Google Maps API melalui proxy */}
      <Script
        id="google-maps-api"
        src="/api/maps"
        onLoad={() => {
          setIsMapLoaded(true);
          console.log('Google Maps API loaded via proxy');
        }}
        onError={(e) => {
          console.error('Error loading Google Maps API:', e);
        }}
      />
      
      {/* Gunakan GoogleMap hanya jika google telah dimuat */}
      {typeof window !== 'undefined' && window.google && window.google.maps && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
          options={mapOptions}
          mapTypeId={currentMapType}
          onLoad={(map) => {
            googleMapRef.current = map;
          }}
        >
          {/* Marker */}
          <Marker
            position={markerPosition}
            title={markerTitle}
            onClick={handleMarkerClick}
            animation={window.google?.maps?.Animation?.DROP}
          >
            {/* Info Window */}
            {isInfoWindowOpen && (
              <InfoWindow onCloseClick={handleInfoWindowClose}>
                <div className="p-2">
                  <h3 className="font-semibold text-gray-800">{markerTitle}</h3>
                  <p className="text-sm text-gray-600">{markerDescription}</p>
                </div>
              </InfoWindow>
            )}
          </Marker>
        </GoogleMap>
      )}
      
      {/* Loading spinner */}
      {!isMapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
        </div>
      )}
      
      {/* Custom Map Type Toggle */}
      {isMapLoaded && (
        <MapTypeToggle 
          currentMapType={currentMapType} 
          onToggleMapType={toggleMapType} 
        />
      )}
    </div>
  )
}

export default GoogleMapComponent