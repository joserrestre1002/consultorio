import { Outlet } from 'react-router-dom'
import Header from './partials/Header'
import Sidebar from './partials/Sidebar'
import Footer from './partials/Footer'
const MainLayout = () => {
  return (
    <div className='min-h-screen flex-col bg-slate-100'>
      <Header />
      <div className='flex flex-1'>
        <Sidebar />

        <main className='flex-1 p-6 overflow-auto'>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
