import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
import './index.css'
import App from './App';
import Error from './pages/Error';
import Dashboard from './pages/Dashboard';
import LoanRequests from './features/loans/Pending Loan Requests/LoanRequests';
import LoanRequestDetails from './features/loans/LoanRequestDetails';
import AcceptedRequestDetails from './features/loans/Accepted Loan Requests/AcceptedRequestDetails';
import AcceptedLoanRequests from './features/loans/Accepted Loan Requests/AcceptedLoanRequests';
import CounterOffers from './features/loans/Counter Offers/CounterOffers';
import CounterOfferForm from './features/loans/Counter Offers/CounterOfferForm';
import NewLoanRequest from './features/loans/NewLoanRequest';
import PaymentHistory from './features/payments/PaymentHistory';
import Friends from './features/friends/Friends';
import AddFriend from './features/friends/AddFriend';
import FriendProfile from './features/friends/FriendProfile';
import Profile from './features/profile/Profile';
import Settings from './pages/Settings';
import Wallet from './features/payments/Wallet';
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import DeniedLoanRequests from './features/loans/Denied Loan Requests/DeniedLoanRequests';
import DeniedRequestDetails from './features/loans/Denied Loan Requests/DeniedRequestDetails';
import AllRequests from './features/loans/AllRequests';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/dashboard" />,
  },
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "all-requests",
        element: <AllRequests />,
      },
      {
        path: "accepted-loan-requests",
        element: <AcceptedLoanRequests />,
      },
      {
        path: "accepted-loan-requests/:loanRequestId",
        element: <AcceptedRequestDetails />,
      },

      {
        path: "loan-requests",
        element: <LoanRequests />,
      },
      {
        path: "loan-requests/:loanRequestId",
        element: <LoanRequestDetails />,
      },

      {
        path: "counter-offers",
        element: <CounterOffers />,
      },
      {
        path: "counter-offers/:loanRequestId",
        element: <CounterOfferForm />,
      },

      {
        path: "denied-loan-requests",
        element: <DeniedLoanRequests />,
      },
      {
        path: "denied-loan-requests/:loanRequestId",
        element: <DeniedRequestDetails />,
      },

      {
        path: "new-request",
        element: <NewLoanRequest />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
      {
        path: "friends",
        element: <Friends />,
      },
      {
        path: "add-friend",
        element: <AddFriend />,
      },
      {
        path: "friends/:friendId",
        element: <FriendProfile />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "my-wallet",
        element: <Wallet />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ]
  },

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
