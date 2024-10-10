import { loadLoanRequests } from "./loadLoanRequests";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect } from "react";
import { selectLoanRequests } from "./loanRequestsSlice";
// import { loanRequest as loanRequestInterface } from './loanRequestsSlice.ts';


function DashboardLoanRequests() {

	const dispatch = useAppDispatch();
	const loanRequestsWithState = useAppSelector(selectLoanRequests);
	const loanRequests = loanRequestsWithState.loanRequests;

	useEffect(() => {
		dispatch(loadLoanRequests());
	}, [dispatch]);

	if (loanRequestsWithState.isLoading) {
		return <h1>LOADING....</h1>
	}
	console.log(loanRequests);

	return (
		<>
			{loanRequests.map((loanRequest) => (
				<h1 key={loanRequest.id}>{loanRequest.requestMessage}</h1>
			))}
		</>
	)
}


export default DashboardLoanRequests;
