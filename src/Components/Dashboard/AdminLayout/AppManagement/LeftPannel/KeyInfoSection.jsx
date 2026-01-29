import { useState, useEffect } from "react";

export default function KeyInfoSection({
  isEdit = false,
  initialProcuringMethod = "Open Tendering Method (OTM)",
  initialBudgetType = "Revenue",
  initialSourceOfFund = "Government",
  onDataChange,
}) {
  const [procuringMethod, setProcuringMethod] = useState(
    initialProcuringMethod,
  );
  const [budgetType, setBudgetType] = useState(initialBudgetType);
  const [sourceOfFund, setSourceOfFund] = useState(initialSourceOfFund);

  // sync with parent data
  useEffect(() => {
    setProcuringMethod(initialProcuringMethod);
  }, [initialProcuringMethod]);

  useEffect(() => {
    setBudgetType(initialBudgetType);
  }, [initialBudgetType]);

  useEffect(() => {
    setSourceOfFund(initialSourceOfFund);
  }, [initialSourceOfFund]);

  const handleChange = (field, value) => {
    if (field === "procuringMethod") setProcuringMethod(value);
    if (field === "budgetType") setBudgetType(value);
    if (field === "sourceOfFund") setSourceOfFund(value);

    if (onDataChange) {
      onDataChange({ [field]: value });
    }
  };

  const displayValue = (value) =>
    value && value.trim() !== "" ? value : "N/A";

  return (
    <div className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm">
      {/* Header */}
      <div className="relative px-4 py-2.5 bg-green-50 border-l-4 border-green-600">
        <h2 className="text-base font-semibold text-green-800">
          Key Information and Funding
        </h2>
      </div>

      {/* Content */}
      <div className="px-4 py-3">
        <div className="grid grid-cols-2 gap-x-12 gap-y-2">
          {/* Procuring Method */}
          <div className="flex items-center group">
            <div className="text-sm font-medium text-gray-700">
              Procuring Method
            </div>
            <div className="px-3 text-xl font-light text-gray-700 group-hover:text-green-600">
              ›
            </div>

            {isEdit ? (
              <input
                type="text"
                value={procuringMethod}
                onChange={(e) =>
                  handleChange("procuringMethod", e.target.value)
                }
                className="flex-1 py-1 text-sm text-gray-900 bg-transparent border-b border-gray-300 outline-none focus:border-green-600"
              />
            ) : (
              <span className="text-sm text-gray-900">
                {displayValue(procuringMethod)}
              </span>
            )}
          </div>

          {/* Budget Type */}
          <div className="flex items-center group">
            <div className="text-sm font-medium text-gray-700">Budget Type</div>
            <div className="px-3 text-xl font-light text-gray-700 group-hover:text-green-600">
              ›
            </div>

            {isEdit ? (
              <input
                type="text"
                value={budgetType}
                onChange={(e) => handleChange("budgetType", e.target.value)}
                className="flex-1 py-1 text-sm text-gray-900 bg-transparent border-b border-gray-300 outline-none focus:border-green-600"
              />
            ) : (
              <span className="text-sm text-gray-900">
                {displayValue(budgetType)}
              </span>
            )}
          </div>

          {/* Source of Fund */}
          <div className="flex items-center group">
            <div className="text-sm font-medium text-gray-700">
              Source of Fund
            </div>
            <div className="px-3 text-xl font-light text-gray-700 group-hover:text-green-600">
              ›
            </div>

            {isEdit ? (
              <input
                type="text"
                value={sourceOfFund}
                onChange={(e) => handleChange("sourceOfFund", e.target.value)}
                className="flex-1 py-1 text-sm text-gray-900 bg-transparent border-b border-gray-300 outline-none focus:border-green-600"
              />
            ) : (
              <span className="text-sm text-gray-900">
                {displayValue(sourceOfFund)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
