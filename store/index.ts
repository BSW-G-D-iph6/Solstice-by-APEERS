// // Other imports stays as before...
// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { authReducer } from "./authslice";

// // configure which keuy we want to persist
// const authPersistConfig = {
//     key: "auth",
//     storage: storage,
//     whitelist: ["authState"],
// };

// const rootReducer = combineReducers({
//     auth: persistReducer(authPersistConfig, authReducer),
// });

// export const store = configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({ serializableCheck: false }),
// });


// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
// import { persistReducer } from "redux-persist";
// import { authReducer } from "./authslice";
// import createWebStorage from "redux-persist/lib/storage/createWebStorage";

// const createNoopStorage = () => {
//     return {
//         getItem() {
//             return Promise.resolve(null);
//         },
//         setItem(_key: string, value: number) {
//             return Promise.resolve(value);
//         },
//         removeItem() {
//             return Promise.resolve();
//         },
//     };
// };

// const storage =
//     typeof window !== "undefined"
//         ? createWebStorage("local")
//         : createNoopStorage();

// const authPersistConfig = {
//     key: "auth",
//     storage: storage,
//     whitelist: ["authState"],
// };

// const persistedReducer = persistReducer(authPersistConfig, authReducer);

// const rootReducer = combineReducers({
//     auth: persistedReducer,
// });

// export const store = configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({ serializableCheck: false }),
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { persistReducer } from "redux-persist";
import { authReducer } from "@/store/authslice";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
    return {
        getItem() {
            return Promise.resolve(null);
        },
        setItem(_key: string, value: number) {
            return Promise.resolve(value);
        },
        removeItem() {
            return Promise.resolve();
        },
    };
};

const storage =
    typeof window !== "undefined"
        ? createWebStorage("local")
        : createNoopStorage();

const authPersistConfig = {
    key: "auth",
    storage: storage,
    whitelist: ["authState"],
};

const persistedReducer = persistReducer(authPersistConfig, authReducer);

const rootReducer = combineReducers({
    auth: persistedReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;