import { useAppSelector } from "../../../app/hooks";
import { selectLoanRequests } from "../loanRequestsSlice";
import LoanRequestItem from "../LoanRequestItem";


function DashboardDeniedLoanRequests() {

	const loanRequestsWithState = useAppSelector(selectLoanRequests);
	const deniedLoanRequests = loanRequestsWithState.deniedLoanRequests;


	if (loanRequestsWithState.isLoading) {
		return <h1 className="text-white font-bold flex items-center justify-center p-5">LOADING....</h1>
	}

	if (deniedLoanRequests.length === 0) {
		return <h1 className="text-white font-bold flex items-center justify-center p-5">NO DENIED LOAN REQUESTS</h1>
	}
	return (
		<ul className="flex flex-col gap-2 p-5">
			{deniedLoanRequests.map((loanRequest) => (
				<li key={loanRequest.id}>
					<LoanRequestItem loanRequest={loanRequest} link={`/denied-loan-requests/${loanRequest.id}`} requestStatus="denied" />
				</li>
			))}
		</ul>
	)
}


export default DashboardDeniedLoanRequests;
