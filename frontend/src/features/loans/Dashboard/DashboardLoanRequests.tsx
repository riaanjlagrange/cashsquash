import { useAppSelector } from "../../../app/hooks";
import { selectLoanRequests } from "../loanRequestsSlice";
import LoanRequestItem from "../LoanRequestItem";


function DashboardLoanRequests() {

	const loanRequestsWithState = useAppSelector(selectLoanRequests);
	const loanRequests = loanRequestsWithState.loanRequests;


	if (loanRequestsWithState.isLoading) {
		return <h1 className="text-white font-bold flex items-center justify-center p-5">LOADING....</h1>
	}

	if (loanRequests.length === 0) {
		return <h1 className="text-white font-bold flex items-center justify-center p-5">NO LOAN REQUESTS</h1>
	}

	return (
		<ul className="flex flex-col gap-2 p-5">
			{loanRequests.map((loanRequest) => (
				<li key={loanRequest.id}>
					<LoanRequestItem loanRequest={loanRequest} link={`/loan-requests/${loanRequest.id}`} requestStatus="pending" />
				</li>
			))}
		</ul>
	)
}


export default DashboardLoanRequests;
