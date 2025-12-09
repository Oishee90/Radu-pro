// src/components/settings/GeneralTab.jsx
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import {
  useGetProfileQuery,
  useUpdatePasswordMutation,
  useUpdateProfileMutation,
} from "../../../../Redux/feature/authapi";

const GeneralTab = () => {
  // Password state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [updatePassword, { isLoading: isPasswordLoading }] =
    useUpdatePasswordMutation();

  // Profile state
  const { data: profileData, refetch } = useGetProfileQuery(); // RTK query GET current profile
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [updateProfile, { isLoading: isProfileLoading }] =
    useUpdateProfileMutation();

  // Set profile state when API data loads
  useEffect(() => {
    if (profileData) {
      setFirstName(profileData.first_name || "");
      setLastName(profileData.last_name || "");
    }
  }, [profileData]);

  // Handle password update
  const handlePasswordUpdate = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      Swal.fire({
        icon: "warning",
        title: "All fields are required!",
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "New password and confirm password do not match!",
      });
      return;
    }

    try {
      await updatePassword({
        current_password: currentPassword,
        new_password: newPassword,
        confirm_password: confirmPassword,
      }).unwrap();

      Swal.fire({
        icon: "success",
        title: "Password updated successfully!",
        confirmButtonColor: "#009038",
      });

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      if (error?.status === 400 && error?.data) {
        const messages = Object.values(error.data).flat().join("<br/>");
        Swal.fire({
          icon: "error",
          title: "Failed to update password",
          html: messages,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed to update password",
          text: "Please try again.",
        });
      }
    }
  };

  // Handle profile update
  const handleProfileUpdate = async () => {
    if (!firstName || !lastName) {
      Swal.fire({
        icon: "warning",
        title: "First name and Last name are required!",
      });
      return;
    }

    try {
      await updateProfile({
        first_name: firstName,
        last_name: lastName,
      }).unwrap();
      refetch();
      Swal.fire({
        icon: "success",
        title: "Profile updated successfully!",
        confirmButtonColor: "#009038",
      });
    } catch (error) {
      if (error?.status === 400 && error?.data) {
        const messages = Object.values(error.data).flat().join("<br/>");
        Swal.fire({
          icon: "error",
          title: "Failed to update profile",
          html: messages,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed to update profile",
          text: "Please try again.",
        });
      }
    }
  };

  return (
    <>
      {/* Profile Update */}
      <div className="p-6 mb-6 inter border border-[#B0B0B04D] rounded-xl w-full md:w-2/3">
        <h2 className="mb-5 text-lg font-bold text-[#767676]">
          Account Settings
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="block mb-1 text-sm text-[#B0B0B0] unbounded">
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#72C02C] focus:border-[#72C02C] transition"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-[#B0B0B0] unbounded">
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#72C02C] focus:border-[#72C02C] transition"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-[#B0B0B0] unbounded">
              Email Address
            </label>
            <input
              type="email"
              value={profileData?.email || ""}
              readOnly
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#72C02C] focus:border-[#72C02C] transition"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-[#B0B0B0] unbounded">
              Role
            </label>
            <input
              type="text"
              value={profileData?.role || ""}
              readOnly
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#72C02C] focus:border-[#72C02C] transition"
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={handleProfileUpdate}
            disabled={isProfileLoading}
            className="px-5 py-2.5 main-color hover:bg-[#5fa125] text-white font-medium rounded-lg transition"
          >
            {isProfileLoading ? "Updating..." : "Save Changes"}
          </button>
        </div>
      </div>

      {/* Password Update */}
      <div className="p-6 mb-6 inter border border-[#B0B0B04D] rounded-xl w-full md:w-2/3">
        <h2 className="mb-5 text-lg font-bold text-[#767676]">Password</h2>

        <div className="mb-4">
          <label className="block mb-1 text-sm text-[#B0B0B0] unbounded">
            Current Password
          </label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#72C02C] focus:border-[#72C02C] transition"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="block mb-1 text-sm text-[#B0B0B0] unbounded">
              New Password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#72C02C] focus:border-[#72C02C] transition"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-[#B0B0B0] unbounded">
              Confirm New Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#72C02C] focus:border-[#72C02C] transition"
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={handlePasswordUpdate}
            disabled={isPasswordLoading}
            className="px-5 py-2.5 main-color hover:bg-[#5fa125] text-white font-medium rounded-lg transition"
          >
            {isPasswordLoading ? "Updating..." : "Update Password"}
          </button>
        </div>
      </div>
    </>
  );
};

export default GeneralTab;
