import { Sidebar } from './Sidebar'
import { FiGithub } from 'react-icons/fi'

export const Navigation = () => {
  return (
    <nav className='flex items-center justify-between px-5 py-2 border-b-2 border-zinc-800'>
      <div className="flex items-center gap-3">
        <Sidebar />
        <p>Animated Sidebar</p>
      </div>
      <a href="/" className="flex items-center gap-2 px-4 py-2 text-orange-400 bg-orange-700/20 rounded-xl">
        <FiGithub className='text-lg' />
      </a>
    </nav>
  )
}
