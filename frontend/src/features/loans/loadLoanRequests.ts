import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadLoanRequests = createAsyncThunk('loanRequests/loadLoanRequests', async () => {
	try {
		const response = await fetch("http://localhost:3000/loanRequests");
		if (response.ok) {
			const data = await response.json();
			return data;
		}
	} catch (err) {
		console.log(err);
	}
})
