import { useState, useEffect } from "react";

export default function ParticularInfoSection({
  isEdit = false,
  initialProjectTitle = "DNA Laboratory Information Management System (LIMS)",
  initialCategory = "Building completion work",
  onDataChange,
}) {
  const [projectTitle, setProjectTitle] = useState(initialProjectTitle);
  const [category, setCategory] = useState(initialCategory);

  // Update local state when initial values change
  useEffect(() => {
    setProjectTitle(initialProjectTitle);
  }, [initialProjectTitle]);

  useEffect(() => {
    setCategory(initialCategory);
  }, [initialCategory]);

  const handleChange = (field, value) => {
    if (field === "projectTitle") {
      setProjectTitle(value);
    } else if (field === "category") {
      setCategory(value);
    }

    // Call parent callback
    if (onDataChange) {
      onDataChange({ [field]: value });
    }
  };

  const displayValue = (value) => {
    return value && value.trim() !== "" ? value : "N/A";
  };

  return (
    <div className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm">
      {/* Header with green background and left border */}
      <div className="relative px-4 py-2.5 bg-green-50 border-l-[4px] border-green-600">
        <h2 className="text-base font-semibold text-green-800">
          Particular Information
        </h2>
      </div>

      {/* Content area */}
      <div className="px-4 py-3">
        <div className="space-y-2">
          {/* Project Title */}
          <div className="flex items-center group">
            <div className="text-sm font-medium text-gray-700 min-w-[120px]">
              Project Title
            </div>
            <div className="px-3 text-xl font-light text-gray-700 group-hover:text-green-600">
              ›
            </div>
            <div className="flex-1">
              {isEdit ? (
                <input
                  type="text"
                  value={projectTitle}
                  onChange={(e) => handleChange("projectTitle", e.target.value)}
                  className="w-full py-1 text-sm text-gray-900 bg-transparent border-b border-gray-300 outline-none focus:border-green-600"
                  placeholder="Enter project title"
                />
              ) : (
                <span className="text-sm text-gray-900">
                  {displayValue(projectTitle)}
                </span>
              )}
            </div>
          </div>

          {/* Category */}
          <div className="flex items-center group">
            <div className="text-sm font-medium text-gray-700 min-w-[120px]">
              Category
            </div>
            <div className="px-3 text-xl font-light text-gray-700 group-hover:text-green-600">
              ›
            </div>
            <div className="flex-1">
              {isEdit ? (
                <input
                  type="text"
                  value={category}
                  onChange={(e) => handleChange("category", e.target.value)}
                  className="w-full py-1 text-sm text-gray-900 bg-transparent border-b border-gray-300 outline-none focus:border-green-600"
                  placeholder="Enter category"
                />
              ) : (
                <span className="text-sm text-gray-900">
                  {displayValue(category)}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
