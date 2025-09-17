import React from 'react';
import { Activity } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const OnlineStatus: React.FC = () => {
  return (
    <Card className="bg-green-50 border-green-200 shadow-sm">
      <CardContent className="p-4">
        <div className="flex items-center space-x-3">
          <Activity className="w-5 h-5 text-green-600" />
          <div>
            <p className="font-medium text-green-800">Online</p>
            <p className="text-sm text-green-600">All safety features and notifications active.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OnlineStatus;