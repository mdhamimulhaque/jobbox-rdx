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
  }),
});

export const { useJobPostMutation, useGetJobsQuery, useGetJobByIdQuery } =
  jobApi;
