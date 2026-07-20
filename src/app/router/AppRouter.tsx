import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '@/features/auth/pages/Login/LoginPage'
import DashboardPage from '@/features/dashboard/pages/DashboardPage'
import NotFoundPage from '@/features/auth/pages/NotFound/NotFoundPage'
import MainLayout from '@/layouts/MainLayout'
import PublicRoute from './PublicRoute'
import ProtectedRoute from './ProtectedRoute'
import { ROUTES } from './routes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        path: ROUTES.LOGIN,
        element: <LoginPage />,
      },
    ],
  },

  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: ROUTES.DASHBOARD,
            element: <DashboardPage />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

const AppRouter = () => {
  return <RouterProvider router={router} />
}

export default AppRouter
