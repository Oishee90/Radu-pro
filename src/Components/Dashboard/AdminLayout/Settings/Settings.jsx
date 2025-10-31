// src/components/settings/Settings.jsx
import React, { useState } from "react";
import { Globe, FileText, Shield } from "lucide-react";
import GeneralTab from "./GeneralTab";
import TermsCondition from "./TermsCondition";
import Privacy from "./Privacy";
import { MdOutlineShield } from "react-icons/md";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="min-h-screen p-6 outfit">
      <div className="">
        {/* Header */}
        <h1 className="mb-6 text-2xl font-semibold text-gray-800">Settings</h1>

        {/* Tabs */}
        <div className="flex items-center gap-8 mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("general")}
            className={`flex items-center gap-2 pb-3 text-sm font-medium transition-colors inter ${
              activeTab === "general"
                ? "text-[#DF951F] border-b-2 border-[#DF951F]"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <Globe className="w-4 h-4" />
            General
          </button>

          <button
            onClick={() => setActiveTab("terms")}
            className={`flex items-center gap-2 pb-3 text-xs md:text-sm font-medium transition-colors inter ${
              activeTab === "terms"
                ? "text-[#DF951F] border-b-2 border-[#DF951F]"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <FileText className="text-xl" />
            Terms And condition
          </button>

          <button
            onClick={() => setActiveTab("privacy")}
            className={`flex items-center gap-2 pb-3 text-xs md:text-sm  font-medium transition-colors inter ${
              activeTab === "privacy"
                ? "text-[#DF951F] border-b-2 border-[#DF951F]"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <Shield className="text-xl" />
            Privacy Policy
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "general" && <GeneralTab />}
        {activeTab === "terms" && <TermsCondition />}
        {activeTab === "privacy" && <Privacy />}
      </div>
    </div>
  );
};

export default Settings;
