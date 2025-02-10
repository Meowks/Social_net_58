import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../Utils/baseUrl";


export interface IPost {
  main_text: string,
  user_id: number,
  id: number,
  reg_date: string,
  user_fk: {
    user_city: string;
    phone_number: number;
    reg_date: number,
    email: string;
    id: number
    name: string;
    password: string;
  },
  photos: string[],
  comments: string[],
}

interface IGetAllPostsResponse {
  status: number,
  message: IPost[]
}

interface IGetPostByIdResponse {
  status: number,
  message: IPost,
}

interface IAddNewPostPayload {
  user_id: number,
  main_text: string,
}

interface IAddNewPostResponse {
  status: number,
  post_id: number,
}

interface IEditPostPayload {
  post_id: number,
  new_text: string,
}

interface IEditPostResponse {
  status: number,
  message: string,
}

interface IDeletePostResponse extends IEditPostResponse{}



export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<IGetAllPostsResponse, null>({
      query: () => "/post",
    }),
    getPostById: builder.query<IGetPostByIdResponse, string>({
      query: (postId) => `/post?post_id=${postId}`
    }),
    addNewPost: builder.mutation<IAddNewPostResponse, IAddNewPostPayload>({
      query: (payload) => ({
        url: "/post",
        method: "POST",
        body: payload,
      }),
    }),
    deletePost:builder.mutation<IDeletePostResponse,number>({
      query:(id) => ({
        url:`/post?post_id=${id}`,
        method:"DELETE",
      }),
    }),
    editPost:builder.mutation<IEditPostResponse,IEditPostPayload>({
      query:(payload) => ({
        url:"/post",
        method:"PUT",
        body:payload
      }),
    })
  })
})

export const { 
  useGetAllPostsQuery, 
  useLazyGetAllPostsQuery, 
  useLazyGetPostByIdQuery,
  useAddNewPostMutation,
  useEditPostMutation,
  useDeletePostMutation, 
} = postApi;