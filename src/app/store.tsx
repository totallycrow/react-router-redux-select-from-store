import { configureStore } from "@reduxjs/toolkit";
import itemSelectionReducer from "../features/itemSelection/itemSelectionSlice";

export const store = configureStore({
  reducer: {
    itemSelection: itemSelectionReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
