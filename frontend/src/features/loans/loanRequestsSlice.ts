import { createSlice } from "@reduxjs/toolkit"
import { loadLoanRequests } from "./loadLoanRequests"
import { RootState } from "../../app/store";

enum paymentPlan {
	"fullDirect",
	"halfSlit",
	"quarterSplit",
}

enum paymentStatus {
	"fulfilled",
	"unfulfilled",
}
export interface loanRequest {
	id: string,
	toUserId: string,
	fromUserId: string,
	requestMessage: string,
	amount: string,
	dateCreated: string,
	dueDate: string,
	paymentPlan: paymentPlan,
	paymentStatus: paymentStatus,
}

interface initialState {
	loanRequests: loanRequest[],
	isLoading: boolean,
	hasError: boolean,
}

const initialState: initialState = {
	loanRequests: [],
	isLoading: true,
	hasError: false,
}

const loanRequestSlice = createSlice({
	name: "loanRequests",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(loadLoanRequests.pending, (state) => {
				state.isLoading = true;
				state.hasError = false;
			})

			.addCase(loadLoanRequests.fulfilled, (state, action) => {
				state.loanRequests = [
					...action.payload,
				]
				state.hasError = false;
				state.isLoading = false;
			})

			.addCase(loadLoanRequests.rejected, (state) => {
				state.isLoading = false;
				state.hasError = true;
			});
	},
})

export default loanRequestSlice.reducer;
export const selectLoanRequests = (state: RootState) => state.loanRequests;
