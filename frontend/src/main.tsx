import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Error from './pages/Error';
import Dashboard from './pages/Dashboard';
import MyLoans from './features/loans/MyLoans';
import LoanRequests from './features/loans/LoanRequests';
import PaymentHistory from './features/payments/PaymentHistory';
import Friends from './features/friends/Friends';
import AddFriend from './features/friends/AddFriend';
import FriendProfile from './features/friends/FriendProfile';
import Profile from './features/profile/Profile';
import Settings from './pages/Settings';
import Notifications from './features/notifications/Notifications';
import Wallet from './features/payments/Wallet';
import Login from './features/auth/Login';
import Register from './features/auth/Register';

const router = createBrowserRouter([
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
        path: "my-loans",
        element: <MyLoans />,
      },
      {
        path: "loan-requests",
        element: <LoanRequests />,
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
        children: [
          {
            path: "settings",
            element: <Settings />,
          },
          {
            path: "notifications",
            element: <Notifications />,
          },
          {
            path: "my-wallet",
            element: <Wallet />,
          }
        ]
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
    <RouterProvider router={router} />
  </StrictMode>,
)
