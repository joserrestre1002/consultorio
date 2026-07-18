import { Navigate, Outlet } from 'react-router-dom'
import { ROUTES } from './routes'

const isAuthenticated = false // Simulado

const PublicRoute = () => {
  if (isAuthenticated) {
    return <Navigate to={ROUTES.DASHBOARD} replace />
  }

  return <Outlet />
}

export default PublicRoute
