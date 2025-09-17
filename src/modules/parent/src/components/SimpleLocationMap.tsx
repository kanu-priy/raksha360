import React from 'react';
import { MapPin, Navigation, Shield, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface SimpleLocationMapProps {
  childName?: string;
}

const SimpleLocationMap: React.FC<SimpleLocationMapProps> = ({ childName = "Priya" }) => {
  // Mock location data
  const childLocation = {
    school: "Delhi Public School, Sector 45",
    address: "Sector 45, Gurgaon, Haryana 122003",
    coordinates: "28.6139°N, 77.2090°E",
    lastUpdate: "2 minutes ago",
    status: "Safe at School"
  };

  const safeZones = [
    { name: "Community Center", distance: "0.5 km", type: "Shelter", color: "bg-blue-500" },
    { name: "Central Hospital", distance: "1.2 km", type: "Medical", color: "bg-green-500" },
    { name: "Police Station", distance: "0.8 km", type: "Emergency", color: "bg-red-500" },
    { name: "Fire Station", distance: "1.5 km", type: "Emergency", color: "bg-orange-500" }
  ];

  return (
    <div className="space-y-6">
      {/* Current Location Status */}
      <Card className="bg-gradient-to-r from-green-400 to-blue-500 text-white border-0">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{childName}'s Location</h3>
                <p className="text-green-100">{childLocation.status}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Updated: {childLocation.lastUpdate}</span>
                </div>
              </div>
            </div>
            <Badge className="bg-white/20 text-white border-0">
              Live
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Location Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Navigation className="w-5 h-5 text-blue-600" />
              <span>Current Location</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-lg">{childLocation.school}</h4>
              <p className="text-muted-foreground">{childLocation.address}</p>
              <div className="flex items-center space-x-2 mt-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{childLocation.coordinates}</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <Button className="w-full" variant="outline">
                <Navigation className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
              <Button className="w-full" variant="outline">
                <Shield className="w-4 h-4 mr-2" />
                View Safety Perimeter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Map Placeholder */}
        <Card>
          <CardContent className="p-0">
            <div className="relative h-64 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg overflow-hidden">
              {/* Simple visual map representation */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              
              {/* Child location marker */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg animate-pulse">
                    <div className="absolute -top-1 -left-1 w-10 h-10 bg-green-200 rounded-full animate-ping"></div>
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg text-xs font-medium whitespace-nowrap">
                    {childName}
                  </div>
                </div>
              </div>

              {/* Safe zones markers */}
              <div className="absolute top-6 right-6 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
              <div className="absolute bottom-6 left-6 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
              <div className="absolute top-6 left-6 w-4 h-4 bg-orange-500 rounded-full border-2 border-white"></div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Nearby Safe Zones */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-purple-600" />
            <span>Nearby Safe Zones</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {safeZones.map((zone, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 ${zone.color} rounded-full flex items-center justify-center`}>
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium">{zone.name}</h4>
                    <p className="text-sm text-muted-foreground">{zone.distance} away</p>
                  </div>
                </div>
                <Badge variant="outline">
                  {zone.type}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Location History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-indigo-600" />
            <span>Location History</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="font-medium text-green-800">Arrived at School</p>
                <p className="text-sm text-green-600">8:15 AM - On time</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="font-medium text-blue-800">Left Home</p>
                <p className="text-sm text-blue-600">7:45 AM - School bus pickup</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SimpleLocationMap;