import { configureStore } from "@reduxjs/toolkit";
import loanRequestsSlice from "../features/loans/loanRequestsSlice";

export const store = configureStore({
	reducer: {
		loanRequests: loanRequestsSlice,
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
