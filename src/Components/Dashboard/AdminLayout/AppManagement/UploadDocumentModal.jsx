import { useState } from "react";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

const ministryList = [
  "Ministry of Education",
  "Ministry of Health",
  "Ministry of Local Government",
  "Ministry of Finance",
];

const agencyList = ["LGED", "RHD", "BRTA", "Dhaka WASA"];
const procurementList = ["Work", "Goods", "Consultancy"];
const planList = ["Development", "Maintenance", "Emergency"];

function CustomDropdown({ label, data, value, setValue }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <label className="text-base font-semibold text-[#000000] inter">
        {label}
      </label>

      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-3 py-2 mt-1 border rounded-md cursor-pointer"
      >
        <span className="truncate">{value || "Select"}</span>
        <span className="text-xl">▾</span>
      </div>

      {open && (
        <div className="absolute z-20 w-full mt-1 overflow-auto bg-white border rounded-md shadow-lg max-h-40">
          {data.map((item, idx) => (
            <div
              key={idx}
              onClick={() => {
                setValue(item);
                setOpen(false);
              }}
              className="px-3 py-2 cursor-pointer hover:bg-gray-100"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function UploadDocumentModal({ onClose }) {
  const [publishingDate, setPublishingDate] = useState("");
  const [appId, setAppId] = useState("");
  const [title, setTitle] = useState("");
  const [ministry, setMinistry] = useState("");
  const [agency, setAgency] = useState("");
  const [procurement, setProcurement] = useState("");
  const [plan, setPlan] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const handleUpload = () => {
    if (!pdfFile) {
      toast.error("Please upload a PDF file");
      return;
    }

    //  future API call
    toast.success("Document uploaded successfully!");

    // optional: reset form
    setPublishingDate("");
    setAppId("");
    setTitle("");
    setMinistry("");
    setAgency("");
    setProcurement("");
    setPlan("");
    setPdfFile(null);

    // optional: close modal after upload
    // onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black bg-opacity-40">
      <Toaster position="top-center" />
      <div className="relative w-[95%] sm:w-[85%] md:w-[70%] lg:w-1/2 max-h-[90vh] overflow-y-auto p-6 sm:p-8 bg-white rounded-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute flex items-center justify-center bg-gray-200 rounded-full w-9 h-9 right-4 top-4"
        >
          ✕
        </button>

        <h2 className="mb-6 text-xl font-medium text-center sm:text-2xl roboto">
          Upload Document
        </h2>

        {/* Form */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="text-base font-semibold text-[#000000] inter ">
              Publishing Date
            </label>
            <input
              type="date"
              value={publishingDate}
              onChange={(e) => setPublishingDate(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md"
            />
          </div>

          <div>
            <label className="text-base font-semibold text-[#000000] inter">
              App ID
            </label>
            <input
              type="text"
              placeholder="Type here"
              value={appId}
              onChange={(e) => setAppId(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md"
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-base font-semibold text-[#000000] inter">
              Title
            </label>
            <input
              type="text"
              placeholder="Type here"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md"
            />
          </div>

          <CustomDropdown
            label="Ministry"
            data={ministryList}
            value={ministry}
            setValue={setMinistry}
          />
          <CustomDropdown
            label="Agency"
            data={agencyList}
            value={agency}
            setValue={setAgency}
          />
          <CustomDropdown
            label="Procurement Type"
            data={procurementList}
            value={procurement}
            setValue={setProcurement}
          />
          <CustomDropdown
            label="Plan Type"
            data={planList}
            value={plan}
            setValue={setPlan}
          />

          {/* PDF Upload */}
          <div className="md:col-span-2">
            <label className="text-base font-semibold text-[#000000] inter">
              Upload PDF File
            </label>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => setPdfFile(e.target.files[0])}
              className="w-full px-3 py-2 mt-1 border rounded-md cursor-pointer"
            />
            {pdfFile && (
              <p className="mt-1 text-sm text-green-600 truncate">
                Selected file: {pdfFile.name}
              </p>
            )}
          </div>
        </div>

        {/* Upload Button */}
        <div onClick={handleUpload} className="flex justify-center mt-8">
          <button className="w-full px-10 py-3 text-xl text-white rounded-md shadow-lg sm:w-auto main-color roboto">
            Upload Document
          </button>
        </div>
      </div>
    </div>
  );
}
