// import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// export interface IAuthState {
//     authState: boolean;
// }

// const initialState: IAuthState = {
//     authState: false,
// };

// export const authSlice = createSlice({
//     name: "auth",
//     initialState,
//     reducers: {
//         setAuthState: (state, action: PayloadAction<boolean>) => {
//             state.authState = action.payload;
//         },
//     },
// });

// export const { setAuthState } = authSlice.actions;
// export const authReducer = authSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IProductinfo {
    id: string | undefined
}

export interface IAuthState {
    authState: IProductinfo[];
}

const initialState: IAuthState = {
    authState: [],
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthState: (state, action: PayloadAction<IProductinfo>) => {
            state.authState.push(action.payload);
        },
        addtobasket: (state, action: PayloadAction<IProductinfo>) => {
            state.authState.push(action.payload);
        },
        removefrombasket: (state, action: PayloadAction<IProductinfo>) => {

            const final = state.authState.filter(item => item.id != action.payload?.id)
            for (let index = 0; index < state.authState.length; index++) {
                state.authState.pop();
            }

            for (let b = 0; b < final.length; b++) {
                state.authState.push(final[b])

            }
            // state.authState.pop()

        },
        removelast: (state) => {
            state.authState.pop();
        },
    },
});

export const { setAuthState, addtobasket, removefrombasket, removelast } = authSlice.actions;
export const authReducer = authSlice.reducer;
