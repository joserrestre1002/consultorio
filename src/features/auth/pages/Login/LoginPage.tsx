import { useAuth } from '@/features/auth/hooks/useAuth'
import { ROUTES } from '@/router/routes'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()
  const { login, isLoading } = useAuth()

  async function handleLogin() {
    await login()
    navigate(ROUTES.DASHBOARD, {
      replace: true,
    })
  }
  return (
    <div className='flex min-h-screen items-center justify-center bg-slate-100'>
      <button
        onClick={handleLogin}
        disabled={isLoading}
        className='rounded bg-cyan-600 px-6 py-3 text-white'
      >
        Inicar Sesion
      </button>
    </div>
  )
}

export default LoginPage
