import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
      <aside className='w-54 border-r bg-white'>
        <nav className='flex flex-col gap-2 p4'>
          <NavLink to='/dashboard'>Dashboard</NavLink>
          <NavLink to='/agenda'>Agenda</NavLink>
          <NavLink to='/pacientes'>Pacientes</NavLink>
          <NavLink to='psiclogos'>Psicologos</NavLink>
          <NavLink to='/reportes'>Reportes</NavLink>
        </nav>
      </aside>
    </div>
  )
}

export default Sidebar
