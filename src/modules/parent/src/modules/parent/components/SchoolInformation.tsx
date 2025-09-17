import React from 'react';
import { School } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ChildInfo {
  name: string;
  class: string;
  school: string;
  currentStatus: string;
  lastUpdated: string;
}

interface SchoolInformationProps {
  childInfo: ChildInfo;
}

const SchoolInformation: React.FC<SchoolInformationProps> = ({ childInfo }) => {
  return (
    <Card className="shadow-elegant">
      <CardHeader className="flex flex-row items-center space-y-0 pb-2">
        <School className="w-5 h-5 text-indigo-600 mr-2" />
        <CardTitle className="text-lg">School Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-lg">
          <div>
            <h4 className="font-medium text-indigo-800">{childInfo.school}</h4>
            <p className="text-sm text-indigo-600">Class: {childInfo.class}</p>
            <p className="text-xs text-indigo-500 mt-1">Last updated: {childInfo.lastUpdated}</p>
          </div>
          <Badge className="bg-indigo-500 text-white">
            Active
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default SchoolInformation;