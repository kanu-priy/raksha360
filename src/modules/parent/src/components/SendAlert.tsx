import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bell, Clock, CheckCircle, Phone, MessageSquare, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SendAlert = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const notificationMethods = [
    { 
      id: 'sms', 
      label: 'SMS Alert', 
      icon: MessageSquare, 
      color: 'bg-green-500',
      description: 'Send emergency SMS to parent'
    },
    { 
      id: 'call', 
      label: 'Emergency Call', 
      icon: Phone, 
      color: 'bg-red-500',
      description: 'Automated emergency call'
    },
    { 
      id: 'email', 
      label: 'Email Alert', 
      icon: Mail, 
      color: 'bg-blue-500',
      description: 'Detailed email notification'
    },
    { 
      id: 'push', 
      label: 'Push Notification', 
      icon: Bell, 
      color: 'bg-orange-500',
      description: 'Instant push notification'
    }
  ];

  const recentNotifications = [
    {
      id: 1,
      type: 'Fire drill completed at school',
      method: 'SMS + Push',
      time: '2 hours ago',
      status: 'delivered'
    },
    {
      id: 2,
      type: 'Child arrived safely at school',
      method: 'Push notification',
      time: '8:30 AM',
      status: 'read'
    },
    {
      id: 3,
      type: 'Weather alert in your area',
      method: 'SMS + Email',
      time: 'Yesterday',
      status: 'delivered'
    }
  ];

  const handleSendNotification = async (method: string) => {
    setIsLoading(true);
    
    // Mock API call
    setTimeout(() => {
      toast({
        title: "Notification sent!",
        description: `${notificationMethods.find(m => m.id === method)?.label} sent to parent successfully.`,
      });
      setIsLoading(false);
    }, 1500);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'text-green-600';
      case 'read': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered': return <CheckCircle className="w-3 h-3" />;
      case 'read': return <MessageSquare className="w-3 h-3" />;
      default: return <Clock className="w-3 h-3" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Emergency Notification Methods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bell className="w-5 h-5 text-primary" />
            <span>Emergency Notifications</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {notificationMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <Card key={method.id} className="border-0 shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`w-10 h-10 ${method.color} rounded-full flex items-center justify-center`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{method.label}</h3>
                        <p className="text-xs text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                    <Button 
                      onClick={() => handleSendNotification(method.id)}
                      className="w-full"
                      variant="outline"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        'Send Now'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Recent Notifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MessageSquare className="w-5 h-5 text-blue-600" />
            <span>Recent Notifications</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentNotifications.map((notification) => (
              <div key={notification.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  notification.status === 'delivered' ? 'bg-green-500' : 'bg-blue-500'
                }`} />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <Badge variant="outline" className="text-xs">
                      {notification.method}
                    </Badge>
                    <div className={`flex items-center space-x-1 text-xs ${
                      notification.status === 'delivered' ? 'text-green-600' : 'text-blue-600'
                    }`}>
                      {notification.status === 'delivered' ? 
                        <CheckCircle className="w-3 h-3" /> : 
                        <MessageSquare className="w-3 h-3" />
                      }
                      <span className="capitalize">{notification.status}</span>
                    </div>
                  </div>
                  <p className="text-sm font-medium">{notification.type}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Clock className="w-3 h-3 text-muted-foreground" />
                    <p className="text-xs text-muted-foreground">{notification.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SendAlert;