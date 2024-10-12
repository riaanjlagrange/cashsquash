import { createSlice } from "@reduxjs/toolkit"
import { loadLoanRequests } from "./loadLoanRequests"
import { PayloadAction } from "@reduxjs/toolkit";
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
	deniedLoanRequests: loanRequest[],
	acceptedLoanRequests: loanRequest[],
	isLoading: boolean,
	hasError: boolean,
	selectedLoanRequest: null | loanRequest;
}

const initialState: initialState = {
	loanRequests: [],
	deniedLoanRequests: [],
	acceptedLoanRequests: [],
	isLoading: true,
	hasError: false,
	selectedLoanRequest: null,
}

const loanRequestSlice = createSlice({
	name: "loanRequests",
	initialState,
	reducers: {
		getRequestedLoanById: (state, action: PayloadAction<{ id: string }>) => {
			const selectedLoanRequest = state.loanRequests.find((request) => request.id === action.payload.id);
			if (selectedLoanRequest) {
				state.selectedLoanRequest = selectedLoanRequest;

			}
		},
		removeRequestedLoanById: (state, action: PayloadAction<{ id: string }>) => {
			const newLoanRequests = state.loanRequests.filter((request) => request.id !== action.payload.id);
			state.loanRequests = newLoanRequests;
		},
		moveRequestedLoanByIdToDenied: (state, action: PayloadAction<{ id: string }>) => {
			const selectedLoanRequest = state.loanRequests.find((request) => request.id === action.payload.id);
			if (selectedLoanRequest) {
				state.deniedLoanRequests.push(selectedLoanRequest);
			}
		},
		moveRequestedLoanByIdToAccepted: (state, action: PayloadAction<{ id: string }>) => {
			const selectedLoanRequest = state.loanRequests.find((request) => request.id === action.payload.id);
			if (selectedLoanRequest) {
				state.acceptedLoanRequests.push(selectedLoanRequest);
			}
		}

	},
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
export const { getRequestedLoanById, removeRequestedLoanById, moveRequestedLoanByIdToDenied, moveRequestedLoanByIdToAccepted } = loanRequestSlice.actions;
export const getSelectedLoanRequest = (state: RootState) => state.loanRequests.selectedLoanRequest;
export const selectLoanRequests = (state: RootState) => state.loanRequests;
