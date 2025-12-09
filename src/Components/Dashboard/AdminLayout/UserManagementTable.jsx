/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Search, MoreVertical, Trash2, UserCheck, UserX } from "lucide-react";
import { CiFilter } from "react-icons/ci";
import {
  useDeleteUserMutation,
  useUpdateUserStatusMutation,
  useGetDashboardUsersQuery,
} from "../../../Redux/feature/authapi";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";

export default function UserManagementTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [openDropdown, setOpenDropdown] = useState(null);

  // Pagination States
  const [page, setPage] = useState(1); // initial page = 1

  // Backend Search + Filter + Pagination
  const { data, isLoading, refetch } = useGetDashboardUsersQuery({
    search: searchTerm,
    is_active: statusFilter,
    page: page, // use page directly
  });

  const [deleteUser] = useDeleteUserMutation();
  const [updateUserStatus] = useUpdateUserStatusMutation();

  const toggleDropdown = (id) =>
    setOpenDropdown(openDropdown === id ? null : id);

  const handleAction = async (user, action) => {
    setOpenDropdown(null);

    try {
      if (action === "delete") {
        const result = await Swal.fire({
          title: `Are you sure to delete ${user.full_name}?`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
        });

        if (result.isConfirmed) {
          await deleteUser(user.id).unwrap();
          refetch();
          Swal.fire(
            "Deleted!",
            `${user.full_name} has been deleted.`,
            "success"
          );
        }
      } else {
        const is_active = action === "active";
        await updateUserStatus({ id: user.id, is_active }).unwrap();
        refetch();
        toast.success(
          `${user.full_name} is now ${is_active ? "Active" : "Suspended"}!`
        );
      }
    } catch (error) {
      toast.error("Action failed!");
    }
  };

  if (isLoading) return <p>Loading...</p>;

  // Backend response mapping
  const users = data?.data || [];
  const totalPages = data?.total_pages || 1;

  // 🔥 Always take backend-returned current page
  const currentPage = page || 1;

  // console.log("Current Page:", currentPage);

  return (
    <div className="min-h-screen p-6">
      <Toaster position="top-right" />

      <h1 className="mb-6 text-2xl font-bold text-gray-800">User Management</h1>

      {/* Search + Filter */}
      <div className="flex flex-col w-full gap-4 p-4 mb-6 bg-white lg:w-3/4 sm:flex-row rounded-xl">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
          <input
            type="text"
            placeholder="Search by name or email"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setPage(1); // reset to page 1 on search
            }}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm"
          />
        </div>

        {/* Filter */}
        <div className="relative flex items-center gap-4">
          <h1 className="flex items-center gap-1 text-base text-gray-600">
            <CiFilter className="text-2xl" /> Status
          </h1>

          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setPage(1); // reset to page 1 on filter
            }}
            className="bg-white border border-gray-300 rounded-lg px-4 py-2.5 pr-10 text-sm cursor-pointer"
          >
            <option>All</option>
            <option>Active</option>
            <option>Suspended</option>
          </select>
        </div>
      </div>

      {/* Table for large screens */}
      <div className="hidden w-full overflow-x-auto lg:block">
        <div className="min-w-[900px] bg-white border border-gray-200 shadow-sm rounded-xl">
          <div className="grid grid-cols-12 gap-4 px-6 py-3 text-xs font-semibold tracking-wider text-gray-600 uppercase border-b border-gray-200 bg-gray-50">
            <div className="col-span-5">User</div>
            <div className="col-span-3 text-center">Status</div>
            <div className="col-span-3 text-center">Joined</div>
            <div className="col-span-1 text-center">Actions</div>
          </div>

          {users.map((user) => (
            <UserRow
              key={user.id}
              user={user}
              openDropdown={openDropdown}
              toggleDropdown={toggleDropdown}
              handleAction={handleAction}
            />
          ))}
        </div>

        {/* Pagination Desktop */}
        <Pagination
          page={currentPage}
          totalPages={totalPages}
          setPage={setPage}
        />
      </div>

      {/* Mobile Card View */}
      <div className="flex flex-col gap-4 lg:hidden">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            openDropdown={openDropdown}
            toggleDropdown={toggleDropdown}
            handleAction={handleAction}
          />
        ))}

        {/* Pagination Mobile */}
        <Pagination
          page={currentPage}
          totalPages={totalPages}
          setPage={setPage}
        />
      </div>
    </div>
  );
}

