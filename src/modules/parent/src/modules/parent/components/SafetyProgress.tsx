import React from 'react';
import { Shield, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface SafetyMetrics {
  drillsCompleted: number;
  totalDrills: number;
  safetyScore: number;
  preparednessLevel: string;
}

interface SafetyProgressProps {
  safetyMetrics: SafetyMetrics;
}

const SafetyProgress: React.FC<SafetyProgressProps> = ({ safetyMetrics }) => {
  const progressPercentage = (safetyMetrics.drillsCompleted / safetyMetrics.totalDrills) * 100;

  const safetyModules = [
    {
      name: "Earthquake Safety",
      level: "Beginner",
      bgColor: "bg-green-50",
      iconBg: "bg-green-500",
      textColor: "text-green-800",
      subtextColor: "text-green-600",
      badgeColor: "bg-green-500"
    },
    {
      name: "Fire Safety",
      level: "Intermediate",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-500",
      textColor: "text-orange-800",
      subtextColor: "text-orange-600",
      badgeColor: "bg-orange-500"
    },
    {
      name: "Flood Preparedness",
      level: "Beginner",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-500",
      textColor: "text-blue-800",
      subtextColor: "text-blue-600",
      badgeColor: "bg-blue-500"
    }
  ];

  return (
    <Card className="shadow-elegant">
      <CardHeader className="flex flex-row items-center space-y-0 pb-2">
        <Shield className="w-5 h-5 text-green-600 mr-2" />
        <CardTitle className="text-lg">Safety Progress</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm text-muted-foreground">
          {safetyMetrics.drillsCompleted} of {safetyMetrics.totalDrills} safety drills completed
        </div>
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Overall Progress</span>
            <span>{safetyMetrics.drillsCompleted}/{safetyMetrics.totalDrills} ({Math.round(progressPercentage)}%)</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>

        <div className="space-y-3 mt-6">
          {safetyModules.map((module, index) => (
            <div key={index} className={`flex items-center justify-between p-3 ${module.bgColor} rounded-lg`}>
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 ${module.iconBg} rounded-full flex items-center justify-center`}>
                  <AlertTriangle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className={`font-medium ${module.textColor}`}>{module.name}</p>
                  <p className={`text-xs ${module.subtextColor}`}>{module.level}</p>
                </div>
              </div>
              <Badge className={`${module.badgeColor} text-white`}>
                Continue
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SafetyProgress;