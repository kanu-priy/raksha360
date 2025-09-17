import React from 'react';
import ChildStatusCard from './components/ChildStatusCard';
import OnlineStatus from './components/OnlineStatus';
import QuickActions from './components/QuickActions';
import SafetyProgress from './components/SafetyProgress';
import RecentNotifications from './components/RecentNotifications';
import NearbyZones from './components/NearbyZones';
import SchoolInformation from './components/SchoolInformation';
import { childInfo, safetyMetrics, recentAlerts, nearbyZones } from './data/mockData';

const ParentDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-primary-glow">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">SafeGuard Parent Portal</h1>
          <p className="text-green-50">Keep your child safe, stay informed and prepared</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        
        {/* Child Status Card */}
        <ChildStatusCard childInfo={childInfo} safetyMetrics={safetyMetrics} />

        {/* Online Status */}
        <OnlineStatus />

        {/* Quick Actions */}
        <QuickActions childName={childInfo.name} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Safety Progress */}
          <SafetyProgress safetyMetrics={safetyMetrics} />

          {/* Recent Notifications */}
          <RecentNotifications alerts={recentAlerts} />
        </div>

        {/* Nearby Safe Zones */}
        <NearbyZones zones={nearbyZones} />

        {/* School Information */}
        <SchoolInformation childInfo={childInfo} />

      </div>
    </div>
  );
};

export default ParentDashboard;