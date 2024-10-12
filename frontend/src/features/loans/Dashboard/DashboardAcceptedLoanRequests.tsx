
import { useAppSelector } from "../../../app/hooks";
import { selectLoanRequests } from "../loanRequestsSlice";
import LoanRequestItem from "../LoanRequestItem";


function AcceptedLoanRequests() {

	const loanRequestsWithState = useAppSelector(selectLoanRequests);
	const acceptedLoanRequests = loanRequestsWithState.acceptedLoanRequests;


	if (loanRequestsWithState.isLoading) {
		return <h1 className="text-white font-bold flex items-center justify-center p-5">LOADING....</h1>
	}

	if (acceptedLoanRequests.length === 0) {
		return <h1 className="text-white font-bold flex items-center justify-center p-5">NO ACCEPTED LOAN REQUESTS</h1>
	}

	return (
		<ul className="flex flex-col gap-2 p-5">
			{acceptedLoanRequests.map((loanRequest) => (
				<li key={loanRequest.id}>
					<LoanRequestItem loanRequest={loanRequest} link={`/accepted-loan-requests/${loanRequest.id}`} requestStatus="accepted" />
				</li>
			))}
		</ul>
	)
}


export default AcceptedLoanRequests;
