import { useState } from "react";

export default function CustomDropdown() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const categories = ["Motivation", "Success", "Inspiration"];

  const handleSelect = (cat) => {
    setSelectedCategory(cat);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      {/* Dropdown Box */}
      <div
        className="flex items-center justify-between px-4 py-2 bg-white border rounded-md cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={
            selectedCategory ? "text-orange-800 font-medium" : "text-gray-500"
          }
        >
          {selectedCategory || "Select a category"}
        </span>

        {/* Arrow Icon */}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 overflow-auto bg-white border rounded-md shadow-lg max-h-40">
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => handleSelect(cat)}
              className={`px-4 py-2 cursor-pointer transition-colors ${
                selectedCategory === cat
                  ? "bg-orange-100 text-orange-800 font-medium"
                  : "hover:bg-orange-50 hover:text-orange-700"
              }`}
            >
              {cat}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
