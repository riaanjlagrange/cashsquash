import { createSlice } from "@reduxjs/toolkit"
import { loadLoanRequests } from "./loadLoanRequests"
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

enum paymentPlan {
	FULLDIRECT = "fullDirect",
	HALFSPLIT = "halfSplit",
	QUARTERSPLIT = "quarterSplit",
}

enum paymentStatus {
	FULFILLED = "fulfilled",
	UNFULFILLED = "unfulfilled",
}

export enum requestStatusEnum {
	ACCEPTED = "accepted",
	PENDING = "pending",
	DENIED = "denied",
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
	requestStatus: requestStatusEnum,
}

interface initialState {
	loanRequests: loanRequest[],
	deniedLoanRequests: loanRequest[],
	acceptedLoanRequests: loanRequest[],
	selectedLoanRequest: null | loanRequest;
	isLoading: boolean,
	hasError: boolean,
}

const initialState: initialState = {
	loanRequests: [],
	deniedLoanRequests: [],
	acceptedLoanRequests: [],
	selectedLoanRequest: null,
	isLoading: true,
	hasError: false,
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
				selectedLoanRequest.requestStatus = requestStatusEnum.DENIED;
				state.selectedLoanRequest = selectedLoanRequest;
				state.deniedLoanRequests.push(selectedLoanRequest);
			}
		},
		moveRequestedLoanByIdToAccepted: (state, action: PayloadAction<{ id: string }>) => {
			const selectedLoanRequest = state.loanRequests.find((request) => request.id === action.payload.id);
			if (selectedLoanRequest) {
				selectedLoanRequest.requestStatus = requestStatusEnum.ACCEPTED;
				state.selectedLoanRequest = selectedLoanRequest;
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
