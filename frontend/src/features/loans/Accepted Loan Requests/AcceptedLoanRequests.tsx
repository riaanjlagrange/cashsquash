import { useAppSelector } from "../../../app/hooks";
import { selectLoanRequests } from "../loanRequestsSlice";
import LoanRequestItem from "../LoanRequestItem";


function AcceptedLoanRequests() {

	const loanRequestsWithState = useAppSelector(selectLoanRequests);
	const acceptedLoanRequests = loanRequestsWithState.acceptedLoanRequests;


	if (loanRequestsWithState.isLoading) {
		return <h1 className="text-white font-bold flex items-center justify-center mt-10">LOADING....</h1>
	}

	if (acceptedLoanRequests.length === 0) {
		return <h1 className="text-white font-bold flex items-center justify-center mt-10">NO ACCEPTED LOAN REQUESTS</h1>
	}

	return (
		<div className="flex flex-col gap-10 justify-start h-full items-center w-full p-16">
			<h1 className="text-white text-xl">Accepted Loan Requests</h1>
			<ul className="flex flex-col gap-2 p-5 w-full">
				{acceptedLoanRequests.map((loanRequest) => (
					<li key={loanRequest.id}>
						<LoanRequestItem loanRequest={loanRequest} link={`/accepted-loan-requests/${loanRequest.id}`} requestStatus="accepted" />
					</li>
				))}
			</ul>
		</div>
	)
}


export default AcceptedLoanRequests;
