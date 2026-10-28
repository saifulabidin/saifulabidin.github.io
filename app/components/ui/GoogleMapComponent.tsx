'use client';

import React from 'react';

export interface GoogleMapComponentProps {
  center?: { lat: number; lng: number };
  zoom?: number;
  markerPosition?: { lat: number; lng: number };
  markerTitle?: string;
  markerDescription?: string;
  mapTypeId?: string;
}

const MAP_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2348.40350872129!2d110.82872819364991!3d-7.928369878195628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a33a2aa29f83d%3A0x792c4cb5f34bda52!2sSS%20Sabidz%20Shop!5e0!3m2!1sen!2sid!4v1793219689654!5m2!1sen!2sid';

/**
 * Google Map Embed Component
 * Embedded interactive map without exposing API keys to client network requests.
 */
const GoogleMapComponent: React.FC<GoogleMapComponentProps> = () => {
  return (
    <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-neutral-100">
      <iframe
        src={MAP_EMBED_SRC}
        title="Google Map Location - SS Sabidz Shop"
        className="w-full h-full min-h-[250px] border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
};

export default GoogleMapComponent;
