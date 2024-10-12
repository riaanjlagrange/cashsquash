import { createAsyncThunk } from "@reduxjs/toolkit";

const enpoint = "http://localhost:3000/loanRequests";

export const loadLoanRequests = createAsyncThunk('loanRequests/loadLoanRequests', async () => {
	try {
		const response = await fetch(enpoint);
		if (response.ok) {
			const data = await response.json();
			return data;
		}
	} catch (err) {
		console.log(err);
	}
})
