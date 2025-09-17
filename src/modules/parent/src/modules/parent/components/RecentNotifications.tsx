import React from 'react';
import { Bell, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Alert {
  id: number;
  type: string;
  message: string;
  time: string;
  status: string;
}

interface RecentNotificationsProps {
  alerts: Alert[];
}

const RecentNotifications: React.FC<RecentNotificationsProps> = ({ alerts }) => {
  return (
    <Card className="shadow-elegant">
      <CardHeader className="flex flex-row items-center space-y-0 pb-2">
        <Bell className="w-5 h-5 text-blue-600 mr-2" />
        <CardTitle className="text-lg">Recent Notifications</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert) => (
          <div key={alert.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className={`w-2 h-2 rounded-full mt-2 ${
              alert.status === 'active' ? 'bg-red-500' : 'bg-green-500'
            }`} />
            <div className="flex-1">
              <p className="text-sm font-medium">{alert.message}</p>
              <div className="flex items-center space-x-2 mt-1">
                <Clock className="w-3 h-3 text-muted-foreground" />
                <p className="text-xs text-muted-foreground">{alert.time}</p>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentNotifications;