import { useAppSelector } from "../../app/hooks";
import { selectLoanRequests } from "./loanRequestsSlice";
import LoanRequestItem from "../../components/LoanRequestItem";


function DashboardLoanRequests() {

	const loanRequestsWithState = useAppSelector(selectLoanRequests);
	const loanRequests = loanRequestsWithState.loanRequests;


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
