import { FiTrash2, FiPlus } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";
import UploadDocumentModal from "./UploadDocumentModal";
import { Link } from "react-router-dom";

const apps = Array.from({ length: 7 }).map((_, i) => ({
  id: 214796,
  date: "21-Dec-2025 10:20",
  title:
    "NDRIP/Atpara/25-26/RD-21 Improvement of Road by RCC from Atpara HQ Kalimandir to Chatal Depot-Busweb Road at Ch-00+1480m Under Atpara Upazila, District: Netrokona (Road ID No-372045056) (Salvage cost: Tk. 5,21,884.00)",
  ministry: "Ministry of Local Government, Rural Development and Co-operatives",
  agency: "Local Government Engineering Department (LGED)",
  procurement: "Work",
  plan: "Development",
}));

export default function AppManagement() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="min-h-screen p-4 md:p-6 bg-[#F5F5F5]">
      {/* Header */}
      <div className="flex flex-col items-start justify-between mb-4 md:flex-row md:items-center">
        <h1 className="mb-4 md:mb-0 text-2xl font-bold text-[#1F2021]">
          App Management
        </h1>
        <button
          onClick={() => setOpenModal(true)}
          className="flex items-center gap-2 px-4 py-2 text-base shadow-xl text-white rounded-md main-color hover:bg-[#72C02C] font-medium"
        >
          <FiPlus className="text-xl" />
          Upload Document
        </button>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col w-full gap-3 mb-6 md:flex-row">
        <div className="flex justify-between w-full gap-3 px-3 py-2 bg-white shadow-xl md:w-3/4 rounded-xl">
          <input
            type="text"
            placeholder="Search by name or email"
            className="flex-1 px-3 py-2 text-base border rounded-md outline-none border-[#ACACAC] placeholder:text-[#ACACAC] font-medium"
          />
          <select className="px-3 py-2 text-base text-[#000000] border rounded-md roboto">
            <option>App id</option>
            <option>Title</option>
          </select>
        </div>
      </div>

      {/* Table for desktop */}
      {/* Table for desktop */}
      <div className="hidden overflow-x-auto bg-white shadow-sm md:block rounded-xl">
        <div className="min-w-[1200px]">
          {" "}
          {/* ensure table width for scrollbar */}
          <div className="grid grid-cols-9 px-4 py-4 text-base font-semibold text-[#000000] bg-[#71d87849] inter">
            <div>Publishing Date</div>
            <div>APP ID</div>
            <div className="col-span-2">Title</div>
            <div>Ministry</div>
            <div>Agency</div>
            <div>Procurement Type</div>
            <div>Plan Type</div>
            <div className="text-center">Action</div>
          </div>
          {apps.map((app, index) => (
            <div
              key={index}
              className="grid grid-cols-9 px-4 py-4 text-sm text-[#000000] border-t border-t-[#D4D4D4] inter"
            >
              <div>{app.date}</div>
              <div className="text-base font-semibold">{app.id}</div>
              <div className="col-span-2 leading-relaxed">{app.title}</div>
              <div className="leading-relaxed">{app.ministry}</div>
              <div className="leading-relaxed">{app.agency}</div>
              <div>{app.procurement}</div>
              <div>{app.plan}</div>

              <div className="flex justify-center gap-2">
                <Link to="/tender-details">
                  {" "}
                  <button className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-md hover:bg-gray-200">
                    <FaRegEdit size={14} />
                  </button>
                </Link>

                <button className="flex items-center justify-center w-8 h-8 text-red-600 bg-red-100 rounded-md hover:bg-red-200">
                  <FiTrash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cards for mobile */}
      <div className="flex flex-col gap-4 md:hidden">
        {apps.map((app, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 p-4 bg-white shadow-sm rounded-xl"
          >
            <div className="flex justify-between text-sm text-[#555]">
              <span>{app.date}</span>
              <span className="font-semibold">{app.id}</span>
            </div>
            <div className="text-sm font-medium leading-relaxed">
              {app.title}
            </div>
            <div className="text-sm text-[#555]">
              <p>
                <span className="font-semibold">Ministry: </span>
                {app.ministry}
              </p>
              <p>
                <span className="font-semibold">Agency: </span>
                {app.agency}
              </p>
              <p>
                <span className="font-semibold">Procurement: </span>
                {app.procurement}
              </p>
              <p>
                <span className="font-semibold">Plan: </span>
                {app.plan}
              </p>
            </div>
            <div className="flex justify-end gap-2 mt-2">
              <Link to="/tender-details">
                {" "}
                <button className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-md hover:bg-gray-200">
                  <FaRegEdit size={14} />
                </button>{" "}
              </Link>
              <button className="flex items-center justify-center w-8 h-8 text-red-600 bg-red-100 rounded-md hover:bg-red-200">
                <FiTrash2 size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Modal */}
      {openModal && <UploadDocumentModal onClose={() => setOpenModal(false)} />}
    </div>
  );
}
