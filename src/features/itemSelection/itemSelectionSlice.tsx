import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface itemState {
  items: Array<string>;
}

const initialState: itemState = {
  items: ["A", "B", "C"],
};

export const itemSelectionSlice = createSlice({
  name: "itemSelection",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.items.push("TEST");
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = itemSelectionSlice.actions;

export default itemSelectionSlice.reducer;
