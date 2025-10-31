import React, { useState } from "react";
import { LuUserCheck } from "react-icons/lu";
import { Search, ChevronDown, Lock, Unlock, X } from "lucide-react";
import { CiFilter } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FiUserX } from "react-icons/fi";
import Swal from "sweetalert2";

const users = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    initial: "J",
    status: "Active",
    joined: "2025-05-12",
    submissions: 23,
    subscription: "Premium",
    blocked: false,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    initial: "S",
    status: "Active",
    joined: "2025-06-24",
    submissions: 15,
    subscription: "Premium",
    blocked: false,
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    initial: "M",
    status: "Blocked",
    joined: "2025-04-10",
    submissions: 8,
    subscription: "Free",
    blocked: true,
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    initial: "E",
    status: "Active",
    joined: "2025-07-03",
    submissions: 32,
    subscription: "Premium",
    blocked: false,
  },
  {
    id: 5,
    name: "David Wilson",
    email: "david.wilson@example.com",
    initial: "D",
    status: "Active",
    joined: "2025-03-28",
    submissions: 5,
    subscription: "Free",
    blocked: false,
  },
];

export default function UserManagementTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [userData, setUserData] = useState(users);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalUsers = 50;
  const perPage = 5;
  const start = (currentPage - 1) * perPage + 1;
  const end = Math.min(currentPage * perPage, totalUsers);

  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleBlockToggle = (user) => {
    Swal.fire({
      title: `Are you sure you want to ${
        user.blocked ? "unblock" : "block"
      } this user?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DF951F",
      cancelButtonColor: "#d33",
      confirmButtonText: user.blocked ? "Yes, unblock!" : "Yes, block!",
    }).then((result) => {
      if (result.isConfirmed) {
        const newStatus = user.blocked ? "Active" : "Blocked";
        const newBlocked = !user.blocked;

        setUserData((prev) =>
          prev.map((u) =>
            u.id === user.id
              ? { ...u, blocked: newBlocked, status: newStatus }
              : u
          )
        );

        if (selectedUser && selectedUser.id === user.id) {
          setSelectedUser({
            ...selectedUser,
            blocked: newBlocked,
            status: newStatus,
          });
        }

        Swal.fire(
          newBlocked ? "Blocked!" : "Unblocked!",
          `User has been ${newBlocked ? "blocked" : "unblocked"}.`,
          "success"
        );
      }
    });
  };

  const filteredUsers = userData.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || user.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <>
      <div className="min-h-screen p-6 outfit">
        <div>
          <h1 className="mb-6 text-2xl font-bold text-[#1F2937]">
            User Management
          </h1>

          {/* Search & Filter */}
          <div className="flex flex-col w-3/4 gap-4 p-4 mb-6 bg-white sm:flex-row rounded-xl">
            <div className="relative flex-1">
              <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
              <input
                type="text"
                placeholder="Search by name or email"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm"
              />
            </div>

            <div className="relative flex items-center gap-4">
              <h1 className="flex items-center gap-1 text-base text-[#4B5563]">
                <CiFilter className="text-2xl" />
                Status
              </h1>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className=" bg-white border border-gray-300 rounded-lg px-4 py-2.5 pr-10 text-sm cursor-pointer "
              >
                <option>All</option>
                <option>Active</option>
                <option>Blocked</option>
              </select>

              {/* <ChevronDown className="absolute w-4 h-4 text-gray-400 transform -translate-y-1/2 pointer-events-none lg:right-3 right-24 top-1/2" /> */}
            </div>
          </div>

          {/* Table - scroll-x on lg */}
          <div className="hidden lg:block">
            <div className="overflow-x-auto bg-white border border-gray-200 shadow-sm rounded-xl inter">
              <div className="max-w-full">
                <div className="grid grid-cols-12 gap-4 px-6 py-3 text-xs font-semibold tracking-wider text-gray-600 uppercase border-b border-gray-200 bg-gray-50">
                  <div className="col-span-3">User</div>
                  <div className="col-span-1 text-center">Status</div>
                  <div className="col-span-2 text-center">Joined Date</div>
                  <div className="col-span-2 text-center">Submissions</div>
                  <div className="col-span-2 text-center">Subscription</div>
                  <div className="col-span-2 text-center">Actions</div>
                </div>

                {filteredUsers.map((user) => (
                  <div
                    key={user.id}
                    className="grid grid-cols-12 gap-4 px-6 py-4 transition-colors border-b border-gray-100 hover:bg-gray-50"
                  >
                    <div className="flex items-center col-span-3 gap-3">
                      <div className="flex items-center justify-center w-10 h-10 text-sm font-semibold text-purple-700 bg-purple-100 rounded-full">
                        {user.initial}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {user.name}
                        </p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-center col-span-1">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {user.status}
                      </span>
                    </div>

                    <div className="flex items-center justify-center col-span-2 text-sm text-gray-700">
                      {user.joined}
                    </div>

                    <div className="flex items-center justify-center col-span-2 text-sm font-medium text-gray-700">
                      {user.submissions}
                    </div>

                    <div className="flex items-center justify-center col-span-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          user.subscription === "Premium"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {user.subscription}
                      </span>
                    </div>

                    <div className="flex items-center justify-center col-span-2 gap-3">
                      <button
                        onClick={() => openModal(user)}
                        className="flex items-center justify-center p-2 text-[#DF951F]"
                      >
                        <FaEye className="w-5 h-5" />
                      </button>

                      <button
                        onClick={() => handleBlockToggle(user)}
                        className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${
                          user.blocked
                            ? "bg-[#EF4444] text-white"
                            : "bg-[#22C55E] text-white"
                        }`}
                      >
                        {user.blocked ? (
                          <>
                            <FiUserX className="w-4 h-4" /> Block
                          </>
                        ) : (
                          <>
                            <LuUserCheck className="w-4 h-4" /> Unblock
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card layout for mobile & tablet */}
          <div className="space-y-4 lg:hidden">
            {filteredUsers.map((user) => (
              <div
                key={user.id}
                className="p-4 bg-white border shadow-sm rounded-xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-12 h-12 text-lg font-semibold text-purple-700 bg-purple-100 rounded-full">
                    {user.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
                  <p>Status: {user.status}</p>
                  <p>Joined: {user.joined}</p>
                  <p>Submissions: {user.submissions}</p>
                  <p>Plan: {user.subscription}</p>
                </div>

                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => openModal(user)}
                    className="px-4 py-2 text-sm font-medium text-[#DF951F]"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => handleBlockToggle(user)}
                    className={`px-4 py-2 rounded-lg text-sm text-white font-medium ${
                      user.blocked ? "bg-red-500" : "bg-green-600"
                    }`}
                  >
                    {user.blocked ? "Unblock" : "Block"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-gray-600">
              Showing {start}-{end} of {totalUsers} users
            </p>
            <div className="flex gap-2">
              <button className="px-4 py-2 text-sm font-medium bg-gray-100 rounded-lg">
                Previous
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-lg">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 inter">
          <div className="relative w-full max-w-md bg-white shadow-xl rounded-2xl">
            <button
              onClick={closeModal}
              className="absolute text-gray-400 top-4 right-4 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-16 h-16 text-xl font-bold text-white rounded-full bg-gradient-to-br from-purple-400 to-pink-400">
                  {selectedUser.initial}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {selectedUser.name}
                  </h2>
                  <p className="text-sm text-gray-500">{selectedUser.email}</p>
                  <p className="mt-1 text-xs text-gray-400">ID: USR-4821</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mb-6">
                <h3 className="mb-2 text-sm font-semibold text-gray-700">
                  Quick Actions
                </h3>
                <button
                  onClick={() => handleBlockToggle(selectedUser)}
                  className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium ${
                    selectedUser.blocked
                      ? "bg-green-100 text-green-600"
                      : "bg-red-600 text-white"
                  }`}
                >
                  {selectedUser.blocked ? (
                    <Unlock className="w-4 h-4" />
                  ) : (
                    <Lock className="w-4 h-4" />
                  )}
                  {selectedUser.blocked ? "Unblock User" : "Block User"}
                </button>
              </div>

              {/* Overview */}
              <div>
                <h3 className="mb-3 text-sm font-semibold text-gray-700">
                  Overview
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Member Since</span>
                    <span className="font-medium text-gray-900">
                      {selectedUser.joined}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Total Submissions</span>
                    <span className="font-medium text-gray-900">
                      {selectedUser.submissions}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
