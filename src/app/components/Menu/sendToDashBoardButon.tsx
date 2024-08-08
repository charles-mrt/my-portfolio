
import { isSessionValid } from '@/app/services/user'
import { LayoutDashboard } from 'lucide-react'
import Link from 'next/link'

export const SendToDashBoardButon = async () => {
  const session = await isSessionValid()
  return (
    session && (
      <div className="fixed right-60 top-0 z-50 h-12 p-0 flex items-center">
      <Link
        href="/dashboard"
        title="dashboard"
        className="text-green-500 bg-zinc-900 rounded-md p-1 hover:opacity-75"
      >
        <LayoutDashboard />
      </Link>
      </div>
    )
  )
}