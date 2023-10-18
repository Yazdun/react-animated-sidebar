import { useRef, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AnimatePresence, motion } from 'framer-motion'
import { useClickAway } from 'react-use'
import { AiOutlineRollback } from 'react-icons/ai'
import { BiHomeSmile, BiUser } from 'react-icons/bi'
import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2'
import { FiSettings, FiShoppingCart } from 'react-icons/fi'

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false))
  const toggleSidebar = () => setOpen(prev => !prev);

  return <div>Sidebar</div>
}
