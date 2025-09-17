import React from 'react';
import { MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Zone {
  name: string;
  distance: string;
  type: string;
}

interface NearbyZonesProps {
  zones: Zone[];
}

const NearbyZones: React.FC<NearbyZonesProps> = ({ zones }) => {
  return (
    <Card className="shadow-elegant">
      <CardHeader className="flex flex-row items-center space-y-0 pb-2">
        <MapPin className="w-5 h-5 text-purple-600 mr-2" />
        <CardTitle className="text-lg">Nearby Safe Zones</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {zones.map((zone, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">{zone.name}</h4>
                <Badge variant={zone.type === 'safe' ? 'default' : 'secondary'}>
                  {zone.type}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{zone.distance}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NearbyZones;