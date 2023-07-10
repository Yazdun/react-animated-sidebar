import { Sidebar } from './Sidebar'

export const Navigation = () => {
  return (
    <nav className="p-5 bg-zinc-950 border-b-2 border-zinc-800">
      <div className="flex items-center gap-3">
        <Sidebar />
        <p className="font-bold">Animated Sidebar</p>
      </div>
    </nav>
  )
}
