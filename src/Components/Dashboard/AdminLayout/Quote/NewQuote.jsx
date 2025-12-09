import React, { useState } from "react";
import CustomDropdown from "./CustomDropdown";
import { X } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
const NewQuote = () => {
  const [file, setFile] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [categoryName, setCategoryName] = useState("");

  const handleAddCategory = () => {
    if (categoryName.trim() === "") return;
    // console.log("New Category:", categoryName);
    toast.success(`Category "${categoryName}" added successfully!`);
    setCategoryName("");
    setShowPopup(false);
  };
  // File select / drop handle
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) setFile(selectedFile);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) setFile(droppedFile);
  };
  const handleCreatePack = () => {
    toast.success("Quote Pack created successfully!");
  };

  const removeFile = () => setFile(null);
  return (
    <div className="min-h-screen p-6 outfit ">
      {/* Header */}
      <Toaster></Toaster>
      {/* Action Buttons */}
      <div className="flex flex-col items-start justify-between mb-6 space-x-3 lg:flex-row lg:items-center">
        <h1 className="mb-6 text-2xl font-bold text-gray-800">
          Quote Pack Management
        </h1>
        <button
          onClick={() => setShowPopup(true)}
          className="px-4 py-2 text-white transition rounded-xl orange hover:bg-amber-600"
        >
          + Add Category
        </button>
      </div>

      {/* Form Card */}
      <div className="p-6 bg-white shadow-xl rounded-2xl">
        <h2 className="mb-4 text-lg font-semibold text-[#1F2937]">
          Create New Quote Pack
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Left Column */}
          <div>
            <label className="block mb-1 text-base font-medium text-[#1F2937]">
              Title
            </label>
            <input
              type="text"
              placeholder="Pack title"
              className="w-full px-3 py-2 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <label className="block mt-4 mb-1 text-base font-medium text-[#1F2937]">
              Description
            </label>
            <textarea
              rows={3}
              placeholder="Pack description"
              className="w-full px-3 py-2 border border-[#E5E7EB] rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <label className="block mt-4 mb-1 text-base font-medium text-[#1F2937]">
              Category
            </label>
            <CustomDropdown></CustomDropdown>

            <label className="block mt-4 mb-1 text-base font-medium text-[#1F2937]">
              Tags{" "}
              <span className="text-xs text-gray-500">(comma separated)</span>
            </label>
            <input
              type="text"
              placeholder="success, inspiration, etc."
              className="w-full px-3 py-2 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Right Column */}
          <div>
            <label className="block mb-1 text-sm font-medium text-[#1F2937]">
              Thumbnail
            </label>

            <div
              className="p-4 text-center border-2 border-[#E5E7EB] border-dashed rounded-md cursor-pointer hover:bg-gray-50 transition"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              onClick={() => document.getElementById("fileInput").click()}
            >
              {!file ? (
                <>
                  <svg
                    className="w-12 h-12 mx-auto mb-2 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-base text-[#1F2937]">
                    Drag & drop an image here, or{" "}
                    <span className="underline text-amber-500">
                      browse files
                    </span>
                  </p>
                </>
              ) : (
                <div className="relative inline-block">
                  <img
                    src={URL.createObjectURL(file)}
                    alt="preview"
                    className="object-cover w-32 h-32 rounded-md"
                  />
                  <button
                    type="button"
                    onClick={removeFile}
                    className="absolute top-0 right-0 p-1 bg-white rounded-full shadow-md hover:bg-gray-100"
                  >
                    <X size={16} className="text-red-500" />
                  </button>
                </div>
              )}
              <input
                type="file"
                id="fileInput"
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>

            <div className="mt-6 space-y-3">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-orange-500 border-[#E5E7EB] rounded focus:ring-orange-500"
                />
                <span className="ml-2 text-sm text-[#1F2937]">
                  Premium Content (Requires subscription)
                </span>
              </label>

              {/* <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-orange-500 border-[#E5E7EB] rounded focus:ring-orange-500"
                />
                <span className="ml-2 text-sm text-[#1F2937]">
                  Publish immediately
                </span>
              </label> */}
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end mt-8 space-x-3">
          <Link to="/quote-packs">
            <button className="px-5 py-2 text-gray-700 transition border border-[#E5E7EB] rounded-md hover:bg-gray-100">
              Cancel
            </button>
          </Link>
          <button
            onClick={handleCreatePack}
            className="px-5 py-2 text-white transition rounded-md orange hover:bg-amber-600"
          >
            Create Pack
          </button>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="relative p-6 bg-white shadow-xl rounded-xl w-80">
            <h2 className="mb-4 text-lg font-semibold outfit">Add Category</h2>
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              placeholder="Category Name"
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleAddCategory}
                className="px-4 py-2 text-white rounded-md orange hover:bg-amber-600"
              >
                Add
              </button>
            </div>
            {/* Close X button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute text-gray-500 top-3 right-3 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewQuote;
