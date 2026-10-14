import { redirect } from 'next/navigation'
import { auth } from '@/auth.config'
import { getPaginatedMessages } from '@/actions/message'
import MessagesClient from './MessagesClient'

export const dynamic = 'force-dynamic'

export default async function AppPage() {
  const session = await auth()

  if (!session?.user) {
    redirect('/auth')
  }

  const messagesResult = await getPaginatedMessages({
    page: 1,
    take: 200,
  })

  return (
    <MessagesClient
      initialMessages={messagesResult?.data || []}
      userName={session.user.name || session.user.email || 'Citla'}
    />
  )
}