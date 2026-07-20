import { NavLink } from 'react-router-dom'
import { navigation } from '@/config/navigation'

const Sidebar = () => {
  return (
    <div>
      <aside className='w-54 border-r bg-white'>
        <nav className='flex flex-col gap-2 p4'>
          {navigation.map(({ label, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3 transition-all
                  ${isActive ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'}`
              }
            >
              <Icon size={20} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </div>
  )
}

export default Sidebar
