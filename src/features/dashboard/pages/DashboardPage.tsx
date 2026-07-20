import { useAuth } from '@/features/auth/hooks/useAuth'

export default function DashboardPage() {
  const { user, logout } = useAuth()

  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold'>Bienvenido {user?.fullName}</h1>

      <button onClick={logout} className='mt-6 rounded bg-red-600 px-5 py-2 text-white'>
        Cerrar sesión
      </button>
    </div>
  )
}
