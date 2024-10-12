import { useParams } from "react-router-dom";
import { getSelectedLoanRequest } from "./loanRequestsSlice";
import { getRequestedLoanById } from "./loanRequestsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function LoanRequestDetails() {
	const { loanRequestId } = useParams();
	const dispatch = useAppDispatch();
	const selectedLoanRequest = useAppSelector(getSelectedLoanRequest);

	useEffect(() => {
		if (loanRequestId) {
			dispatch(getRequestedLoanById({ id: loanRequestId }));
		}
	}, [dispatch, loanRequestId])

	if (!loanRequestId) {
		return <h1>an error has occured...</h1>
	}


	return (
		<div className="w-full h-full bg-slate-900 p-20 flex items-center justify-center">
			<div className="w-full h-full flex flex-col justify-center items-center gap-5 p-10 bg-custom-primary-default">
				<h1 className="text-green-400 text-center text-xl">Request from <Link to="/friends/:friendId" className="underline font-bold text-slate-800 hover:text-slate-900">{selectedLoanRequest?.fromUserId}</Link> accepted!</h1>
				<div className="flex flex-col items-start justify-center gap-2 bg-slate-800 p-10">
					<div>
						<h2 className="text-custom-accent-default text-lg font-bold">{selectedLoanRequest?.fromUserId} Due Date:</h2>
						<p className="text-white text-md">{selectedLoanRequest?.dueDate}</p>
					</div>
					<div>
						<h2 className="text-custom-accent-default text-lg font-bold">Loan Repayment Status:</h2>
						<p className="text-white text-md">{selectedLoanRequest?.paymentStatus}</p>
					</div>
					<div>
						<h2 className="text-custom-accent-default text-lg font-bold">Payment Plan:</h2>
						<p className="text-white text-md">{selectedLoanRequest?.paymentPlan}</p>
					</div>
					<h1 className="text-xl text-green-500">Payment Successful!</h1>
				</div>
			</div>
		</div>
	);
}

export default LoanRequestDetails;
