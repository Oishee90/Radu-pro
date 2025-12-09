import React, { useState, useRef, useEffect } from "react";
import { Globe, FileText, Shield, ChevronDown } from "lucide-react";
import GeneralTab from "./GeneralTab";
import TermsCondition from "./TermsCondition";
import Privacy from "./Privacy";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const tabs = [
    { id: "general", label: "General", icon: <Globe className="w-4 h-4" /> },
    {
      id: "terms",
      label: "Terms & Condition",
      icon: <FileText className="w-4 h-4" />,
    },
    {
      id: "privacy",
      label: "Privacy Policy",
      icon: <Shield className="w-4 h-4" />,
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen p-6 outfit">
      <h1 className="mb-6 text-2xl font-semibold text-gray-800">Settings</h1>

      {/* Tabs for large screens */}
      <div className="items-center hidden gap-8 mb-8 border-b border-gray-200 md:flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 pb-3 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "text-[#72C02C] border-b-2 border-[#72C02C]"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Custom dropdown for small screens */}
      <div className="relative mb-6 md:hidden" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center justify-between w-full p-3 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm"
        >
          <div className="flex items-center gap-2">
            {tabs.find((t) => t.id === activeTab)?.icon}
            <span>{tabs.find((t) => t.id === activeTab)?.label}</span>
          </div>
          <ChevronDown
            className={`w-5 h-5 transition-transform ${
              dropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {dropdownOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setDropdownOpen(false);
                }}
                className={`flex items-center gap-2 w-full px-4 py-3 text-left text-gray-700  ${
                  activeTab === tab.id
                    ? "main-color text-white font-medium hover:bg-[#589721]"
                    : "hover:bg-"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "general" && <GeneralTab />}
        {activeTab === "terms" && <TermsCondition />}
        {activeTab === "privacy" && <Privacy />}
      </div>
    </div>
  );
};

export default Settings;
