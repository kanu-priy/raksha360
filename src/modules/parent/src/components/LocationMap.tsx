import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation } from 'lucide-react';

interface LocationMapProps {
  childName?: string;
}

const LocationMap: React.FC<LocationMapProps> = ({ childName = "Priya" }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [mapInitialized, setMapInitialized] = useState(false);

  // Mock child location (Delhi, India)
  const childLocation = {
    lng: 77.2090,
    lat: 28.6139,
    name: "Delhi Public School, Sector 45"
  };

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken.trim()) return;

    try {
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [childLocation.lng, childLocation.lat],
        zoom: 15,
      });

      // Add child location marker
      const marker = new mapboxgl.Marker({
        color: '#22c55e',
        scale: 1.2
      })
        .setLngLat([childLocation.lng, childLocation.lat])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
              <div class="p-2">
                <h3 class="font-semibold text-green-600">${childName}'s Location</h3>
                <p class="text-sm text-gray-600">${childLocation.name}</p>
                <p class="text-xs text-gray-500 mt-1">Last updated: 2 minutes ago</p>
              </div>
            `)
        )
        .addTo(map.current);

      // Add safe zone circles
      const safeZones = [
        { lng: 77.2100, lat: 28.6150, radius: 500, name: "Community Center" },
        { lng: 77.2080, lat: 28.6120, radius: 800, name: "Central Hospital" },
      ];

      safeZones.forEach((zone, index) => {
        // Add safe zone circle
        map.current?.addSource(`safe-zone-${index}`, {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [zone.lng, zone.lat]
            },
            properties: {}
          }
        });

        map.current?.addLayer({
          id: `safe-zone-${index}`,
          type: 'circle',
          source: `safe-zone-${index}`,
          paint: {
            'circle-radius': zone.radius / 10,
            'circle-color': '#3b82f6',
            'circle-opacity': 0.1,
            'circle-stroke-width': 2,
            'circle-stroke-color': '#3b82f6',
            'circle-stroke-opacity': 0.3
          }
        });

        // Add safe zone marker
        new mapboxgl.Marker({
          color: '#3b82f6',
          scale: 0.8
        })
          .setLngLat([zone.lng, zone.lat])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 })
              .setHTML(`
                <div class="p-2">
                  <h3 class="font-semibold text-blue-600">${zone.name}</h3>
                  <p class="text-sm text-gray-600">Safe Zone</p>
                  <p class="text-xs text-gray-500">Radius: ${zone.radius}m</p>
                </div>
              `)
          )
          .addTo(map.current);
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      setMapInitialized(true);
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (!mapInitialized && !mapboxToken) {
    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-amber-600 bg-amber-50 p-3 rounded-lg">
          <MapPin className="w-5 h-5" />
          <span className="text-sm">Please enter your Mapbox token to view the location map</span>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Mapbox Public Token</label>
          <Input
            type="text"
            placeholder="pk.eyJ1IjoieW91ci11c2VybmFtZSIsImEiOiJjbG..."
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
          />
          <p className="text-xs text-muted-foreground">
            Get your token from{' '}
            <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              mapbox.com
            </a>
          </p>
          <Button onClick={initializeMap} className="w-full">
            <Navigation className="w-4 h-4 mr-2" />
            Load Map
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {!mapInitialized && (
        <div className="space-y-2">
          <Input
            type="text"
            placeholder="Enter Mapbox token"
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
          />
          <Button onClick={initializeMap} className="w-full">
            Load Map
          </Button>
        </div>
      )}
      <div ref={mapContainer} className="w-full h-96 rounded-lg shadow-lg" />
      {mapInitialized && (
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-green-50 p-3 rounded-lg">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="font-medium text-green-800">Child Location</span>
            </div>
            <p className="text-green-600 mt-1">Currently at school</p>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="font-medium text-blue-800">Safe Zones</span>
            </div>
            <p className="text-blue-600 mt-1">2 zones nearby</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationMap;