
import { useAppSelector } from "../../app/hooks";
import { selectLoanRequests } from "./loanRequestsSlice";
import LoanRequestItem from "./LoanRequestItem";


function AllRequests() {

	const loanRequestsWithState = useAppSelector(selectLoanRequests);
	const pendingLoanRequests = loanRequestsWithState.loanRequests;
	const acceptedLoanRequests = loanRequestsWithState.acceptedLoanRequests;
	const deniedLoanRequests = loanRequestsWithState.deniedLoanRequests;


	if (loanRequestsWithState.isLoading) {
		return <h1 className="text-white text-2xl font-bold text-center">LOADING....</h1>
	}

	if (pendingLoanRequests.length === 0 && deniedLoanRequests.length === 0 && acceptedLoanRequests.length === 0) {
		return <h1 className="text-white text-2xl font-bold text-center">YOU HAVE NO REQUESTS</h1>
	}

	return (
		<div className="flex flex-col gap-10 justify-start h-full items-center w-full p-16">
			<h1 className="text-white text-xl">All Loan Requests</h1>
			<ul className="flex flex-col gap-2 p-5 w-full">
				{pendingLoanRequests.map((loanRequest) => (
					<li key={loanRequest.id}>
						<LoanRequestItem loanRequest={loanRequest} link={`/loan-requests/${loanRequest.id}`} requestStatus="pending" />
					</li>
				))}
			</ul>
			<ul className="flex flex-col gap-2 p-5 w-full">
				{acceptedLoanRequests.map((loanRequest) => (
					<li key={loanRequest.id}>
						<LoanRequestItem loanRequest={loanRequest} link={`/accepted-loan-requests/${loanRequest.id}`} requestStatus="accepted" />
					</li>
				))}
			</ul>
			<ul className="flex flex-col gap-2 p-5 w-full">
				{deniedLoanRequests.map((loanRequest) => (
					<li key={loanRequest.id}>
						<LoanRequestItem loanRequest={loanRequest} link={`/denied-loan-requests/${loanRequest.id}`} requestStatus="denied" />
					</li>
				))}
			</ul>
		</div>
	)
}


export default AllRequests;
