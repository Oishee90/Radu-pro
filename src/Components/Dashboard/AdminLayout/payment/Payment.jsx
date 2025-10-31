import { useState } from "react";
import TabButton from "./TabButton";
import PaymentSettings from "./PaymentSettings";
import PaymentHistory from "./PaymentHistory";

const Payment = () => {
  const [activeTab, setActiveTab] = useState("settings");

  return (
    <div className="min-h-screen outfit">
      <div className="p-6">
        <h1 className="mb-8 text-3xl font-bold text-[#1F2937]">Payments</h1>

        {/* Tabs */}
        <div className="flex mb-8 space-x-1 border-b border-gray-200">
          <TabButton
            label="Payment History"
            active={activeTab === "history"}
            onClick={() => setActiveTab("history")}
          />
          <TabButton
            label="Payment Settings"
            active={activeTab === "settings"}
            onClick={() => setActiveTab("settings")}
          />
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-sm">
          {activeTab === "settings" && <PaymentSettings />}
          {activeTab === "history" && <PaymentHistory />}
        </div>
      </div>
    </div>
  );
};

export default Payment;
