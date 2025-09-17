import React from 'react';
import { CheckCircle, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface ChildInfo {
  name: string;
  class: string;
  school: string;
  currentStatus: string;
  lastUpdated: string;
}

interface SafetyMetrics {
  safetyScore: number;
}

interface ChildStatusCardProps {
  childInfo: ChildInfo;
  safetyMetrics: SafetyMetrics;
}

const ChildStatusCard: React.FC<ChildStatusCardProps> = ({ childInfo, safetyMetrics }) => {
  return (
    <Card className="bg-gradient-to-r from-green-400 to-blue-500 text-white border-0 shadow-elegant">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Welcome back! 👋</h2>
              <p className="text-lg">{childInfo.name} • {childInfo.class}</p>
              <div className="flex items-center space-x-2 mt-2">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm">Currently {childInfo.currentStatus}</span>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  Level 4 Safety Hero
                </Badge>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="bg-white/20 px-4 py-2 rounded-lg">
              <div className="text-2xl font-bold">Safe</div>
              <div className="text-sm opacity-90">Status</div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-2">
            <span>Safety Score Progress</span>
            <span>{safetyMetrics.safetyScore}/100</span>
          </div>
          <Progress value={safetyMetrics.safetyScore} className="h-2 bg-white/20" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ChildStatusCard;