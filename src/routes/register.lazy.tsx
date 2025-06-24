import { Register } from '@/pages'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/register')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Register/>
}
