import { baseApi } from "@/redux/api/baseApi";
import { setCredentials } from "./authSlice";

interface LoginResponse {
  success: boolean;
  message: string;
  type: string;
  authorization: {
    type: string;
    access_token: string;
    refresh_token: string;
  };
}

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // 🔐 LOGIN
    login: builder.mutation<LoginResponse, Record<string, any>>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;

          dispatch(
            setCredentials({
              token: data.authorization.access_token,
              role: data.type,
              user: null, // backend does not return user
            })
          );
        } catch (error) {
          console.error("Login error:", error);
        }
      },
    }),

    // 📝 SIGNUP
    signup: builder.mutation({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),

    // 🔓 LOGOUT
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useLogoutMutation,
} = authApi;
