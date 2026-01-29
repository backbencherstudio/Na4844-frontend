import { baseApi } from "@/redux/api/baseApi";

export const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPayment: builder.mutation({
      query: (body) => ({
        url: "payment/stripe/subscription",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreatePaymentMutation } = paymentApi;
