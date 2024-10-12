import { useAppSelector } from "../../../app/hooks";
import { selectLoanRequests } from "../loanRequestsSlice";
import LoanRequestItem from "../LoanRequestItem";


function LoanRequests() {

	const loanRequestsWithState = useAppSelector(selectLoanRequests);
	const loanRequests = loanRequestsWithState.loanRequests;


	if (loanRequestsWithState.isLoading) {
		return <h1 className="flex flex-col gap-10 justify-center items-center w-full">LOADING....</h1>
	}

	if (loanRequests.length === 0) {
		return <h1 className="flex flex-col gap-10 justify-center items-center w-full">NO LOAN REQUESTS</h1>
	}

	return (
		<div className="flex flex-col gap-10 justify-start h-full items-center w-full p-16">
			<h1 className="text-white text-xl">Pending Loan Requests</h1>
			<ul className="flex flex-col gap-2 p-5 w-full">
				{loanRequests.map((loanRequest) => (
					<li key={loanRequest.id}>
						<LoanRequestItem loanRequest={loanRequest} link={`/loan-requests/${loanRequest.id}`} requestStatus="pending" />
					</li>
				))}
			</ul>
		</div>
	)
}


export default LoanRequests;
