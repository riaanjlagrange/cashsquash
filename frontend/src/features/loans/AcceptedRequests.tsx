import { useAppSelector } from "../../app/hooks";
import { selectLoanRequests } from "./loanRequestsSlice";
import LoanRequestItem from "../../components/LoanRequestItem";


function AcceptedRequests() {

	const loanRequestsWithState = useAppSelector(selectLoanRequests);
	const acceptedRequests = loanRequestsWithState.acceptedLoanRequests;

	if (loanRequestsWithState.isLoading) {
		return <h1>LOADING....</h1>
	}

	return (
		<ul className="flex flex-col gap-2 p-5">
			{acceptedRequests.map((loanRequest) => (
				<li key={loanRequest.id}>
					<LoanRequestItem loanRequest={loanRequest} />
				</li>
			))}
		</ul>
	)
}


export default AcceptedRequests;
