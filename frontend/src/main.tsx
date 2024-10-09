import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './routes/Root';
import { ErrorPage } from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
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
        element: <Friend />,
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
    ]
  },

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
