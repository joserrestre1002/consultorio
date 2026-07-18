interface SplashScreenProps {
  message?: string
}

const SplashScreen = ({ message = 'Verificando sesión...' }: SplashScreenProps) => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white'>
      {/* Logo */}
      <div className='mb-8 flex h-24 w-24 animate-pulse items-center justify-center rounded-3xl bg-cyan-500 shadow-lg shadow-cyan-500/30'>
        <span className='text-4xl font-bold'>Ψ</span>
      </div>

      {/* Nombre */}
      <h1 className='text-3xl font-bold tracking-wide'>Consultorio Psicológico</h1>

      <p className='mt-2 text-slate-400'>{message}</p>

      {/* Loader */}
      <div className='mt-10 h-12 w-12 animate-spin rounded-full border-4 border-slate-700 border-t-cyan-500' />
    </div>
  )
}

export default SplashScreen
