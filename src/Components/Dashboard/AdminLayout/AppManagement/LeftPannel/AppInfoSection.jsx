import React, { useEffect, useState } from "react";

export default function AppInfoSection({ isEdit, data }) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data, isEdit]);

  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const displayValue = (value) =>
    value && value.trim() !== "" ? value : "N/A";

  const leftColumnFields = [
    { label: "Ministry", key: "ministry" },
    { label: "Organization", key: "organization" },
    { label: "Procuring Entity Code", key: "procuringEntityCode" },
    { label: "Procurement Nature", key: "procurementNature" },
    { label: "Event Type", key: "eventType" },
    {
      label: "Invitation Reference No",
      key: "invitationReferenceNo",
      required: true,
    },
    { label: "App ID", key: "appIdField" },
  ];

  const rightColumnFields = [
    { label: "Division", key: "division" },
    { label: "Procuring Entity Name", key: "procuringEntityName" },
    { label: "Procuring Entity District", key: "procuringEntityDistrict" },
    { label: "Invitation for", key: "invitationFor" },
    { label: "Tender/Proposal Status", key: "tenderProposalStatus" },
    { label: "Tender/Proposal ID", key: "tenderProposalId" },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">
          APP ID:{" "}
          <span className="font-normal">{displayValue(formData?.appId)}</span>
        </h2>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20">
          {/* Left Column */}
          <div>
            {leftColumnFields.map((field) => (
              <div key={field.key} className="flex items-center py-2 group">
                <div className="w-56 text-sm font-medium text-gray-700">
                  {field.label}
                </div>

                {/*Arrow stays */}
                <div className="w-12 text-xl font-light text-gray-700 group-hover:text-green-600">
                  ›
                </div>

                <div className="flex items-center flex-1">
                  {isEdit ? (
                    <input
                      type="text"
                      value={formData?.[field.key] || ""}
                      onChange={(e) => handleChange(field.key, e.target.value)}
                      className="w-full py-1 text-sm text-gray-900 bg-transparent border-b border-gray-300 outline-none focus:border-green-600"
                    />
                  ) : (
                    <span className="text-sm text-gray-900">
                      {displayValue(formData?.[field.key])}
                    </span>
                  )}

                  {field.required && formData?.[field.key] && (
                    <span className="ml-2 text-red-500">*</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div>
            {rightColumnFields.map((field) => (
              <div key={field.key} className="flex items-center py-2 group">
                <div className="w-56 text-sm font-medium text-gray-700">
                  {field.label}
                </div>

                {/* 👉 Arrow stays */}
                <div className="w-12 text-xl font-light text-gray-700 group-hover:text-green-600">
                  ›
                </div>

                <div className="flex-1">
                  {isEdit ? (
                    <input
                      type="text"
                      value={formData?.[field.key] || ""}
                      onChange={(e) => handleChange(field.key, e.target.value)}
                      className="w-full py-1 text-sm text-gray-900 bg-transparent border-b border-gray-300 outline-none focus:border-green-600"
                    />
                  ) : (
                    <span className="text-sm text-gray-900">
                      {displayValue(formData?.[field.key])}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
