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
  originalData: [],
  filteredData: [],
  totalCount: null,
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
    setOriginalData: (state, { payload }) => {
      state.originalData = [...payload];
    },
    setFilteredData: (state, { payload }) => {
      state.filteredData = [...payload];
    },
    setTotalCount: (state, { payload }) => {
      state.totalCount = payload;
    },
  },
});

export const {
  setLoader,
  setFilters,
  setOriginalData,
  setFilteredData,
  setTotalCount,
} = globalSlice.actions;

export default globalSlice.reducer;
