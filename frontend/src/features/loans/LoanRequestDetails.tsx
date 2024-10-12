import { useParams } from "react-router-dom";
import { getSelectedLoanRequest, moveRequestedLoanByIdToAccepted, moveRequestedLoanByIdToDenied } from "./loanRequestsSlice";
import { getRequestedLoanById, removeRequestedLoanById } from "./loanRequestsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoanRequestDetails() {
	const { loanRequestId } = useParams();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const selectedLoanRequest = useAppSelector(getSelectedLoanRequest);

	const handleRequestResponse = (response: string): void => {
		switch (response) {
			case "accept":
				if (loanRequestId) {
					dispatch(moveRequestedLoanByIdToAccepted({ id: loanRequestId }));
					dispatch(removeRequestedLoanById({ id: loanRequestId }));
				}
				console.log("request accepted");
				navigate("/accepted-requests/:loanRequestId");
				break;
			case "deny":
				if (loanRequestId) {
					dispatch(moveRequestedLoanByIdToDenied({ id: loanRequestId }));
					dispatch(removeRequestedLoanById({ id: loanRequestId }));
				}
				console.log("request denied");
				navigate("/loan-requests");
				break;
			case "counter offer":
				console.log("counter offer");
				navigate("/counter-offers/:loanRequestId");
		}
	}

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
				<h1 className="text-white text-center text-xl">Request from: <Link to="/friends/:friendId" className="underline font-bold text-slate-800 hover:text-slate-900">{selectedLoanRequest?.fromUserId}</Link></h1>
				<div className="flex flex-col items-start justify-center gap-2 bg-slate-800 p-10">
					<div>
						<h2 className="text-custom-accent-default text-lg font-bold">Request Message:</h2>
						<p className="text-white text-md">{selectedLoanRequest?.requestMessage}</p>
					</div>
					<div>
						<h2 className="text-custom-accent-default text-lg font-bold">Request Amount:</h2>
						<p className="text-white text-md">{selectedLoanRequest?.amount}</p>
					</div>
					<div>
						<h2 className="text-custom-accent-default text-lg font-bold">Payment Plan:</h2>
						<p className="text-white text-md">{selectedLoanRequest?.paymentPlan}</p>
					</div>
				</div>
				<div className="flex gap-2 justify-center items-center">
					<button onClick={() => handleRequestResponse("accept")} className="bg-green-400 px-5 py-3 rounded-sm hover:bg-green-500">Accept</button>
					<button onClick={() => handleRequestResponse("deny")} className="bg-red-400 px-5 py-3 rounded-sm hover:bg-red-500">Deny</button>
					<button onClick={() => handleRequestResponse("counter offer")} className="bg-orange-400 px-5 py-3 rounded-sm hover:bg-orange-500">Make Counter Offer</button>
				</div>
			</div>
		</div>
	);
}

export default LoanRequestDetails;
