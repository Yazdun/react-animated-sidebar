import { useRef, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AnimatePresence, motion } from 'framer-motion'
import { useClickAway } from 'react-use'

export const Sidebar = () => {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useClickAway(ref, () => setOpen(false))

  const toggleSidebar = () => setOpen(prev => !prev)

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="p-3 border-2 border-zinc-800 rounded-xl"
      >
        <GiHamburgerMenu />
      </button>
      <AnimatePresence mode="wait" initial={false}>
        {open && (
          <>
            <motion.div
              {...framerSidebarBackground}
              className="fixed bottom-0 left-0 right-0 top-0 z-40 bg-[rgba(0,0,0,0.1)] backdrop-blur-sm"
            ></motion.div>
            <motion.div
              {...framerSidebarPanel}
              className="fixed bottom-0 border-r-2 border-zinc-800 max-w-[14rem] left-0 bg-zinc-950 top-0 z-50 h-screen w-[100%]"
              ref={ref}
            >
              <div
                className="p-5 border-b-2 border-zinc-800"
                onClick={toggleSidebar}
              >
                <button className="flex justify-between w-full">back</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

const framerSidebarBackground = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.2 } },
  transition: { duration: 0.3 },
}

const framerSidebarPanel = {
  initial: { x: '-100%' },
  animate: { x: 0 },
  exit: { x: '-100%' },
  transition: { duration: 0.3 },
}

// const framerIcon = (delay) => {
//   return {
//     initial: { scale: 0 },
//     animate: { scale: 1 },
//     transition: {
//       type: 'spring',
//       stiffness: 260,
//       damping: 20,
//       delay: 0.4 + delay / 10,
//     },
//   }
// }
