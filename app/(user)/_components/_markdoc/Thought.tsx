import { ReactNode } from 'react'

export default function Thought({ children }: { children: ReactNode }) {
  return <p className="py-4 font-medium italic">{children}</p>
}