/* ---------------- ROW ---------------- */
function UserRow({ user, openDropdown, toggleDropdown, handleAction }) {
  return (
    <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-gray-100 hover:bg-gray-50">
      <div className="flex items-center col-span-5 gap-3">
        {user.profile_image ? (
          <img
            src={user.profile_image}
            className="object-cover w-10 h-10 rounded-full"
          />
        ) : (
          <div className="flex items-center justify-center w-10 h-10 text-sm font-semibold text-green-700 bg-green-100 rounded-full">
            {user.full_name?.charAt(0).toUpperCase()}
          </div>
        )}
        <div>
          <p className="text-sm font-medium text-gray-900">{user.full_name}</p>
          <p className="text-xs text-gray-500">{user.email}</p>
        </div>
      </div>

      <div className="flex items-center justify-center col-span-3">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            user.is_active
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {user.is_active ? "Active" : "Suspended"}
        </span>
      </div>

      <div className="flex items-center justify-center col-span-3 text-sm text-gray-700">
        {user.created_at?.split("T")[0]}
      </div>

      <div className="relative flex items-center justify-center col-span-1">
        <button
          onClick={() => toggleDropdown(user.id)}
          className="p-2 text-gray-600 rounded-lg hover:bg-gray-100"
        >
          <MoreVertical className="w-5 h-5" />
        </button>

        {openDropdown === user.id && (
          <DropdownActions user={user} handleAction={handleAction} />
        )}
      </div>
    </div>
  );
}

/* ---------------- MOBILE CARD ---------------- */
function UserCard({ user, openDropdown, toggleDropdown, handleAction }) {
  return (
    <div className="p-4 bg-white border border-gray-200 shadow-sm rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {user.profile_image ? (
            <img
              src={user.profile_image}
              className="object-cover w-12 h-12 rounded-full"
            />
          ) : (
            <div className="flex items-center justify-center w-12 h-12 text-sm font-semibold text-green-700 bg-green-100 rounded-full">
              {user.full_name?.charAt(0).toUpperCase()}
            </div>
          )}

          <div>
            <p className="font-medium text-gray-900">{user.full_name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>

        <span
          className={`w-3 h-3 rounded-full ${
            user.is_active ? "bg-green-500" : "bg-red-500"
          }`}
        ></span>
      </div>

      <div className="flex items-center justify-between mt-3 text-sm text-gray-700">
        <span>Joined: {user.created_at?.split("T")[0]}</span>

        <div className="relative">
          <button
            onClick={() => toggleDropdown(user.id)}
            className="p-2 text-gray-600 rounded-lg hover:bg-gray-100"
          >
            <MoreVertical className="w-5 h-5" />
          </button>

          {openDropdown === user.id && (
            <DropdownActions user={user} handleAction={handleAction} mobile />
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------------- DROPDOWN ---------------- */
function DropdownActions({ user, handleAction, mobile = false }) {
  return (
    <div
      className={`absolute right-0 z-10 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg ${
        mobile ? "w-40" : "w-48 top-[50%]"
      }`}
    >
      <button
        onClick={() => handleAction(user, "active")}
        className="flex items-center w-full gap-3 px-4 py-2.5 text-sm hover:bg-gray-50"
      >
        <UserCheck className="w-4 h-4 text-green-600" /> Set Active
      </button>

      <button
        onClick={() => handleAction(user, "suspend")}
        className="flex items-center w-full gap-3 px-4 py-2.5 text-sm hover:bg-gray-50"
      >
        <UserX className="w-4 h-4 text-orange-600" /> Suspend
      </button>

      <button
        onClick={() => handleAction(user, "delete")}
        className="flex items-center w-full gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 border-t border-gray-100"
      >
        <Trash2 className="w-4 h-4" /> Delete
      </button>
    </div>
  );
}

/* ---------------- PAGINATION ---------------- */
function Pagination({ page, totalPages, setPage }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className={`px-4 py-2 rounded-lg border transition ${
          page === 1
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-white hover:bg-gray-100 text-gray-700"
        }`}
      >
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, i) => {
        const pageNum = i + 1;
        return (
          <button
            key={i}
            onClick={() => setPage(pageNum)}
            className={`px-4 py-2 rounded-lg border text-sm transition ${
              pageNum === page
                ? "bg-green-700 text-white border-green-600"
                : "bg-white hover:bg-gray-100 text-gray-700"
            }`}
          >
            {pageNum}
          </button>
        );
      })}

      <button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
        className={`px-4 py-2 rounded-lg border transition ${
          page === totalPages
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-white hover:bg-gray-100 text-gray-700"
        }`}
      >
        Next
      </button>
    </div>
  );
}
