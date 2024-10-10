import { loadLoanRequests } from "./loadLoanRequests";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect } from "react";
import { selectLoanRequests } from "./loanRequestsSlice";
import LoanRequestItem from "../../components/LoanRequestItem";


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
		<ul className="flex flex-col gap-2 p-5">
			{loanRequests.map((loanRequest) => (
				<li key={loanRequest.id}>
					<LoanRequestItem loanRequest={loanRequest} />
				</li>
			))}
		</ul>
	)
}


export default DashboardLoanRequests;
