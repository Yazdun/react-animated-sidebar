import { GiHamburgerMenu } from 'react-icons/gi'

const Navigation = () => {
  return (
    <nav className="p-5 bg-zinc-950 border-b-2 border-zinc-800">
      <div className="flex items-center gap-3">
        <button className="p-3 border-2 border-zinc-800 rounded-xl">
          <GiHamburgerMenu />
        </button>
        <p className="font-bold">Animated Sidebar</p>
      </div>
    </nav>
  )
}

function App() {
  return (
    <div>
      <Navigation />
    </div>
  )
}

export default App
