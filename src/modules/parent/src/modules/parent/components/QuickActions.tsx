import React from 'react';
import { Phone, MessageSquare, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import SendAlert from '@/components/SendAlert';
import SimpleLocationMap from '@/components/SimpleLocationMap';

interface QuickActionsProps {
  childName: string;
}

const QuickActions: React.FC<QuickActionsProps> = ({ childName }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Emergency Contact */}
      <Card className="bg-green-500 text-white border-0 shadow-elegant">
        <CardContent className="p-6 text-center">
          <Phone className="w-12 h-12 mx-auto mb-3" />
          <h3 className="font-bold text-lg mb-2">Emergency Contact</h3>
          <p className="text-sm text-green-100 mb-4">Quick access to emergency services</p>
          <Button 
            className="w-full bg-white text-green-500 hover:bg-green-50"
            onClick={() => window.open('tel:911', '_self')}
          >
            Call Now
          </Button>
        </CardContent>
      </Card>

      {/* Emergency Alert */}
      <Card className="bg-blue-500 text-white border-0 shadow-elegant">
        <CardContent className="p-6 text-center">
          <MessageSquare className="w-12 h-12 mx-auto mb-3" />
          <h3 className="font-bold text-lg mb-2">Emergency Alert</h3>
          <p className="text-sm text-blue-100 mb-4">Send emergency notifications</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full bg-white text-blue-500 hover:bg-blue-50">
                Send Message
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Emergency Alert System</DialogTitle>
              </DialogHeader>
              <SendAlert />
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>

      {/* Location Tracking */}
      <Card className="bg-orange-500 text-white border-0 shadow-elegant">
        <CardContent className="p-6 text-center">
          <MapPin className="w-12 h-12 mx-auto mb-3" />
          <h3 className="font-bold text-lg mb-2">Track Location</h3>
          <p className="text-sm text-orange-100 mb-4">View real-time location updates</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full bg-white text-orange-500 hover:bg-orange-50">
                View Map
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Child Location Tracking</DialogTitle>
              </DialogHeader>
              <SimpleLocationMap childName={childName} />
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuickActions;