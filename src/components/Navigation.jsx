import { FiGithub } from 'react-icons/fi'
import { Sidebar } from './Sidebar'

export const Navigation = () => {
  return (
    <nav className="p-5 bg-zinc-950 border-b-2 flex justify-between items-center border-zinc-800">
      <div className="flex items-center gap-3">
        <Sidebar />
        <p className="font-bold">Animated Sidebar</p>
      </div>
      <a
        className="p-4 flex items-center gap-2 hover:bg-white bg-gray-200 transition-all text-black font-semibold rounded-xl"
        href=""
      >
        <FiGithub className="text-lg" />
        Source Code
      </a>
    </nav>
  )
}
