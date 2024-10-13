import { useAppSelector } from "../../app/hooks";
import { loanRequest, selectLoanRequests } from "./loanRequestsSlice";
import LoanRequestItem from "./LoanRequestItem";
import FuzzySearch from 'fuzzy-search';
import { useState } from "react";


function AllRequests() {
	const [searchInput, setSearchInput] = useState("");

	const loanRequestsWithState = useAppSelector(selectLoanRequests);
	const pendingLoanRequests = loanRequestsWithState.loanRequests;
	const acceptedLoanRequests = loanRequestsWithState.acceptedLoanRequests;
	const deniedLoanRequests = loanRequestsWithState.deniedLoanRequests;

	const pendingRequestsSearcher = new FuzzySearch(pendingLoanRequests, ['requestMessage', 'fromUsedId', 'amount', 'id'], {
		caseSensitive: false,
	});
	const acceptedRequestsSearcher = new FuzzySearch(acceptedLoanRequests, ['requestMessage', 'fromUsedId', 'amount', 'id'], {
		caseSensitive: false,
	});
	const deniedRequestsSearcher = new FuzzySearch(deniedLoanRequests, ['requestMessage', 'fromUsedId', 'amount', 'id'], {
		caseSensitive: false,
	});

	const filteredPendingRequests: loanRequest[] | null = pendingRequestsSearcher.search(searchInput);
	const filteredAcceptedRequests: loanRequest[] | null = acceptedRequestsSearcher.search(searchInput);
	const filteredDeniedRequests: loanRequest[] | null = deniedRequestsSearcher.search(searchInput);


	if (loanRequestsWithState.isLoading) {
		return <h1 className="text-white text-2xl font-bold text-center">LOADING....</h1>
	}

	if (pendingLoanRequests.length === 0 && deniedLoanRequests.length === 0 && acceptedLoanRequests.length === 0) {
		return <h1 className="text-white text-2xl font-bold text-center">YOU HAVE NO REQUESTS</h1>
	}

	return (
		<div className="flex flex-col gap-10 justify-start h-full items-center w-full p-16">
			<h1 className="text-white text-xl">All Loan Requests</h1>
			<div className="flex gap-2 justify-center items-center">
				<input type="text" onChange={(e) => setSearchInput(e.target.value)} />
			</div>
			<ul className="flex flex-col gap-2 p-5 w-full">
				{filteredPendingRequests.map((loanRequest) => (
					<li key={loanRequest.id}>
						<LoanRequestItem loanRequest={loanRequest} link={`/loan-requests/${loanRequest.id}`} requestStatus="pending" />
					</li>
				))}
			</ul>
			<ul className="flex flex-col gap-2 p-5 w-full">
				{filteredAcceptedRequests.map((loanRequest) => (
					<li key={loanRequest.id}>
						<LoanRequestItem loanRequest={loanRequest} link={`/accepted-loan-requests/${loanRequest.id}`} requestStatus="accepted" />
					</li>
				))}
			</ul>
			<ul className="flex flex-col gap-2 p-5 w-full">
				{filteredDeniedRequests.map((loanRequest) => (
					<li key={loanRequest.id}>
						<LoanRequestItem loanRequest={loanRequest} link={`/denied-loan-requests/${loanRequest.id}`} requestStatus="denied" />
					</li>
				))}
			</ul>
		</div>
	)
}


export default AllRequests;
