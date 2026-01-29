import React, { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
export default function MenuCustomize() {
  const [sections, setSections] = useState([
    {
      id: "ministry",
      title: "Ministry",
      items: [{ id: 1, name: "Ministry of Home Affairs" }],
    },
    {
      id: "procurement",
      title: "Procurement Type",
      items: [{ id: 1, name: "Good" }],
    },
    {
      id: "plan",
      title: "Plan type",
      items: [{ id: 1, name: "Tender" }],
    },
    {
      id: "agency",
      title: "Agency",
      items: [{ id: 1, name: "Bangladesh Police" }],
    },
  ]);

  const [newItemInputs, setNewItemInputs] = useState({});

  const handleAddItem = (sectionId) => {
    setSections(
      sections.map((section) => {
        if (section.id === sectionId) {
          const newId =
            Math.max(...section.items.map((item) => item.id), 0) + 1;
          return {
            ...section,
            items: [...section.items, { id: newId, name: "", isNew: true }],
          };
        }
        return section;
      }),
    );
    setNewItemInputs({ ...newItemInputs, [sectionId]: "" });
  };

  const handleDeleteItem = (sectionId, itemId) => {
    setSections(
      sections.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            items: section.items.filter((item) => item.id !== itemId),
          };
        }
        return section;
      }),
    );
  };

  const handleInputChange = (sectionId, value) => {
    setNewItemInputs({
      ...newItemInputs,
      [sectionId]: value,
    });
  };

  const handleSaveNewItem = (sectionId) => {
    const value = newItemInputs[sectionId];
    if (!value || !value.trim()) return;

    setSections(
      sections.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            items: section.items.map((item) =>
              item.isNew ? { ...item, name: value, isNew: false } : item,
            ),
          };
        }
        return section;
      }),
    );

    const newInputs = { ...newItemInputs };
    delete newInputs[sectionId];
    setNewItemInputs(newInputs);
  };

  const handleKeyPress = (e, sectionId) => {
    if (e.key === "Enter") {
      handleSaveNewItem(sectionId);
    } else if (e.key === "Escape") {
      handleDeleteItem(
        sectionId,
        sections.find((s) => s.id === sectionId).items.find((i) => i.isNew)?.id,
      );
      const newInputs = { ...newItemInputs };
      delete newInputs[sectionId];
      setNewItemInputs(newInputs);
    }
  };

  return (
    <div className="p-6 mx-auto space-y-4 roboto">
      {sections.map((section) => (
        <div
          key={section.id}
          className="overflow-hidden bg-white border border-gray-200 rounded-lg"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 shadow-xl">
            <h3 className="text-base font-semibold text-gray-900">
              {section.title}
            </h3>
            <button
              onClick={() => handleAddItem(section.id)}
              className="flex items-center justify-center w-6 h-6 transition-colors bg-white border-2 rounded-full border-[#589721] text-[#589721] hover:bg-emerald-50"
              aria-label="Add new item"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Items */}
          <div className="divide-y divide-gray-200">
            {section.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between px-4 py-3 transition-colors hover:bg-gray-50"
              >
                <div className="flex items-center flex-1 min-w-0">
                  <input
                    type="checkbox"
                    checked={!item.isNew}
                    readOnly
                    className="flex-shrink-0 w-4 h-4 mr-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  {item.isNew ? (
                    <input
                      type="text"
                      value={newItemInputs[section.id] || ""}
                      onChange={(e) =>
                        handleInputChange(section.id, e.target.value)
                      }
                      onKeyDown={(e) => handleKeyPress(e, section.id)}
                      onBlur={() => handleSaveNewItem(section.id)}
                      placeholder="Enter name..."
                      className="flex-1 px-2 py-1 text-sm border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      autoFocus
                    />
                  ) : (
                    <span className="text-sm text-gray-900 truncate">
                      {item.name}
                    </span>
                  )}
                </div>

                {!item.isNew && (
                  <div className="flex items-center flex-shrink-0 gap-2 ml-3">
                    <button
                      onClick={() => handleDeleteItem(section.id, item.id)}
                      className="flex items-center justify-center w-6 h-6 text-red-600 transition-colors rounded hover:bg-red-50"
                      aria-label="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
