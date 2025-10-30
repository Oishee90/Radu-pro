import { useState } from "react";
import TabButton from "./TabButton";
import PaymentSettings from "./PaymentSettings";
import PaymentHistory from "./PaymentHistory";


const Payment = () => {
  const [activeTab, setActiveTab] = useState('settings');

  return (
    <div className="min-h-screen bg-gray-50 outfit">
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Payments</h1>

        {/* Tabs */}
        <div className="flex space-x-1 border-b border-gray-200 mb-8">
          <TabButton
            label="Payment History"
            active={activeTab === 'history'}
            onClick={() => setActiveTab('history')}
          />
          <TabButton
            label="Payment Settings"
            active={activeTab === 'settings'}
            onClick={() => setActiveTab('settings')}
          />
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-sm">
          {activeTab === 'settings' && <PaymentSettings />}
          {activeTab === 'history' && <PaymentHistory />}
        </div>
      </div>
    </div>
  );
};

export default Payment;