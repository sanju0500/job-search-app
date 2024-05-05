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
  limit: 10,
  offset: 0,
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
    setLimit: (state, { payload }) => {
      state.limit = payload;
    },
    setOffset: (state, { payload }) => {
      state.offset = payload;
    },
  },
});

export const {
  setLoader,
  setFilters,
  setOriginalData,
  setFilteredData,
  setTotalCount,
  setLimit,
  setOffset,
} = globalSlice.actions;

export default globalSlice.reducer;
