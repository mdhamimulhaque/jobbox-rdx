import apiSlice from "./../api/apiSlice";

export const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    jobPost: builder.mutation({
      query: (data) => ({
        url: "/job",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["jobs"],
    }),
    apply: builder.mutation({
      query: (data) => ({
        url: "/apply",
        method: "PATCH",
        body: data,
      }),
    }),

    getJobs: builder.query({
      query: () => ({
        url: "/jobs",
      }),
      providesTags: ["jobs"],
    }),

    getJobById: builder.query({
      query: (id) => ({
        url: `/job/${id}`,
      }),
    }),
    getAppliedJobs: builder.query({
      query: (email) => ({
        url: `/applied-jobs/${email}`,
      }),
    }),
  }),
});

export const {
  useJobPostMutation,
  useGetJobsQuery,
  useGetJobByIdQuery,
  useApplyMutation,
  useGetAppliedJobsQuery,
} = jobApi;
