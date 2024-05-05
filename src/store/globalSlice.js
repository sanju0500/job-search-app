import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  filters: {
    role: "",
    minExp: "",
    jobType: "",
    minBasePay: "",
    company: "",
    location: "",
  },
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setLoader: (state, { payload }) => {
      state.loading = payload;
    },
    setFilters: (state, { payload }) => {
      const filters = state.filters;
      filters[payload.field] = payload.value;
    },
  },
});

export const { setLoader, setFilters } = globalSlice.actions;

export default globalSlice.reducer;
