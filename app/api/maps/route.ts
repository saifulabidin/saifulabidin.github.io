import { NextResponse } from 'next/server';

/**
 * Google Maps API Proxy
 * Menyembunyikan API key dari client-side
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  // Ambil parameter yang mungkin diperlukan dari client
  const libraries = searchParams.get('libraries') || 'places,geometry';
  const version = searchParams.get('v') || 'weekly';
  const language = searchParams.get('language') || 'id';
  const region = searchParams.get('region') || 'ID';
  
  // Gunakan API key dari environment server
  const apiKey = process.env.GOOGLE_MAPS_API_KEY || '';
  
  if (!apiKey) {
    return NextResponse.json(
      { error: 'Google Maps API key is missing in server configuration' },
      { status: 500 }
    );
  }
  
  try {
    // Fetch Google Maps script dengan API key
    const url = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=${libraries}&v=${version}&language=${language}&region=${region}`;
    
    console.log(`Proxying Google Maps API request to: ${url.replace(apiKey, 'API_KEY_HIDDEN')}`);
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Google Maps API responded with status: ${response.status}`);
    }
    
    const data = await response.text();
    
    // Return script sebagai JavaScript
    return new NextResponse(data, {
      headers: {
        'Content-Type': 'application/javascript',
        'Cache-Control': 'public, max-age=3600', // Cache 1 jam
      },
    });
  } catch (error) {
    console.error('Error proxying Google Maps API:', error);
    return NextResponse.json(
      { error: 'Failed to load Google Maps API' },
      { status: 500 }
    );
  }
}
