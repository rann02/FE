import { createSlice, AnyAction, PayloadAction } from "@reduxjs/toolkit";
import { getIronman, getRandom, DataIF } from "./action";

interface GiphyStateIF {
  isLoading: boolean;
  isSuccess: boolean;
  isError: string;
  data?: DataIF["data"] | null;
}

const giphySlice = createSlice({
  name: "giphy",
  initialState: {
    isLoading: false,
    isSuccess: false,
    isError: "",
    data: null,
  } as GiphyStateIF,
  reducers: {
    reset(state) {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = "";
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getIronman.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = "";
      state.data = null;
    });
    builder.addCase(
      getIronman.fulfilled,
      (state, action: PayloadAction<DataIF["data"]>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = "";
        state.data = action.payload;
      }
    );
    builder.addCase(getIronman.rejected, (state, action: AnyAction) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError =
        action.payload.response?.data?.message || "getIronman Error";
    });
    builder.addCase(getRandom.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = "";
      state.data = null;
    });
    builder.addCase(getRandom.fulfilled, (state, action: AnyAction) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = "";
      state.data = action.payload;
    });
    builder.addCase(getRandom.rejected, (state, action: AnyAction) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError =
        action.payload.response?.data?.message || "getRandom Error";
    });
  },
});

export const { reset } = giphySlice.actions;
export default giphySlice.reducer;
