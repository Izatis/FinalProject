import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const category = createApi({
  reducerPath: "category",
  tagTypes: ["Categories"],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
  endpoints: (build) => ({
    gettingACategory: build.query({
      query: (parsedToken) => ({
        url: `/category`,
        method: "GET",
        headers: { Authorization: `Bearer ${parsedToken}` },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }: { id: any }) => ({ type: "Categories", id })),
              { type: "Categories", id: "LIST" },
            ]
          : [{ type: "Categories", id: "LIST" }],
    }),
    addProduct: build.mutation({
      query: (body) => ({
        url: "goods",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Categories", id: "LIST" }],
    }),
    deleteProduct: build.mutation({
      query: (id) => ({
        url: `goods/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Categories", id: "LIST" }],
    }),
  }),
});

export const {
  useGettingACategoryQuery,
  useAddProductMutation,
  useDeleteProductMutation,
} = category;