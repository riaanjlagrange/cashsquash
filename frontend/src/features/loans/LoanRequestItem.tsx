import { Link } from "react-router-dom";
import { loanRequest as loanRequestInterface } from "./loanRequestsSlice"
import { FaChevronRight } from "react-icons/fa";

function loanRequestItem({ loanRequest, link, requestStatus }: { loanRequest: loanRequestInterface, link: string, requestStatus: string | null }) {

  let color;
  switch (requestStatus) {
    case "accepted":
      color = "green";
      break;
    case "denied":
      color = "red";
      break;
    case "pending":
      color = "amber";
      break;
    default:
      color = "invalid";
  }
  console.log(requestStatus);

  const status = (
    <span className={`text-${color}-400 hover:text-${color}-500 font-bold text-md rounded-sm text-center`}>{requestStatus}</span>
  )

  return (
    <Link to={link} className="grid grid-cols-7 justify-center items-center bg-slate-800 w-full px-5 py-2 h-20">
      <h1 className="text-md text-white col-span-1">{loanRequest.fromUserId}</h1>
      <p className="text-sm text-white col-span-3">{loanRequest.requestMessage}</p>
      <div className="flex flex-col justify-center items-center col-span-2">
        <span className="text-sm text-white">{loanRequest.amount}</span>
        <span className="text-sm text-white">{loanRequest.dueDate}</span>
      </div>
      {color !== "invalid" ? status : <FaChevronRight className="font-light text-white" />}

    </Link>
  )
}

export default loanRequestItem;
