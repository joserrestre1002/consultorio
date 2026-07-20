import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '@/features/auth/pages/Login/LoginPage'
import DashboardPage from '@/features/dashboard/pages/DashboardPage'
import NotFoundPage from '@/features/auth/pages/NotFound/NotFoundPage'
import MainLayout from '@/layouts/MainLayout'
import PublicRoute from './PublicRoute'
import ProtectedRoute from './ProtectedRoute'
import { ROUTES } from './routes'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route element={<PublicRoute />}>
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        </Route>

        {/* Rutas privadas */}
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
          </Route>
        </Route>

        {/* Página no encontrada */}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
