import { Navigate, Outlet } from 'react-router-dom'
import { ROUTES } from './routes'
import SplashScreen from '@/components/SplashScreen'
import { useAuth } from '@/features/auth/hooks/useAuth'

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return <SplashScreen />
  }

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />
  }

  return <Outlet />
}

export default ProtectedRoute
