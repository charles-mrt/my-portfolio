import { ReactNode } from 'react'
import Link from 'next/link'
import { HomeIcon, LayoutDashboard, LogOut } from 'lucide-react'

const navMenu = {
  home: {
    route: '/',
    name: 'home',
  },
  dashboard: {
    route: '/dashboard',
    name: 'dashboard',
  },
  logout: {
    route: 'http://localhost:3000/logout',
    name: 'logout'
  }
};

interface MenuItemProps {
  route: string
  children: ReactNode
  background: string 
}

const MenuItem = ({ route, children, background}: MenuItemProps) => {
  return (
    <Link
      href={route}
      className={`flex gap-2 items-center justify-center p-2 rounded-md text-zinc-100 font-sans capitalize ${background}`}
    >
      {children}
    </Link>
  );
};

export const LoggedInMenu = () => {
  return (
    <header className="fixed z-50 top-0 left-0 w-full h-auto p-2 border-b-[1px] bg-zinc-800 border-green-500">
      <nav className="flex justify-between">
        <div className="flex gap-2">
          <MenuItem route={navMenu.home.route} background={'bg-zinc-700'}>
            <HomeIcon width={16} />
            {navMenu.home.name}          
          </MenuItem>

          <MenuItem route={navMenu.dashboard.route} background="bg-green-400">
            <LayoutDashboard width={16} />
            {navMenu.dashboard.name}
          </MenuItem>
        </div>

        <MenuItem route={navMenu.logout.route} background={'bg-red-400/80'}>
          <LogOut width={16} />
          {navMenu.logout.name}
        </MenuItem>

      </nav>
    </header>
  );
};
