import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface AuthState {
  token: string | null;
  role: "USER" | "ADMIN" | null;
  isTrial: boolean;
  trialStartDate?: string;
  subscription?: any;
}

interface SetCredentialsPayload {
  token?: string | null;
  role?: "USER" | "ADMIN" | null;
  isTrial?: boolean;
  trialStartDate?: string;
  subscription?: any;
}

const initialState: AuthState = {
  token: Cookies.get("token") || null, // ✅ safe
  role: (Cookies.get("role") as "USER" | "ADMIN") || null,
  isTrial: Cookies.get("isTrial") === "true" || false,
  trialStartDate: Cookies.get("trialStartDate") || undefined,
  subscription: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<SetCredentialsPayload>) => {
      const { token, role, isTrial, trialStartDate, isSubscribed } = action.payload;

      if (token !== undefined) {
        state.token = token;
        token ? Cookies.set("token", token) : Cookies.remove("token");
      }

      if (role !== undefined) {
        state.role = role;
        role ? Cookies.set("role", role) : Cookies.remove("role");
      }

      if (isTrial !== undefined) {
        state.isTrial = isTrial;
        Cookies.set("isTrial", isTrial.toString());
      }

      if (trialStartDate !== undefined) {
        state.trialStartDate = trialStartDate;
        Cookies.set("trialStartDate", trialStartDate);
      }

        if (isSubscribed !== undefined) {
        state.isSubscribed = isSubscribed;
        Cookies.set("isTrial", isSubscribed.toString());
      }
    },

    logOut: (state) => {
      state.token = null;
      state.role = null;
      state.isTrial = false;
      state.trialStartDate = undefined;
      state.subscription = undefined;

      Cookies.remove("token");
      Cookies.remove("role");
      Cookies.remove("isTrial");
      Cookies.remove("trialStartDate");
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;



// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import Cookies from "js-cookie";

// interface AuthState {
//   token: string | null;
//   role: string | null;
//   isTrial: boolean;
//    trialStartDate?: string;
//    subscription?: any;
    
// }

// interface SetCredentialsPayload {
//   token?: string | null;
//   role?: string | null;
//   isTrial?: boolean;
// }

// const initialState: AuthState = {
//   token: Cookies.get("token") ?? null,
//   role: Cookies.get("role") ?? null,
//   isTrial: Cookies.get(isTrial),
  
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setCredentials: (state, action: PayloadAction<SetCredentialsPayload>) => {
//       const { token, role, isTrial } = action.payload;

//       if (token !== undefined) {
//         state.token = token;
//         token
//           ? Cookies.set("token", token)
//           : Cookies.remove("token");
//       }
//        if (isTrial !== undefined) {
//         state.isTrial = isTrial;
//         isTrial
//           ? Cookies.set("isTrial", isTrial)
//           : Cookies.remove("isTrial");
//       }

//       if (role !== undefined) {
//         state.role = role;
//         role
//           ? Cookies.set("role", role)
//           : Cookies.remove("role");
//       }
//     },

//     logOut: (state) => {
//       state.token = null;
//       state.role = null;
//       // state.isTrial = false;
//       Cookies.remove("token");
//       Cookies.remove("role");
//     },
//   },
// });

// export const { setCredentials, logOut } = authSlice.actions;
// export default authSlice.reducer;


// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import Cookies from "js-cookie";

// export interface User {
//   id: string;
//   email: string;
// }

// export interface Subscription {
//   status: "active" | "expired" | "none";
//   endsAt?: string;
// }

// interface AuthState {
//   user: User | null;
//   token: string | null;
//   role: string | null;
//   subscription: Subscription | null;
// }

// interface SetCredentialsPayload {
//   token?: string | null;
//   role?: string | null;
//   user?: User | null;
//   subscription?: Subscription | null;
// }

// const initialState: AuthState = {
//   user: null,
//   token: Cookies.get("token") ?? null,
//   role: Cookies.get("role") ?? null,
//   subscription: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setCredentials: (
//       state,
//       action: PayloadAction<SetCredentialsPayload>
//     ) => {
//       const { token, role, user, subscription } = action.payload;

//       if (token !== undefined) {
//         state.token = token;
//         token
//           ? Cookies.set("token", token, {
//               secure: process.env.NODE_ENV === "production",
//               sameSite: "Lax",
//             })
//           : Cookies.remove("token");
//       }

//       if (role !== undefined) {
//         state.role = role;
//         role
//           ? Cookies.set("role", role, {
//               secure: process.env.NODE_ENV === "production",
//               sameSite: "Lax",
//             })
//           : Cookies.remove("role");
//       }

//       if (user !== undefined) {
//         state.user = user;
//       }

//       if (subscription !== undefined) {
//         state.subscription = subscription;
//       }
//     },

//     logOut: (state) => {
//       state.user = null;
//       state.token = null;
//       state.role = null;
//       state.subscription = null;
//       Cookies.remove("token");
//       Cookies.remove("role");
//     },
//   },
// });

// export const { setCredentials, logOut } = authSlice.actions;
// export default authSlice.reducer;



