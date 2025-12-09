import { apiSlice } from "../api/apiSlice";

export const authapi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    superAdminLogin: builder.mutation({
      query: (data) => ({
        url: "accounts/login/",
        method: "POST",
        body: data,
      }),
    }),
    getStats: builder.query({
      query: () => "/d-admin-dashboard/dashboard/stats/",
    }),

    getActiveUsersGraph: builder.query({
      query: (year) => `/admin-dashboard/active-users-graph/?filter=${year}`,
    }),

    getDashboardUsers: builder.query({
      query: ({ search = "", is_active = "All", page = 1 }) => {
        const params = new URLSearchParams();

        if (search.trim()) {
          params.append("search", search.trim());
        }

        if (is_active !== "All") {
          params.append("is_active", is_active === "Active" ? "true" : "false");
        }

        params.append("page", page); // add pagination

        return `/d-admin-dashboard/user/list/?${params.toString()}`;
      },
      providesTags: ["Users"],
    }),

    // UPDATE USER ACTIVE
    updateUserStatus: builder.mutation({
      query: ({ id, is_active }) => ({
        url: `/d-admin-dashboard/user/update-and-delete/${id}/`,
        method: "PATCH",
        body: { is_active },
      }),
      invalidatesTags: ["Users"], // refresh user list automatically
    }),

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `d-admin-dashboard/user/update-and-delete/${id}/`,
        method: "DELETE",
      }),
    }),
    // terms and privacy
    getTerms: builder.query({
      query: () => "/d-admin-terms/terms/",
    }),
    getPrivacy: builder.query({
      query: () => "/d-admin-terms/privacy/",
    }),
    updateTerms: builder.mutation({
      query: ({ type, content, id }) => ({
        url: `/d-admin-terms/d-admin-terms/${id}`,
        method: "PATCH",
        body: { type, content },
      }),
    }),

    updatePassword: builder.mutation({
      query: ({ current_password, new_password, confirm_password }) => ({
        url: "/accounts/profile/password-update/",
        method: "PUT",
        body: { current_password, new_password, confirm_password },
      }),
    }),
    updateProfile: builder.mutation({
      query: ({ first_name, last_name }) => ({
        url: "/accounts/profile/update/",
        method: "PUT",
        body: { first_name, last_name },
      }),
      invalidatesTags: ["Profile"],
    }),
    // GET Profile
    getProfile: builder.query({
      query: () => "/accounts/profile/",
      providesTags: ["Profile"],
    }),
    // getSingleUser: builder.query({
    //   query: (id) => `/api/v1/view-user/${id}/`,
    // }),
    // quotes
    // createCategory: builder.mutation({
    //   query: (body) => ({
    //     url: "api/v1/create-category/",
    //     method: "POST",
    //     body,
    //   }),
    // }),
  }),
});

export const {
  useSuperAdminLoginMutation,
  useGetActiveUsersGraphQuery,
  useGetStatsQuery,
  useUpdateUserStatusMutation,
  useUpdateProfileMutation,
  useDeleteUserMutation,
  useGetTermsQuery,
  useUpdateTermsMutation,
  useUpdatePasswordMutation,
  useGetProfileQuery,
  useGetPrivacyQuery,
  useGetDashboardUsersQuery,
} = authapi;
